document.addEventListener("DOMContentLoaded", ()=>{

    var skill = fetch('./../script/skills.json')
    .then(skills => skills.json());

    var skillList = document.getElementById("skills");
    var progressElement = document.createElement("progress");
    progressElement.setAttribute("max", 100);
        
    skill.then(att => {
        for(var obj in att){
            let skillType = document.createElement("ul");
            skillType.setAttribute("id", obj);
            for(let item in att[obj]){                
                let skillItem = document.createElement("li");
                skillItem.setAttribute("class", "skillItem");
                let skillName = document.createElement("h4");
                skillName.setAttribute("class", "skillName");
                skillName.innerHTML = att[obj][item].title;
                progressElement.setAttribute("value", att[obj][item].level);
                console.log(att[obj][item].title);
                skillItem.appendChild(skillName.cloneNode(true));
                skillItem.appendChild(progressElement.cloneNode(true));
                skillType.appendChild(skillItem.cloneNode(true));
            }
            skillList.appendChild(skillType.cloneNode(true));
        }
    });
});

