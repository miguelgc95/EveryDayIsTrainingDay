function validationFlow(tar){
    switch (tar.parentNode.parentNode.id){
        case "create-account":
            validateCreateAccount();
            break;
        case "log-in":
            validateLogIn();
            break;
        case "profile-settings":
            validateProfileSettings();
            break;
        case "new-training":
            validateNewTraining();
            break;
    }
}

function validateCreateAccount(){
    var allUsers=JSON.parse(localStorage.getItem("allUsers"));
    var flag1=true,flag2=true,flag3=true;
    if(document.querySelector("#user-name").value===""){
        alert("invalid user name");
        flag3=false;
    }
    allUsers.forEach(element => {
        if(element.userName===document.querySelector("#user-name").value){
            alert("user name alredy exists");
            flag1=false;
        }
        if(element.email===document.querySelector("#email-create").value){
            alert("this email alredy has an account")
            flag2=false;
        }
    });
    if(document.querySelector("#password").value!=document.querySelector("#repeat-password").value){
        alert("passwords must be equal")
        flag3=false;
    }
    if(flag1*flag2*flag3){
        createUser();
    }
    else{
        alert("no te creo");
    }
}

function validateLogIn(){
    var allUsers=JSON.parse(localStorage.getItem("allUsers"));
    var validUser;
    var index;
    allUsers.forEach((element,i) => {
        if(element.email===document.querySelector("#email").value){
            index=i;
            validUser=element.email;
            if (element.password!=document.querySelector("#password-log-in").value){
                alert("invalid password")
            }
        }
    });
    if (validUser===undefined){
        alert("invalid email")
    }
    else{
        setCurrent(validUser);
    }
}

function validateProfileSettings(){
    var allUsers=JSON.parse(localStorage.getItem("allUsers"));
    var imgs=document.getElementById("list-profile-img").children;
    if(imgs[0]===undefined){
        alert("add a profile picture")
    }
    else{
        var myimg=imgs[0].getElementsByTagName("img")[0];
        var photo={
            src: myimg.src,
            title: myimg.title,
        }
        allUsers[localStorage.getItem("currentUser")].profilePhoto=photo;
    }
    if(document.getElementById("user-name2").value===""){
        alert("add a user name")
    }
    else{
        allUsers[localStorage.getItem("currentUser")].userName=document.getElementById("user-name2").value;
    }
    if(document.getElementById("descript").value===""){
        alert("add a description")
    }
    else{
        allUsers[localStorage.getItem("currentUser")].description=document.getElementById("descript").value;
    }
    localStorage.setItem("allUsers", JSON.stringify(allUsers))
}

function validateNewTraining(){
    var training={
        typology: document.getElementById("typology").value,
        trainDescription: document.getElementById("training-description").value,
        dificulty: document.getElementById("dificulty").value,
        images:[],
        likes: [],
        comments: []
    }
    var imgs=document.getElementById("list").children;
    for(i=0;i<imgs.length;i++){
        var myimg=imgs[i].getElementsByTagName("img")[0];
        var photo={
            src: myimg.src,
            title: myimg.title,
        }
        training.images.push(photo);
    }
    var allUsers=JSON.parse(localStorage.getItem("allUsers"));
    allUsers[localStorage.getItem("currentUser")].trainingPosts.push(training);
    localStorage.setItem("allUsers", JSON.stringify(allUsers));
    document.querySelector("#list").innerHTML="";
    document.querySelector("#training-description").innerHTML="";
}

function validateSelfProfile(){
    document.querySelector("#img-wrapper").innerHTML="";
}