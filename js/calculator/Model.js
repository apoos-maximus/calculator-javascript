var CalculatorModel = function (heading, options) {

    this.heading = heading;
    this.options = {
        containerClass : "w3-container"
    }
    this.numberButtons = ['1','2','3','4','5','6','7','8','9','0'];
    this.operatorButtons = ['+','-','X','/', '=', '.'];
    this.generalButtons = ['ON/OFF', 'C', 'AC', 'LR'];
    this.domNumberButtons = [];
    this.domOperatorButtons = [];
    this.domGeneralButtons = [];
    this.screen = [];
};
