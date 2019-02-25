var querystring = require('./querystring.js')

function get (base, path) {
	return newRequest().init('GET', base, path)
}

function post (base, path) {
	return newRequest().init('POST', base, path)
}

function del (base, path) {
	return newRequest().init('DELETE', base, path)
}

function patch (base, path) {
	return newRequest().init('PATCH', base, path)
}

function head (base, path) {
	return newRequest().init('HEAD', base, path)
}

function put (base, path) {
	return newRequest().init('PUT', base, path)
}

function newRequest () {
	var r = {
		parse: asis,
		hooks: [],
		beforehooks: [],
		base: '',
		path: '',
		credentials: 'same-origin',
		query: {},
	}

	r.init = function (method, base, path) {
		var req = r.clone().setMethod(method)
		if (base) req = req.setBase(base)
		if (path) req = req.setPath(path)
		return req
	}

	r.merge = function (obj) {
		return Object.assign(this.clone(), obj)
	}

	r.clone = function () {
		return Object.assign(newRequest(), this, {
			query: Object.assign({}, this.query),
			hooks: this.hooks.slice(),
			beforehooks: this.beforehooks.slice(),
		})
	}

	r.addQuery = function (key, val) {
		var req = this.clone()
		req.query[key] = val
		return req
	}

	r.removeQuery = function (key) {
		var req = this.clone()
		if (req.query[key] !== undefined) {
			req.query[key] = undefined
		}
		return req
	}

	r.setQuery = function (query) {
		var req = this.clone()
		req.query = query
		return req
	}

	r.setMode = function (mode) {
		var req = this.clone()
		req.mode = mode
		return req
	}

	r.setCredentials = function (credentials) {
		return this.merge({ credentials: credentials })
	}

	r.clearHooks = function () {
		var req = this.clone()
		req.hooks = []
		req.beforehooks = []
		return req
	}

	r.beforeHook = function (promise) {
		var req = this.clone()
		req.beforehooks.push(promise)
		return req
	}

	r.injectHook = function (f) {
		var req = this.clone()
		req.hooks.push(f)
		return req
	}

	r.setPath = function (newpath) {
		var req = this.clone()
		req.path = norm(newpath)
		return req
	}

	r.setHeader = function (headers) {
		var req = this.clone()
		req.headers = Object.assign({}, this.headers, headers)
		req.headers['Content-Type'] = undefined
		return req
	}

	r.put = function (base, path) {
		return r.init('PUT', base, path)
	}

	r.head = function (base, path) {
		return r.init('HEAD', base, path)
	}

	r.patch = function (base, path) {
		return r.init('PATCH', base, path)
	}

	r.del = function (base, path) {
		return r.init('DELETE', base, path)
	}

	r.post = function (base, path) {
		return r.init('POST', base, path)
	}

	r.get = function (base, path) {
		return r.init('GET', base, path)
	}

	r.setMethod = function (method) {
		var req = this.clone()
		req.method = norm(method)
		return req
	}

	r.setBase = function (base) {
		var req = this.clone()
		req.base = norm(base)
		return req
	}

	r.contentTypeJson = function () {
		return this.merge({ content_type: 'application/json; charset=utf-8' })
	}

	r.contentTypeForm = function () {
		return this.merge({ content_type: 'application/x-www-form-urlencoded' })
	}

	r.setContentType = function (ty) {
		return this.merge({ content_type: norm(ty) })
	}

	r.setParser = function (parser) {
		var req = this.clone()
		switch (norm(parser)) {
		case 'json':
			req.parse = function (data) {
				if (data === undefined) return
				return JSON.parse(data)
			}
			break
		default:
			req.parse = asis
			break
		}
		return req
	}

	r.send = function (data) {
		var req = this.clone()
		if (data) {
			if (this.content_type === 'application/json; charset=utf-8') {
				req.body = JSON.stringify(data)
			} else if (this.content_type === 'application/x-www-form-urlencoded') {
				req.body = querystring.stringify(data)
			} else {
				req.body = data
			}
		}

		var param = { request: req }
		return waterfall(req.beforehooks, param).then(function () {
			return dosend(param.request)
		})
	}
	return r
}

var getUrl = function (base, path) {
	if (!path || !base) return base + path

	if (!base.endsWith('/')) base += '/'
	if (path.startsWith('/')) path = path.substring(1)
	return base + path
}

var dosend = function (req) {
	return new Promise(function (rs, rj) {
		if (req.content_type) {
			req.headers = Object.assign(req.headers || {}, {
				'Content-Type': req.content_type,
			})
		}
		var resp
		var param
		var q = querystring.stringify(req.query)
		if (q) q = '?' + q
		var url = getUrl(req.base, req.path) + q
		env.fetch
			.bind(env.window)(url, req)
			.then(function (r) {
				resp = r
				return resp.text()
			})
			.then(function (body) {
				param = { req: req, code: resp.status, body: body }
				return waterfall(req.hooks, param)
			})
			.then(function () {
				var body = param.body
				try {
					body = req.parse(body)
					rs([param.code, body])
				} catch (err) {
					rs([undefined, undefined, err])
				}
			})
			.catch(function (err) {
				rs([0, undefined, err])
			})
	})
}

function norm (str) {
	return (str || '').trim()
}

function  asis (data) {
	return data
}

var env = {
	fetch: {},
	window: {},
}

module.exports = {
	post: post,
	del: del,
	head: head,
	patch: patch,
	env: env,
	get: get,
	put: put,
}

function waterfall (ps, param) {
	if (ps.length === 0) {
		return new Promise(function (r) {
			r(true)
		})
	}

	var fp = ps.shift()
	return fp(param).then(function (b) {
		if (b === false) {
			return new Promise(function (r) {
				r(false)
			})
		}
		return waterfall(ps, param)
	})
}
