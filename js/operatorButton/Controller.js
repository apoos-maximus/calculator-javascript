// interface for operator button - returns operator button dom element
var OperatorButtonControl = function (id, value, options) {
  var operatorButtonModel;
  var operatorButtonView;

  var init = function () {
    operatorButtonModel = new OperatorButtonModel(id, value, options);
    var but = new OperatorButtonView(operatorButtonModel);
    operatorButtonView = but.getOperatorButtonView();
  }

  this.getOperatorButtonView = function () {
    return operatorButtonView;
  }

  init();
  return this;

};