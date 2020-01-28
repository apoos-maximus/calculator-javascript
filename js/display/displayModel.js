// display class
function display () {
    _expression = "--balnk--";

    Object.defineProperties(this, {
        "Expression" : {
            get : function (){
                return _expression;
            },
            set : function (value){
                _expression = value;
            }
        }
    });
};