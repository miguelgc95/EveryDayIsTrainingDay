function validationFlow(tar){
    console.log(tar.parentNode.parentNode.id);
    switch (tar.parentNode.parentNode.id){
        case "create-account":
            console.log("e1");
            validateCreateAccount();
            break;
        case "log-in":
            console.log("e2");
            validateLogIn();
            break;
        case "profile-settings":
            console.log("e3");
            validateProfileSettings();
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
        console.log(flag1,flag2,flag3);
    }
}

function createUser(){
    var name=document.getElementById("user-name").value;
    var p1=new User(name,document.getElementById("repeat-password").value);
    var allUsers=JSON.parse(localStorage.getItem("allUsers"))
    localStorage.setItem('allUsers',JSON.stringify([]))
    allUsers.push(p1);
    localStorage.setItem("currentUser",JSON.stringify(p1));
    localStorage.setItem("allUsers", JSON.stringify(allUsers));
}

function validateLogIn(){
    var allUsers=JSON.parse(localStorage.getItem("allUsers"));
    var validUser;
    allUsers.forEach(element => {
        if(element.email===document.querySelector("#email").value){
            validUser=element.email
            if (element.password!=document.querySelector("#password-log-in").value){
                alert("invalid password")
            }
        }
    });
    if (validUser===undefined){
        alert("invalid email")
    }
}

function validateProfileSettings(){

}