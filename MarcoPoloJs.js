function MarcoPolo() {
    var input = document.getElementById("number").value;
    var list = [];

    for (var j = 1; j <= input; j++) {
        list.push(j);
    }
    for (var i in list){
        if (list[i]%7 === 0 & list[i].toString().includes("7")){
            list[i] = "Marco Polo";
        }else if (list[i]%7 === 0){
            list[i] = "Marco";
        }else if (list[i].toString().includes("7")){
            list[i] = "Polo";
        }
    }
    document.getElementById("output").innerHTML = list.toString();
}

