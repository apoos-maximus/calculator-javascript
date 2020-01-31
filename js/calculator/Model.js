var CalculatorModel = function (heading, options) {

    this.heading = heading;
    this.options = {
        width : "330px",
        containerClass : "w3-container  w3-teal w3-stretch",
        rowClass : "w3-cell-row w3-center",
        cellClass : "w3-cell w3-center w3-stretch"
    }
    this.numberButtons = ['1','2','3','4','5','6','7','8','9','0'];
    this.operatorButtons = ['+','-','X','/', '=', '.'];
    this.generalButtons = ['ON/OFF', 'C', 'AC', 'LR'];
    this.domButtons = {};
    this.screen = [];
};
