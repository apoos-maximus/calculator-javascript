// interface for display class - returns display dom element
function DisplayControl() {
    var displayModel;
    var displayView;

    var init = function () {
        displayModel = new DisplayModel();
        displayView = new DisplayView(displayModel);
    }

    this.getDisplayElement = function () {
        return displayView;
    }

    init();
    return this;
};