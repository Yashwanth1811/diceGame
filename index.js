alert("Click on Player 1 or Player 2 to change there names");

function name() {
    //Getting player names
    var n1 = document.querySelector("#P1").innerHTML = prompt("Enter Player 1's Name: ");
    var n2 = document.querySelector("#P2").innerHTML = prompt("Enter Player 2's Name: ");

    //If name is empty reload the page
    if (n1.length === 0 && n2.length === 0) {
        alert("Names cannot be null or empty");
        window.location.reload();
    }
}

function roll() {
    // Generate nos btw 1 - 6
    var randomNum1 = Math.floor(Math.random() * 6) + 1;
    var randomNum2 = Math.floor(Math.random() * 6) + 1;

    // rolling dice 1
    var randomImg1 = "dice" + randomNum1 + ".png";
    var randomSrc1 = "images/" + randomImg1;
    document.querySelectorAll("img")[0].setAttribute("src", randomSrc1);

    // rolling dice 2
    var randomImg2 = "dice" + randomNum2 + ".png";
    var randomSrc2 = "images/" + randomImg2;
    document.querySelectorAll("img")[1].setAttribute("src", randomSrc2);

    //Winner statement
    if (randomNum1 > randomNum2) {
        document.querySelector("h1").innerHTML = document.querySelector("#P1").innerHTML + " Wins!";
    } else if (randomNum1 < randomNum2) {
        document.querySelector("h1").innerHTML = document.querySelector("#P2").innerHTML + " Wins!";
    } else {
        document.querySelector("h1").innerHTML = "It's a draw!";
    }
}

//if click button is pressed then roll the dice
document.querySelector(".btn").addEventListener("click", roll);

//if enter is pressed then also roll the dice
document.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        roll();
    }
});