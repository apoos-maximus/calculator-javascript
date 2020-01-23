function buttonControl(specifics){
    var buton = new button();
    buton.Label = specifics.label;    
    
    buttonElement = buttonView(buton);
    return buttonElement;
};