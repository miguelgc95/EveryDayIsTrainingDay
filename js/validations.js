function validationFlow(tar){
    console.log(tar.parentNode.parentNode);
    switch (tar.parentNode.parentNode.id){
        case "create-account":
            validateCreateAccount();
        case "log-in":
            validateLogIn();
            break;
        case "profile-settings":
            validateProfileSettings();
            break;
    }
}

function validateCreateAccount(){
    createUser();
}

function createUser(){
    var name=document.getElementById("user-name").value;
    var p1=new User(name,document.getElementById("repeat-password").value);
    var allUsers=JSON.parse(localStorage.getItem("allUsers"))
    localStorage.setItem('allUsers',JSON.stringify([]))
    allUsers.push(p1);
    localStorage.setItem("allUsers", JSON.stringify(allUsers));
}

function validateLogIn(){

}

function validateProfileSettings(){

}
