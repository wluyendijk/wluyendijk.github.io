    $("title-card").ready(function(){
        $("svg").mouseout(function() {
            $(this).addClass("wasHovered");
        });
    });

    var delayInMilliseconds = 5000; // second

    $(document).ready(function(){
        for(var i = 1; i <= 8; i++){
            var time = getRandomAnimationLength();
            setInterval(setRandomPosition, time*1000, ".flash"+i, time); //three second delay
        }

    });

    function setRandomPosition(name, animateTime){
        console.log("Setting random!");

        var finalTopPos = Math.floor(Math.random() * window.innerHeight),
        finalLeftPos =  Math.floor(Math.random() * window.innerWidth);


        $(name).css({
            
            "animation": "animate " + animateTime + "s linear infinite",
            "position": "absolute",
            "left":  finalLeftPos + "px",
            "top": finalTopPos + "px"
        });
    }

    function getRandomAnimationLength(){
        return Math.floor((Math.random() * 5)+3);
    }
