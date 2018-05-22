const request = require('request');

// dump your api_token below
const api_token = "";
const auth = `Bearer ${api_token}`;
// const NODE_ENV = 'remote';

module.exports = {
    mReq: (method, url, data = null, query = null) => {
        return new Promise((resolve, reject) => {
            const options = {
                headers: {
                    'content-type': 'application/json',
                    'authorization': auth
                },
                json: true
            };

            const cb = (error, response, body) => {
                if (response) resolve(body);
                else reject(error);
            }

            // if (NODE_ENV === 'local') options.proxy = "http://localhost:2000/proxy.pac";
            if (method === "GET" || method === "get") {
                options.qs = query;
                request.get(url, options, cb);
            }

            if (method === "POST" || method === "post") {
                options.body = data;
                request.post(url, options, cb);
            }
        });
    }
}