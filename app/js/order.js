System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Order;
    return {
        setters:[],
        execute: function() {
            Order = (function () {
                function Order(ordernumber, ordername, orderstatus) {
                    this.ordernumber = ordernumber;
                    this.ordername = ordername;
                    this.orderstatus = orderstatus;
                }
                return Order;
            }());
            exports_1("Order", Order);
        }
    }
});
//# sourceMappingURL=order.js.map