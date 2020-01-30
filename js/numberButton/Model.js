// number button class - inherits button class
var NumberButtonModel = function (id, value, options) {
    this.type = "numeric";
    ButtonModel.call(this,id,value,options);
};
NumberButtonModel.prototype = new ButtonModel();
NumberButtonModel.prototype.constructor = NumberButtonModel;
