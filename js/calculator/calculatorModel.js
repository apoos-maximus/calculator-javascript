function calculator () {
    var _heading = "unknown";

    Object.defineProperties (this, {
        "Description" : {
            get : function () {
                return _heading;
            },
            set : function (value) {
                _heading = value;
            }
        }
    });
};
