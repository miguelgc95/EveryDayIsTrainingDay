class User{
    constructor(userName, email, password){
        this.userName=userName;
        this.email=email;
        this.password=password;
        this.profilePhoto={};
        this.trainingPosts=[];
        this.picturesPosts=[];
        this.followers=[];
        this.following=[];
        this.description="";
        this.notifications=[];
    }
}

class Notification{
    constructor(notificationType, whereInteracted,whoInteracted){
        this.notificationType=notificationType;
        this.whereInteracted=whereInteracted;
        this.whoInteracted=whoInteracted;
        this.status=true;
    }
}

//this function was at the beginning a method of the class "User", but its not possible to store methods in localStorage
function setCurrent (email){
    var allUsers=JSON.parse(localStorage.getItem("allUsers"));
    var ind=allUsers.findIndex(e => {
        return e.email===email;
    });
    localStorage.setItem("currentUser",ind);
}

function Photos(){
    this.photo;
    this.description="";
    this.likes=[];
    this.comments=[];
}