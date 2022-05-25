var count = [9, 12, 9];

function topButtonClicked() {
    var topCounter = document.querySelector("#count1");
    console.log("#count1");
    count[0] += 1;
    console.log(count[0]);
    topCounter.innerText = count[0] + " like(s)";
}

function middleButtonClicked() {
    var middleCounter = document.querySelector("#count2");
    console.log("#count2");
    count[1] += 1;
    console.log(count[1]);
    middleCounter.innerText = count[1] + " like(s)";
}

function bottomButtonClicked() {
    var bottomCounter = document.querySelector("#count3");
    console.log("#count3");
    count[2] += 1;
    console.log(count[2]);
    bottomCounter.innerText = count[2] + " like(s)";
}