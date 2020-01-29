// operator button class
var OperatorButtonModel = function (id, value, options) {
    this.type = "operator";
    ButtonModel.call(this, id, value, options);
};
OperatorButtonModel.prototype = new ButtonModel();
OperatorButtonModel.prototype.constructor = OperatorButtonModel;