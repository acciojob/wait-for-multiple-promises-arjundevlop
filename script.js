//your JS code here. If required.
let promise1Time = 0;
let promise2Time = 0;
let promise3Time = 0;

const promise1 = new Promise((resolve,reject)=>{
    let prom1randomTime = Math.floor(Math.random()*3+1);
    promise1Time = prom1randomTime;
    setTimeout(() => {
        resolve("prom 1 resolved");
        
    }, prom1randomTime*1000);
});
const promise2 = new Promise((resolve,reject)=>{
    let prom2RandomTime = Math.floor(Math.random()*3+1);
    promise2Time = prom2RandomTime;
    setTimeout(() => {
        resolve("prom 2 resolved");
        
    }, prom2RandomTime*1000);
});
const promise3 = new Promise((resolve,reject)=>{
    let prom3RandomTime = Math.floor(Math.random()*3+1);
    promise3Time = prom3RandomTime;
    setTimeout(() => {
        resolve("prom 3 resolved");
        
    }, prom3RandomTime*1000);
});



 Promise.all([promise1,promise2,promise3]).then(()=>{
    const tablehead = document.getElementById("thead");
    const loadRow = document.querySelector(".loadingRow");
    tablehead.removeChild(loadRow);
	 const body = document.getElementById("output");

    let newRow = document.createElement("tr");
    let row1c1 = newRow.insertCell(0);
    row1c1.innerText = "Promise 1";
    let row1c2 = newRow.insertCell(1);
    row1c2.innerText = promise1Time;
    body.appendChild(newRow);

    let newSecondRow = document.createElement("tr");
    let row2c1 = newSecondRow.insertCell(0);
    row2c1.innerText = "Promise 2";
    let row2c2 = newSecondRow.insertCell(1);
    row2c2.innerText = promise2Time;
    body.appendChild(newSecondRow);

    let newThirdRow = document.createElement("tr");
    let row3c1 = newThirdRow.insertCell(0);
    row3c1.innerText = "Promise 3";
    let row3c2 = newThirdRow.insertCell(1);
    row3c2.innerText = promise3Time;
    body.appendChild(newThirdRow);

    let fourthRow = document.createElement("tr");
    let row4c1 = fourthRow.insertCell(0);
    row4c1.innerText = "Total";
    let row4c2 = fourthRow.insertCell(1);
    row4c2.innerText = (promise1Time+promise2Time+promise3Time).toFixed(3);
    body.appendChild(fourthRow);

 })
//console.log(promArr);
