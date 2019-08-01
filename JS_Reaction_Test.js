var startTime = new Date().getTime();
var times = [];

function getRandomColors() {
    //create random colors
    var colorLetters = "1234567890ABCDEF".split("");
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += colorLetters[Math.floor(Math.random() * 16)];
    }
    return (color);
}

function getRandomSizes() {
    //Generate randon square and circle sizes, but limiting them to have at least 15px
    var randomWidth = Math.random() * 250;
    while (randomWidth < 30) {
        randomWidth = Math.random() * 250;
    }
    return (randomWidth);
}

function appearDraw() {
    //create random values for top, left
    var topPosition = Math.random() * 150;
    var leftPosition = Math.random() * 550;
    var widthAndHeight = getRandomSizes();
                
    //select square or circle
    var selector = Math.floor(Math.random() * 2);
    if (selector == 0) {
        document.getElementById("drawArea").style.borderRadius = "0%";
    }
    if (selector == 1) {
        document.getElementById("drawArea").style.borderRadius = "50%";
    }

    //draw squares or circles in random position, sizes and collor
    document.getElementById("drawArea").style.top = topPosition + "px";
    document.getElementById("drawArea").style.left = leftPosition + "px";
    document.getElementById("drawArea").style.width = widthAndHeight + "px";
    document.getElementById("drawArea").style.height = widthAndHeight + "px";
    document.getElementById("drawArea").style.backgroundColor = getRandomColors();
                
    //block makes an element visible on the page
    document.getElementById("drawArea").style.display = "block";
    startTime = new Date().getTime();
}

function lowestTime(timeElapsed) {
    compare = timeElapsed;
    //check if times array is empty
    if (times.length == 0) {
        times.splice(0,0,compare);
    } else {
        times.push(compare)
    }
    //returns lowest value
    return (Math.min.apply(null, times).toFixed(3));    
}

function highestTime() {
    //returns highest value
    return (Math.max.apply(null, times).toFixed(3));    
}

function averageTime() {
    //returns the average time it takes the player to click
    var average = 0;
    var i = 0, j = 0;
    while (i < times.length) {
        j += times[i];
        i++;
    }
    average = j / (i - 1);
    if (average == Infinity){
        average = 0;
    }
    return average.toFixed(3);
}

function delayToAppear() {
    setTimeout(appearDraw, Math.random() * 1500);
}

delayToAppear();

document.getElementById("drawArea").onclick = function() {
    document.getElementById("drawArea").style.display = "none";
                
    var endTime = new Date().getTime();
    var timeElapsed = (endTime - startTime) / 1000;

    document.getElementById("enterTime").innerHTML = timeElapsed + " s";
    document.getElementById("lowestTime").innerHTML = lowestTime(timeElapsed) + " s";
    document.getElementById("highestTime").innerHTML = highestTime() + " s";
    document.getElementById("averageTime").innerHTML = averageTime() + " s";
    delayToAppear();
}