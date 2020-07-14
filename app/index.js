var started = false;
const transitionTime = 2000;

var leftCircle = document.getElementsByClassName('left')[0];
leftCircle.addEventListener("click", function () {
    if (started == false) {
        started = true;
        leftCircle.classList.add("move-right");
        setTimeout(function () {
           
            rightCircle.classList.add("move-down");
            setTimeout(function () {
                
                downCircle.classList.add("move-left");

            }, transitionTime);
        }, transitionTime);
    }
});


var rightCircle = document.getElementsByClassName('right')[0];
rightCircle.addEventListener("click", function () {

    if (started == false) {
        started = true;
        rightCircle.classList.add("move-left");

        setTimeout(function () {
            
            leftCircle.classList.add("move-down");
        }, transitionTime);
    }
});


var downCircle = document.getElementsByClassName('down')[0];
downCircle.addEventListener("click", function () {

    if (started == false) {
        started = true;
        downCircle.classList.add("move-up");

        setTimeout(function () {

            rightCircle.classList.add("move-left");

            setTimeout(function () {

                leftCircle.classList.add("move-down");
            }, transitionTime);
        }, transitionTime)

    }
});

