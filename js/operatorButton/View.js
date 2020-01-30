//builds operator button dom element
        var OperatorButtonView = function (model)
     {
        var operatorButtonElement;

         var init = function ()
          {
                  createButtonElement();
          }

         var createButtonElement = function ()
     {
        operatorButtonElement = document.createElement("button");
        //operatorButtonElement.id = model.id;
        operatorButtonElement.className = model.options.buttonClass;
        operatorButtonElement.innerHTML = model.value;

      }

             this.getOperatorButtonElement = function ()
        {
              console.log(operatorButtonElement);
              return operatorButtonElement;
        }
      init();
    return this;
};