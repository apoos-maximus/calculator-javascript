    var OperatorButtonControl = function (id, value, options) {
    ButtonController.call(this,id,value,options);
};

OperatorButtonControl.prototype = new ButtonController ();
OperatorButtonControl.prototype.constructor = OperatorButtonControl;