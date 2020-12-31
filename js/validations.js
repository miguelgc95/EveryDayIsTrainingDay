function validationFlow(tar){
    switch (tar.parentNode.parentNode.id){
        case "create-account":
            return validateCreateAccount();
            break;
        case "log-in":
            return generalLoginValidation();
            break;
        case "profile-settings":
            return validateProfileSettings();
            putNavBarImg()
            break;
        case "new-training":
            return validateNewTraining();
            break;
    }
}

function validateCreateAccount(){
    var allUsers=JSON.parse(localStorage.getItem("allUsers"));
    var flag1=true,flag2=true,flag3=true;
    if(document.querySelector("#user-name").value===""){
        document.getElementById("username-span").innerHTML ="Invalid user name";
        document.getElementById("username-span").style.display = "block";
        flag3=false;
    }
    allUsers.forEach(element => {
        if(element.userName===document.querySelector("#user-name").value){
            document.getElementById("email-create-span").innerHTML ="user name alredy exists";
            document.getElementById("email-create-span").style.display = "block";
            flag1=false;
        }
        if(element.email===document.querySelector("#email-create").value){
            document.getElementById("email-create-span").innerHTML ="this email alredy has an account";
            document.getElementById("email-create-span").style.display = "block";
            flag2=false;
        }
    });
    if(document.querySelector("#password").value!=document.querySelector("#repeat-password").value){
        document.getElementById("password-create-span").innerHTML ="passwords must be equal";
        document.getElementById("password-create-span").style.display = "block";
        flag3=false;
    }
    if(flag1*flag2*flag3){
        createUser();
        return true
    }
    else{
        return false
    }
}

//Log-in Validation
function validatePasswordLogIn(element){
    //return true when password is correct, flase when invalid password
    if (element.password===document.querySelector("#password-log-in").value){
        return true
    }
    else{
        document.getElementById("password-login-span").innerHTML ="Invalid password";
        document.getElementById("password-login-span").style.display = "block";
        return false;
    }
}

function validateEmailLogIn(){
    var allUsers=JSON.parse(localStorage.getItem("allUsers"));
    var validUser;
    var index;
    var flag=false;
    allUsers.forEach((element,i) => {
        if(element.email===document.querySelector("#email").value){
            index=i;
            validUser=element.email;
            if (validatePasswordLogIn(element)){
                flag=true;
            }
        }
    });
    if (validUser===undefined){
        document.getElementById("login-span").innerHTML ="Invalid email";
        document.getElementById("login-span").style.display = "block";
        return false;
    }
    else if(validUser!=undefined && !flag){
        document.getElementById("login-span").style.display = "none";
        document.getElementById("password-login-span").innerHTML ="Invalid password";
        document.getElementById("password-login-span").style.display = "block";
        return false;
    }
    else{
        document.getElementById("login-span").style.display = "none";
        document.getElementById("password-login-span").style.display = "none";
        return validUser;
    }
}

function generalLoginValidation(){
    var bol=validateEmailLogIn();
    if (bol!=false && bol!=undefined){
        console.log(bol);
        setCurrent(bol);
        document.querySelector("#email").removeEventListener("blur", validateEmailLogIn);
        document.querySelector("#password-log-in").removeEventListener("blur", validateEmailLogIn);
        return true
    }
    else{
        return false
    }
}


//validate profile Settings
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
    var allUsers=JSON.parse(localStorage.getItem("allUsers"));
    var idTraining=allUsers[localStorage.getItem("currentUser")].trainingPosts.length;
    var training={
        typology: document.getElementById("typology").value,
        trainDescription: document.getElementById("training-description").value,
        dificulty: document.getElementById("dificulty").value,
        images:[],
        likes: [],
        comments: [],
        idTraining: idTraining,
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
    allUsers[localStorage.getItem("currentUser")].trainingPosts.push(training);
    localStorage.setItem("allUsers", JSON.stringify(allUsers));
    document.querySelector("#list").innerHTML="";
    document.querySelector("#training-description").innerHTML="";
}

function validateSelfProfile(){
    document.querySelector("#img-wrapper").innerHTML="";
}