function getInputValue() {
    var age = document.getElementById("age").value;
    var gender = document.querySelector("input[name='gender']:checked").value;
    var hf = document.getElementById("hf").value;
    var hi = document.getElementById("hi").value;
    var w = document.getElementById("weight").value;
    var hgt = (parseFloat(hf) / 3.281) + (parseFloat(hi) / 39.37);
    var bmi = w / (hgt * hgt);
    bmi = bmi.toFixed(2);
    var str = "";
    var comment = "";
    var suggest = "";
    var wtloss = 0.0;
    var color = "";
    if (bmi < 18.5) {
        str = "Underweight.";
        color = "yellow";
        wtloss = ((18.5 - bmi) / 1.33) * 3.6;
        suggest = "You should gain  " + wtloss.toFixed(2) + " kgs to achieve healthy weight.";
        comment = "Eat healthy diet to improve your weight";
    }
    else if (bmi >= 18.5 && bmi <= 24.9) {
        str = "Normal.";
        color = "green";
        suggest = "Continue the same healthy diet to not put on your weight";
        comment = "Keep it up";
    }
    else if (bmi >= 25.0 && bmi <= 29.9) {
        str = "Overweight.";
        color = "orange";
        wtloss = ((29.9 - bmi) / 1.33) * 3.6;
        suggest = "\n You should loose " + wtloss.toFixed(2) + " kgs to achieve healthy weight.";
        comment = "Do some healthy diet to reduce your weight";
    }
    else if (bmi >= 30 && bmi < 40) {
        str = "Obese.";
        color = "red";
        wtloss = ((30 - bmi) / 1.33) * 3.6;
        suggest = "\n You should loose " + wtloss.toFixed(2) + " kgs to achieve healthy weight.";
        comment = "Do rigorous diet and excersice to reduce your weight and avoid health complications";
    }
    else {
        str = "Dangerously Obese.";
        color = "red";
        wtloss = ((40 - bmi) / 1.33) * 3.6;
        if (wtloss < 0) {
            wtloss = wtloss * -1;
        }
        suggest = "You should loose " + wtloss.toFixed(2) + " kgs to achieve healthy weight.";
        comment = "Do more rigorous diet and excersice to reduce your weight and avoid health complications";


    }

    document.getElementById("result").innerHTML = bmi + " / " + str;
    document.getElementById("result").style.color = color;
    document.getElementById("suggestions").innerHTML = suggest;
    document.getElementById("comment").innerHTML = comment;
    document.getElementById("right-section").style.display = "block";
    document.getElementById("left-section").style.width = "50%";
    document.getElementById("right-section").style.width = "50%";

}

