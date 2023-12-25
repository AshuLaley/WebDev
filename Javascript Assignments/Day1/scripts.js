


var res = document.getElementById("result");
function findLargest() {
    var a = parseInt(document.getElementById("num1").value);
    var b = parseInt(document.getElementById("num2").value);
    var c = parseInt(document.getElementById("num3").value);

    console.log(a, b, c);

    if (a > b && a > c) {
        // document.getElementById("result").innerHTML = `${a} is greatest`;
        res.innerHTML = `${a} is greatest`;
    }
    else {
        if (b > c) {
            // document.getElementById("result").innerHTML = `${b} is greatest`;
            res.innerHTML = `${b} is greatest`;
        }
        else {
            // document.getElementById("result").innerHTML = `${c} is greatest`;
            res.innerHTML = `${c} is greatest`;
        }
    }
}

