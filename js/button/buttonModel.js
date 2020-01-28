// button class
function buttonModel(){
    var _label = "unknown";
    
    Object.defineProperties(this, {
        "Label" : {
            get : function(){
                return _label;
            },
            set : function(value){
                _label = value;
            }
        }
    });
};
