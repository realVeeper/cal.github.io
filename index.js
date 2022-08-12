function clearScreen() {
    document.getElementById("result").value = "";
}
 

function display(value) {
    document.getElementById("result").value += value;
}
 

function calculate() {
    var t = document.getElementById("result").value;
    var q = eval(t);
    document.getElementById("result").value = q;
}