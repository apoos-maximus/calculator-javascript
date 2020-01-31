var NumberButtonControl = function (id,value,options) {
    ButtonController.call(this,id,value,options);
};
NumberButtonControl.prototype = new ButtonController();
NumberButtonControl.prototype.constructor = NumberButtonControl;