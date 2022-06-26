    $("title-card").ready(function(){
        $("svg").mouseout(function() {
            $(this).addClass("wasHovered");
        });
    });

    var delayInMilliseconds = 5000; // second

    $(".bg").css({
        "height": window.innerHeight + " !important;"
    });

    $(document).ready(function(){
        for(var i = 1; i <= 8; i++){
            var time = getRandomAnimationLength();
            setInterval(setRandomPosition, time*1000, ".flash"+i, time); //three second delay
        }

    });

    function setRandomPosition(name, animateTime){
        console.log("Setting random!");

        var finalTopPos = Math.floor(Math.random() * (window.innerHeight - 25)),
        finalLeftPos =  Math.floor(Math.random() * (window.innerWidth - 25));


        $(name).css({
            
            "animation": "animate " + animateTime + "s linear infinite",
            "position": "absolute",
            "left":  finalLeftPos + "px",
            "top": finalTopPos + "px"
        });
    }

    function getRandomAnimationLength(){
        return Math.floor((Math.random() * 7)+3);
    }
