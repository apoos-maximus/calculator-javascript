// button class
var ButtonModel = function (id, value, options){
    this.options = {
        buttonClass : " w3-black w3-hover-purple w3-hover-border-white w3-padding-large w3-stretch"
    }
    //check if the options are not null and according populate the options object
    this.id = id;
    this.value = value;
};
