// operator button class 
function operatorButton() {
    var _type;
    
    Object.defineProperties(this,{
        "Type" : {
            get : function () {
                return _type;
            },
            set : function (value) {
                _type = value;
            }
        }
    });
};
operatorButton.prototype = new button();
operatorButton.prototype.constructor = operatorButton;