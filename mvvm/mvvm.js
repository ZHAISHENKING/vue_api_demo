function MVVM(options) {
    // 将配置对象保存到vm
    this.$options = options || {};
    // 将data对象保存到vm和变量data中
    var data = this._data = this.$options.data;
    // 保存vm到变量me
    var me = this;

    // 数据代理
    // 遍历data中所有属性
    Object.keys(data).forEach(function(key) {
        me._proxyData(key);
    });

    this._initComputed();

    observe(data, this);

    this.$compile = new Compile(options.el || document.body, this)
}

MVVM.prototype = {
    constructor: MVVM,
    $watch: function(key, cb, options) {
        new Watcher(this, key, cb);
    },
    /* 
    实现指定属性代理的方法
    */
    _proxyData: function(key, setter, getter) {
        // 保存vm
        var me = this;
        // 给vm添加指定属性名的属性（使用的属性描述符）
        setter = setter || 
        Object.defineProperty(me, key, {
            configurable: false, // 不能重新定义
            enumerable: true, // 可以枚举遍历
            // 当通过vm.xxx读取属性值时调用， 从data中获取对应的属性值返回 代理读操作
            get: function proxyGetter() {
                return me._data[key];
            },
            // 当通过 vm.xxx = xxx时， value 被保存在data中对应的属性上， 代理写操作
            set: function proxySetter(newVal) {
                me._data[key] = newVal;
            }
        });
    },

    _initComputed: function() {
        var me = this;
        var computed = this.$options.computed;
        if (typeof computed === 'object') {
            Object.keys(computed).forEach(function(key) {
                Object.defineProperty(me, key, {
                    get: typeof computed[key] === 'function' 
                            ? computed[key] 
                            : computed[key].get,
                    set: function() {}
                });
            });
        }
    }
};