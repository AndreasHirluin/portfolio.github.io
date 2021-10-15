document.addEventListener("DOMContentLoaded" ,()=>{
    console.log("Ciao");
    var skill = fetch('./../script/skills.json')
    .then(skills => skills.json());
    var levelList = document.getElementsByClassName("level");
    var levelElement = document.createElement("progress");
    levelElement.setAttribute("max", 100);
    console.log(levelList.length);
    for(let i = 0; i < levelList.length; i++){
        console.log(i);
        let element = levelList[i].getElementsByClassName("skillname")[0].innerHTML.toUpperCase();
        console.log(element);
        skill.then(att => {
            console.log(att[element].level);
            levelElement.setAttribute("value", att[element].level);
            levelList[i].appendChild(levelElement.cloneNode(true));
        });
        
    }
});

