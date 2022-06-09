function dothemath(a, b){
    if (b === 0) return a;
    return dothemath(b, a % b);
}
function ggt(){
    var a = parseInt(document.getElementById("a").value);
    var b = parseInt(document.getElementById("b").value);
    var c = dothemath(a, b);
    if(c == a || c == b){document.getElementById("c").style.backgroundColor = "green";}
    else if (c == 1){document.getElementById("c").style.backgroundColor = "red";}
    else{document.getElementById("c").style.backgroundColor = "yellow";}
    document.getElementById("c").innerHTML = 'Ergebnis: ' + c;
    console.log("first numb: " + document.getElementById("a").value + " second numb: " + document.getElementById("b").value + " result: " + c);
}