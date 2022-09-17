// JavaScript source code

function ListName() {
    document.getElementById("name").innerHTML = "Dan";
};

//Get the time function
function currentTime() {
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let AMorPM = "AM";

    //Set AM to PM and off of military time
    if (hh > 11) {
        AMorPM = "PM";
    }

    if (hh > 12) {
        hh = hh - 12;
    }

    //Return 2 digit number even if 1 digit
    if (mm < 10) { mm = "0" + mm; }
    if (ss < 10) { ss = "0" + ss; }

    //Display the Time
    let time = hh + ":" + mm + ":" + ss + " " + AMorPM;
    document.getElementById("clock").innerHTML = time;

    //Update the time every second
    //let t = setInterval(function:)
};

//Update the clock every second
setInterval(currentTime, 1000);

function RandomInfo() {
    //Set Random Age (random number)
    let RandomAge = Math.floor(Math.random() * 100) + 1;
    document.getElementById("ageRandom").innerHTML = RandomAge;

    //Set Random Name (array selector)
    let RandomName = "";
    let RandomNumber = Math.floor(Math.random() * 7);
    const Names = ["Dan", "Ben", "Matt", "Joe", "Jake", "Tom", "Don"];
    document.getElementById("nameRandom").innerHTML = Names[RandomNumber];

    //Set Age Category (switch-case)
    let Category = "Error";
    switch (true) {
        case RandomAge > 64:
            Category = "senior";
            break;
        case RandomAge > 30:
            Category = "adult"
            break;
        case RandomAge > 17:
            Category = "young adult";
            break;
        case RandomAge > 12:
            Category = "teenager";
            break;
        default:
            Category = "child";
            break;
    };
    document.getElementById("ageCategory").innerHTML = Category + ".";

};