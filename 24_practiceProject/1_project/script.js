// 1. sabse pahle yr pata karo ke mouse rectangle par aaya and move hua ya nahi .
// 2. ab ye calculate karo ke hum center se left par hai ya center se right par hai .
// 3. ab ye calculate karo ke hum center se kitna left par hai , jitna left par hai utni intensity se color red lagao .


var rect = document.querySelector("#center");

rect.addEventListener("mousemove",function(details){
    var rectanglelocation = rect.getBoundingClientRect();  // give location of the node
    var insideRectVal = details.clientX - rectanglelocation.left;

    if(insideRectVal<rectanglelocation.width/2){
        var redColor = gsap.utils.mapRange(0,rectanglelocation.width/2,255,0,insideRectVal);
        gsap.to(rect,{
            backgroundColor:`rgb(${redColor},0,0)`,
            ease : Power4,
        })
    }
    else{
        var blueColor = gsap.utils.mapRange(rectanglelocation.width/2,rectanglelocation.width,0,255,insideRectVal);
        gsap.to(rect,{
            backgroundColor:`rgb(0,0,${blueColor})`,
            ease : Power4,
        })
    }
});

rect.addEventListener("mouseleave",function(){
    gsap.to(rect,{
        backgroundColor : "white",
    }) 
})