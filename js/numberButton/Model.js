// number button class - inherits button class
var NumberButton = function (id, value, options) {
    this.type = "numeric";
    ButtonModel.call(this,id,value,options);
};
NumberButton.prototype = new ButtonModel();
NumberButton.prototype.constructor = NumberButton;
