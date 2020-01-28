// number button class - inherits button class
function numberButton() {
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
numberButton.prototype = new button();
numberButton.prototype.constructor = numberButton;
