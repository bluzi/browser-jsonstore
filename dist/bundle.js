(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = global || self, global.jsonstore = factory());
}(this, (function () { 'use strict';

    const hostname = 'https://www.jsonstore.io';

    const getAccessKey = (accessKey) => {
        try {
            const parsedUrl = new URL(accessKey);
            return parsedUrl.pathname.substring(1);
        } catch(e) {
            return accessKey;
        }
    };

    var index = (accessKey) => ({
        get: (key) =>
            fetch(`${hostname}/${getAccessKey(accessKey)}/${key}`)
                .then((response) => response.json())
                .then((response) => response.ok ? response.result : Promise.reject(response.error)),

        post: (key, data) =>
            fetch(`${hostname}/${getAccessKey(accessKey)}/${key}`, {
                headers: {
                    'Content-type': 'application/json'
                },

                method: 'POST',
                body: JSON.stringify(data),
            })
                .then((response) => response.json())
                .then((response) => response.ok ? Promise.resolve() : Promise.reject(response.error)),

        put: (key, data) =>
            fetch(`${hostname}/${getAccessKey(accessKey)}/${key}`, {
                headers: {
                    'Content-type': 'application/json'
                },

                method: 'PUT',
                body: JSON.stringify(data),
            })
                .then((response) => response.json())
                .then((response) => response.ok ? Promise.resolve() : Promise.reject(response.error)),

        delete: (key) =>
            fetch(`${hostname}/${getAccessKey(accessKey)}/${key}`, { method: 'DLETE' })
                .then((response) => response.json())
                .then((response) => response.ok ? Promise.resolve() : Promise.reject(response.error)),
    });

    return index;

})));
