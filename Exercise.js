"use strict"

fetch('https://reqres.in/api/users')
.then ((response) => {
if (response.status !== 200) { 
    console.error(`status: ${response.status}`);
    return;
}
response.json()
.then(data => appendData(data.data));
})
.catch(err => console.error(`Fetch Error ${err}`));



function appendData(data){
    let dataList = document.getElementById("myExercise");//ID for our div
    for(let i = 0; i<data.length; i++){
        let trainer = document.createElement("div");
        let id = document.createElement("card");
        id.innerText = "id: " + data[i].id;
        trainer.appendChild(id);
        let name = document.createElement("p");
        name.innerText = "Name " + data[i].first_name;
        trainer.appendChild(name);
        dataList.appendChild(trainer);
    }
}