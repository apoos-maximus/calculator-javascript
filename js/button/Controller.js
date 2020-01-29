// interface for button class : returns dom button
var ButtonController = function (id, value, options){
    var btnView, btnModel;
    var init = function() {
        btnModel = new ButtonModel(id, value, options);
        btnView = new ButtonView(btnModel);

//        btnView.onclick = function(evt) {
//            this.onClickHandler(evr, id, value);
//        }
    }

//    this.onClickHandler = function(event, id, value) {
//    }

    this.getButtonElement = function() {
        return btnView;
    }
    init();
    return this;
};