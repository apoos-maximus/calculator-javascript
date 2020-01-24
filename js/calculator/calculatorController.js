var names = ["apoorv", "yash" , "mahak", "sharadhi", "utkarsha", "payasi", "qualcommn"];
var nums = ["1" , "2" , "3" , "4" , "5" , "6" , "7" , "8" , "9" , "0" ];
var operators = ["+" , "-", "x", "/" ];

specifics = {label : ""};
for ( var x in names){
    specifics.label = names[x];
    document.body.appendChild(buttonControl(specifics));
};

for (var x in nums){
    specifics.label = nums[x];
    document.body.appendChild(numberButtonControl(specifics));
};

for (var x in operators){
    specifics.label = operators[x];
    console.log(specifics.label);
    document.body.appendChild(operatorButtonControl(specifics));
};

document.body.appendChild(displayControl());

