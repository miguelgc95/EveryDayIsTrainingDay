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
    constructor(notificationType, whereInteracted,whoInteracted,mesage){
        this.notificationType=notificationType;
        this.whereInteracted=whereInteracted;
        this.whoInteracted=whoInteracted;
        this.mesage=mesage;
        this.status=true;
    }
}

class TrainingPosts{
    constructor(difficulty, idTraining,trainDescription,typology){
        this.comments=[];
        this.difficulty=difficulty;
        this.idTraining=idTraining;
        this.images=[];
        this.likes=[];
        this.trainDescription=trainDescription;
        this.typology=typology;
    }
}

class commentObject{
    constructor(whoCommented, commentText){
        this.whoCommented=whoCommented;
        this.commentText=commentText;
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