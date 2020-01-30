// interface for operator button - returns operator button dom element
var OperatorButtonControl = function (id, value, options) {
  var operatorButtonModel;
  var operatorButtonView;

  var init = function (id, value, options) {
    operatorButtonModel = new OperatorButtonModel(id, value, options);
    console.log
    var but = new OperatorButtonView(operatorButtonModel);
    operatorButtonView = but.getOperatorButtonElement();
  }

  this.getOperatorButtonView = function () {
    return operatorButtonView;
  }

  init(id, value, options);
  return this;

};