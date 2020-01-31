var CalculatorView = function (model) {
    var calculatorViewElement;
    var init = function () {
        createCalculatorDiv();
        insertScreenDiv();
        insertButtonDiv();
    }
    var createCalculatorDiv = function () {
        calculatorViewElement = document.createElement("div");
        calculatorViewElement.id = model.heading;
        calculatorViewElement.className = model.options.containerClass;
        calculatorViewElement.style.width = model.options.width;
    }

    var insertScreenDiv = function () {
        calculatorViewElement.appendChild(model.screen[0]);
    }

    var insertButtonDiv = function () {

        var buttonDiv = document.createElement("div");
        buttonDiv.id = "buttonDiv";
        buttonDiv.className = model.options.containerClass;
        calculatorViewElement.appendChild(buttonDiv);

        var rows = [ [ "ON/OFF" , "AC" , "C" , "+" ] ,
                             [ "1" , "2" , "3" , "-"] ,
                             [ "4" , "5", "6" , "X" ] ,
                             [ "7" , "8", "9" , "/" ] ,
                             [ "." , "0" , "LR" ,"="] ];
//                for ( var i = 0; i<5; i++ ) {
//                                      var row = document.createElement("div");
//                                      row.className = model.options.row1Class;
//                    buttonDiv.appendChild(row);
//                    for ( var j = 0; j<4; j++ ) {
//                        var cell = document.createElement("div");
//                        cell.className = model.options.cellClass;
//                        cell.id = rows[i][j];
//                        row.appendChild(cell);
//                        cell.appendChild(model.domButtons[cell.id]);
//                    }
//                }
                  var row1 = document.createElement("div");
                  row1.id = "Row1";
                  row1.className = model.options.rowClass;

                  var cell;
                  for ( var i = 0; i < 4; i++ ) {
                        cell = document.createElement("div");
                        cell.className = model.options.cellClass;
                        cell.id = rows[0][i];
                        cell.appendChild(model.domButtons[cell.id]);
                        row1.appendChild(cell);
                  }
                  buttonDiv.appendChild(row1);

                  var row2 = document.createElement("div");
                  row2.id = "Row2";
                  row2.className = model.options.rowClass;
//                  row2.style.width = "370px";

                  var row = document.createElement("div");
                  row.className = model.options.rowClass;

                  for ( var i = 1; i <= 3; i++ ) {
                    var row = document.createElement("div");
                    row.className = model.options.rowClass;
                    for ( var j = 0; j < 4; j++ ) {
                        var cell = document.createElement("div");
                        cell.className = model.options.cellClass;
                        cell.id = rows[i][j];
                        cell.appendChild ( model.domButtons[ rows[i][j] ] );
                        row.appendChild(cell);
                    }
                    row2.appendChild(row);
                  }

                  buttonDiv.appendChild(row2);

                  var row3 = document.createElement("div");
                  row3.className = model.options.rowClass;
                  row3.id = "Row3";
                  for ( var i = 0; i < 4; i++ ) {
                     cell = document.createElement("div");
                     cell.className = model.options.cellClass;
                     cell.id = rows[4][i];
                     cell.appendChild(model.domButtons[cell.id]);
                     row3.appendChild(cell);
                  }

                  buttonDiv.appendChild(row3);



              }

    this.getCalculatorView = function () {
            return calculatorViewElement;
    }

    init();


    return this;

};