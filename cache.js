class CacheStorage {
    constructor () {
        this._data = new Map();
    }

    store (key = "", value = {}) {
        this._data.set(key, value);
    }

    get (key = "") {
        return this._data.get(key);
    }

    has (key = "") {
        return this._data.has(key);
    }
}

module.exports = { CacheStorage };
