window.onload= trigger();

getLocalStorage()
function getLocalStorage(){
    if (localStorage.getItem('allUsers') === null) {
        localStorage.setItem('allUsers',JSON.stringify([]))
    }
    if(localStorage.getItem("currentUser"===null)){
        localStorage.setItem("currentUser",JSON.stringify({}))
    }
    if(localStorage.getItem('notifications') === null){
        localStorage.setItem('notifications',JSON.stringify([]))
    }
}

function trigger(){
    var parent = document.querySelectorAll(".flow-btn");
    for(i=0;i<parent.length;i++){
        parent[i].addEventListener("click", flow)
    }
}

function flow(e){
    //This function recives the button which was clicked and depend of that will do one thing or another
    e.preventDefault();
    document.getElementById("sections-wrapper").removeEventListener("scroll",stickProfileOption);
    document.getElementById("self-training").removeEventListener("click",toggleProfileButtons);
    document.getElementById("self-photos").removeEventListener("click",toggleProfileButtons);
    //next if-else is to select depens on if the button was clicked or its content
    if(e.target.classList.contains("aux")){
        var refer=e.target.parentNode;
    }
    else if(e.target.classList.contains("aux2")){
        var refer=e.target.parentNode.parentNode;
    }
    else{
        var refer=e.target;
    }
    //buttons to validate
    if(refer.classList.contains("validate")){
        if (!validationFlow(refer)){
            return false;
        }
    }
    //to display the correct page
    var parent = document.querySelectorAll("section");
    for(i=0;i<parent.length;i++){
        if(parent[i].id===refer.name){
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
    switch(refer.name){
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
            document.getElementById("self-training").addEventListener("click",toggleProfileButtons);
            document.getElementById("self-photos").addEventListener("click",toggleProfileButtons);
            document.getElementById("sections-wrapper").addEventListener("scroll",stickProfileOption);
            loadSelfProfileInfo();
            break
        case "profile-settings":
            loadProfileSettingsInfo();
            break;
        case "notifications":
            loadNotificationsInfo();
            break;
        case "log-in":
            document.querySelector("#email").addEventListener("blur", validateEmailLogIn);
            document.querySelector("#password-log-in").addEventListener("blur", validateEmailLogIn);
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

function toggleProfileButtons(e){
    if(e.target.id==="self-training"){
        if(document.getElementById("galery-trainings").classList.contains("hide-me")){
            document.getElementById("galery-trainings").classList.remove("hide-me");
            document.getElementById("galery-pics").classList.add("hide-me");
        }
    }
    else if(e.target.id==="self-photos"){
        if(document.getElementById("galery-pics").classList.contains("hide-me")){
            document.getElementById("galery-pics").classList.remove("hide-me");
            document.getElementById("galery-trainings").classList.add("hide-me");
        }
    }
}