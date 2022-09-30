"use strict";


const URL = "trainers.json";
const URL2 = 

fetch(URL)
.then(function(response){
    return response.json();
})
.then(function (data){
    console.log(data);
})
.catch(function (err){
    console.error(err);
})

axios.get(URL)
.then(response => console.log(response.data))
.catch(err => console.error(err));

function appendData(data){
    let dataList = document.getElementById("myData");
    for(let i = 0; i<data.length; i++){
        let trainer = document.createElement("div");
        let id = doucment.createElement("card");
        id.innerHTML = "ID" + data[i].userID;
        trainer.appendChild(id);
        dataList.appendChild(trainer);
    }
    );
