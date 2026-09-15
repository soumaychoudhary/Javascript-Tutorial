// 1 .  sync ann async kya hota hai ?

  //      sync matlab ek ke baad dusra hoga , jab tak ek command complete naa ho , dusra shuru nahi hoga . 
  //      async matlab saare kaam ek saath shuru kardo , jiska answer pahle aajaye uska jawaab dedena .
  // 
  //     kaise pata chalta hai hi hum sync code likh rahe ya async ?

         // setTimeout
         // setInterval
         // promises
         // fetch
         // axios
         // xmlhttprequesty
         // if you use these functions then you are writing async code otherwise sync code.


// 2. async js hai kya ?

    // kai baar  aapke final code depended hota hai kisi aur ke server par , is case mein humein nahi pata hota ki answer 
    // uske server se kab laut kar aayega ,  to hum kya nahi kr skte is writing sync code , isse nipatne ke liye hum log
    // async code likh dete hai taaki blocking naa ho and jab bhi answer aaye humara answer ke respect mein chalne waala
    // code chal jaye.

    // callback function humesha async code mein answer aana par chalta hai


    // console.log("hey");
    // setTimeout(function(){
    //     console.log("hey2");
    // } , 2000)

    // setTimeout(function(){
    //     console.log("hello soumay");
    // },12000)




// 3. js is not asynchronous

      // jo bhi main stack par hota hai wo output karta  hai and jo bhi side stack par hota hai wo behind the scenes processing
      // kar sakta hai aur jab uski processing complete ho use main stack mein laa kar chalaya ja sakta h
      
      // event loop main stack me side stack se chize leke aata h jab main stack khali hota h


    //   console.log("hey");
    //   console.log("hey2");
    //   setTimeout(function(){
    //     console.log("hey3");
    //   },0);
    //   console.log("hey4");



// 4.  callbacks

    //  callback hamesha ek function hota , ya sirf tab chalta hai jab async code ka completion hojaata h

    
// 5. promises

    // var ans=new Promise((res,rej)=>{
    //     if(true){
    //         return res();
    //     }
    //     else{
    //         return rej();
    //     }
    // })
    // ans
    // .then(function(){
    //     console.log("resolve");
    // })
    // .catch(function(){
    //     console.log("reject");
    // })


    // user will ask for a number between 0 to 9 and if the number is below 5 resolve if not reject .

    // var ans = new Promise((res,rej)=>{
    //     var n = Math.floor(Math.random()*10);
    //     if(n<5){
    //         return res();
    //     }
    //     else{
    //         return rej();
    //     }
    // })

    // ans.then(function(){
    //     console.log("below");
    // }).catch(function(){
    //     console.log("above")
    // })


    // sabse pahle ghar par aao gate kholo aur gate lagao , khana pakao kahana khao , incognito mode chalao soja kyuki tum 
    // thak gaye ho

    // var ans= new Promise((res,rej)=>{
    //     return res("sabse phale ghar par aao");
    // })

    // var p2=ans.then(function(data){
    //     console.log(data);
    //     return new Promise((res,rej)=>{
    //         return res("gate kholo aur gate lagao");
    //     })
    // })

    // var p3=p2.then(function(data){
    //     console.log(data);
    //     return new Promise((res,rej)=>{
    //         return res("khana pakao kahana khao");
    //     })

    // })
    // var p4=p3.then(function(data){
    //     console.log(data);
    //     return new Promise((res,rej)=>{
    //         return res("incognito mode chalao soja kyuki tum thak gaye ho");
    //     })
    // })

    // p4.then(function(data){
    //     console.log(data);
    // })


// 6.  async await

    // koi bhi esa function jisme aap async code likhenge, kyoki  async code likh rahe hai to aap 
    // promises ka istemaal kar sakte hai , jab uska answer aayega aapko "then" lagana padega, us
    // then ko lagane se bachne ke liye , aap async await ka istemaal kar sakte hai.

    // function abcd(){
    //     fetch('https://api.api-ninjas.com/v1/randomuser')
    //     .then(function(raw){
    //         return raw.json();
    //     })
    //     .then(function(data){
    //         console.log(data);
    //     })

    // }

    // abcd();

    // const apiKey = "327beeb2517999ee12862d83349f2a8e";
    // const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
    // async function abcd(){
    //     const raw = await fetch(apiUrl  + `&appid=${apiKey}`);
    //     let ans = await raw.json();
    //     console.log(ans);
    // }

    // abcd();



// 6. concurrency and parallelism

    // concurrency => js mein sync code and async code ek saath process ho raha tha ye hai concurrency

    // parallelism => focus jaada karta hai different processors and unke cores par kaam chalaane par

    // throttling =>kisi code ko control karna number of executions 




    







