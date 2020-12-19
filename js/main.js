window.onload= trigger();

function trigger(){
    var parent = document.querySelectorAll(".flow-btn");
    for(i=0;i<parent.length;i++){
        parent[i].addEventListener("click", flow)
    }
}

function flow(e){
    e.preventDefault();
    if(e.target.classList.contains("validate")){
        console.log("llamo a validation");
        validationFlow(e.target);
    }
    var parent = document.querySelectorAll("section");
    for(i=0;i<parent.length;i++){
        if(parent[i].id===e.target.name){
            if(parent[i].classList.contains("hide-me")){
                parent[i].classList.remove("hide-me");
            }
        }
        else{
            if(!parent[i].classList.contains("hide-me")){
                parent[i].classList.add("hide-me")
            }
        }
    }
    switch(e.target.name){
        case "trainings":
            loadTrainingsInfo();
            break;
        case "pictures":
            loadPicturesInfo();
            break;
        case "search":
            loadSearchInfo();
            break;
        case "self-profile":
            document.getElementById("sections-wrapper").addEventListener("scroll",stickProfileOption);
            loadSelfProfileInfo();
            break
        case "profile-settings":
            loadProfileSettingsInfo();
            break;
        case "notifications":
            loadNotificationsInfo();
            break;
    }
}

function stickProfileOption(){
    var selfProfileAux=document.getElementById("self-profile")
    if(!selfProfileAux.classList.contains("hide-me")){
        var stickMe=document.getElementById("to-stick");
        var sticky=stickMe.offsetTop;
        if(document.getElementById("sections-wrapper").scrollTop>=95){
            stickMe.classList.add("sticky");
        }
        else{
            stickMe.classList.remove("sticky");
        }
    }

}