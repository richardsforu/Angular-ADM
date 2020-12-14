let indianClock=document.querySelector('#indianClock');
let dubaiClock=document.querySelector('#dubaiClock');
let usaClock=document.querySelector('#usaClock');


function jsClock(props){
    let clock=new Date().toLocaleString('en-US',{timeZone:props});

    let ui=`
    <div>
        <div> ${props} </div>
        <p> ${clock} </p>
    </div>
    `

    return ui;
}

setInterval(() => {
    indianClock.innerHTML=jsClock('asia/kolkata');
    dubaiClock.innerHTML=jsClock('asia/dubai');
    usaClock.innerHTML=jsClock('america/new_york');


},1000);