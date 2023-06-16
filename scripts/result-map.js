function yesNocheck(thisObj) {
    var val = thisObj.value;

    console.log(val);

    document.querySelectorAll('.disp').forEach(function(element) {
        element.style.display = "none";
    });

    document.getElementById(val).style.display = 'block';
    }

    function mapAndFact(thisObj) {
    var val = thisObj.value;

    console.log(val);

    document.querySelectorAll('.disp').forEach(function(element) {
        element.style.display = "none";
    });

    document.getElementById("display_"+ val +"").style.display = 'grid';

    var x = document.getElementsByClassName("end");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = 'grid';
    }
}
