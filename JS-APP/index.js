
//let indianClock=document.getElementById('indianClock');
let indianClock = document.querySelector('#indianClock');
let dubaiClock = document.querySelector('#dubaiClock');
let usaClock = document.querySelector('#usaClock');


function jsClock(props) {
    var date = new Date().toLocaleString('en-US', { timeZone: props })
    let ui =`
    <div class='card'>
        <div class='card-header'>${props}</div>
        <div class='card-body'>
        <p> ${date} </p>
        </div>
        
    </div>
    `
    return ui;
}




setInterval(() => {
    indianClock.innerHTML = jsClock('asia/kolkata')
    dubaiClock.innerHTML = jsClock('asia/dubai')
    usaClock.innerHTML = jsClock('America/New_York')
}, 1000)
