var oldrand = 0;
var interVal = setInterval(function(){
    var randomNumber = 0;
    randomNumber = Math.floor( Math.random() * 5) + 1;
    
    if(randomNumber == oldrand){   
      
        randomNumber+=1;
        // oldrand = randomNumber;
        console.log("match", randomNumber);
        
    }else{
        randomNumber;
    }
    oldrand = randomNumber;

    setPosition(randomNumber);

    // $('.cube').css("transform", "rotateX("+randomNumber*90+"deg) rotateY("+randomNumber*90+"deg) rotateZ(0deg)");    
}, 3000);

var setPosition = (rand)=>{
    console.log(rand);
    if(rand==1){
        $('.cube').css("transform", "rotateX(0deg) rotateY(360deg) rotateZ(360deg)");
    }else if(rand==2){
        $('.cube').css("transform", "rotateX(90deg) rotateY(-90deg) rotateZ(90deg)");
    }else if(rand==3){
        $('.cube').css("transform", "rotateX(180deg) rotateY(360deg) rotateZ(360deg)");

    }else if(rand==4){
        $('.cube').css("transform", "rotateX(90deg) rotateY(360deg) rotateZ(360deg)");
    }else if(rand==5){
        $('.cube').css("transform", "rotateX(-90deg) rotateY(90deg) rotateZ(90deg)");
    }else if(rand==6){
        $('.cube').css("transform", "rotateX(180deg) rotateY(0deg) rotateZ(360deg)");
    }
    
}