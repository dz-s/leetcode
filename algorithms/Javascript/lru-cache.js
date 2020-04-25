/**
 * @param {number} capacity
 */
const LRUCache = (capacity) => {
    let size = capacity
    let cache = {}
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = (key) => {
    if (this.cache[key]) {
        let found = this.cache[key]
        delete this.cache[key];
        this.cache[key] = found;
        return found
    }

    return -1
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = (key, value) => {
    if (this.cache[key]) {
        delete this.cache[key];
        this.cache[key] = found;
    } else {
        if (this.cache.size === this.capacity) {
            for ([k, v] of this.cache) {
                delete this.cache[k]
                break;
            }
        }
        this.cach[key] = value
    }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */