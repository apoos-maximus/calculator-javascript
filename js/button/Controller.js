// interface for button class : returns dom button
var ButtonController = function (id, value, options){
    var btnView, btnModel, scope = this;
    var init = function() {
        btnModel = new ButtonModel(id, value, options);
        btnView = new ButtonView(btnModel);

        btnView.onclick = function(evt) {
            scope.onClickHandler(evt, id, value);
        }
    }

    this.onClickHandler = function(event, id, value) {

    }

    this.getButtonElement = function() {
        return btnView;
    }
    init();
    return this;
};