// interface for display class - returns display dom element
var DisplayControl = function() {
    var displayModel;
    var displayView;

    var init = function () {
        displayModel = new DisplayModel();
        displayView = new DisplayView(displayModel);
    }

    this.getDisplayElement = function () {
        return displayView;
    }
    this.setExpression = function (val) {
       displayModel.expression = val;
       displayView.innerHTML = displayModel.expression;
    }
    this.addToExpression = function (val) {
        if (val == ""){
            displayModel.expression = "";
            displayView.innerHTML = displayModel.expression;
        }
        else {
            displayModel.expression += val;
            displayView.innerHTML = displayModel.expression;
        }

    }
    this.getExpression = function () {
        return displayModel.expression;
    }
    this.evaluateExpression = function () {
        displayModel.expression = eval(displayModel.expression);
        displayView.innerHTML = displayModel.expression;
    }

    init();
    return this;
};