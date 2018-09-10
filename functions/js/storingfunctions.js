let store = {
    nextId: 1,
    cache: {},
    add: function (fn) {
        if(!fn.id){
            fn.id = this.nextId++;
            this.cache[fn.id] = fn;
            return true;
        }
    }
};
function ninja() {}
assert(store.add(ninja), "Function was safely added.");