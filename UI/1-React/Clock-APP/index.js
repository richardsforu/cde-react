console.log('---- index.js loaded....');
let indianClock=document.querySelector("#indianClock");
let indianClockV11=document.querySelector("#indianClockV11");

let dubaiClock=document.querySelector("#dubaiClock");
let usClock=document.querySelector("#usClock");


function jsClock(props){
//console.log(jsClock);

let date=new Date().toLocaleTimeString('en-US',{timeZone:props});
var ui=
`
<div class="card">
<div class="card-header">
<p>${props}</p>
</div>
<div class="card-body">
<p> ${date}</p>
</div
</div>

`
return ui;
}

//jsClock.innerHTML=ui;



let indianClockV1=document.querySelector("#indianClockV1");
let dubaiClockV1=document.querySelector("#dubaiClockV1");
let usClockV1=document.querySelector("#usClockV1");

function reactClock(props){

let date=new Date().toLocaleTimeString('en-US',{timeZone:props});

var ui=<div class="card">
<div class="card-header">
    <span>{props}</span>
</div>
    <div class="card-body">
    <p>{date}</p>
    </div>
    </div>
return ui;
}

setInterval(()=>{
    indianClock.innerHTML=jsClock('Asia/Kolkata');  
    dubaiClock.innerHTML=jsClock('Asia/Dubai');  
    usClock.innerHTML=jsClock('America/New_York');  

    ReactDOM.render(reactClock('Asia/Kolkata'),indianClockV1);
    ReactDOM.render(reactClock('Asia/Dubai'),dubaiClockV1);
    ReactDOM.render(reactClock('America/New_York'),usClockV1);


},1000);




