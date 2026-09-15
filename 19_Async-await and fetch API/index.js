// async-await :--- with the help of async-await we can display asynchronous as a synchronous . this function always promise . 

// async function getData(){
//     setTimeout(function(){
//         console.log("I am inside set timeout block")
//     },3000);
// }

// getData();


// await - ?


// fetch API :-- it provides an interface for fetching resources .

// async function getData(){
//     // get request -> async
//     let  response = await fetch('https://jsonplaceHolder.typicode.com/posts');
//     // parse json - async
//     let data = await response.json();
//     console.log(data);
// }

// getData();

// scenario :
    // prepare url / api endpoint -> sync
    //await // fetch data  ->  network call -> async
    // process data -> sync


const myHeaders = new Headers();
myHeaders.append("Content-Type","application/json");

const url = "https://jsonplaceholder.typicode.com/posts";

const options ={
    method : "POST",
    body : JSON.stringify({username : "soumay choudhary"}),
    headers : myHeaders,
};

async function getData(){
    const response = await fetch(url);
    let data = await response.json();
    console.log("get data response : ", data);
}

async function postData(){
    const response = await fetch(url,options);
    let data = await response.json();
    console.log("my data : ",data);
}


async function processData(){
    await postData();
    await getData();
}
processData();


