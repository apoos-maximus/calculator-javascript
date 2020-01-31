// interface for button class : returns dom button
var ButtonController = function (id, value, options){
    var btnView, btnModel, domBut, scope = this;
    var init = function() {
        btnModel = new ButtonModel(id, value, options);
        btnView = new ButtonView(btnModel);
    }

    this.onclickHandler = function () {
        console.log(btnModel.value);
    }
    this.getButtonElement = function() {

        domBut = btnView.getButtonElement();
        domBut.onclick = function () {
            scope.onclickHandler(btnModel.id,btnModel.value);
        }
        return domBut;
    }
    init();
    return this;
};