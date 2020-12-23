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
    putNavBarImg();
    document.getElementById("auxx").classList.remove("hide-me");
    document.getElementById("down-nav").classList.remove("hide-me");
}

function putNavBarImg(){
    var allUsers=JSON.parse(localStorage.getItem("allUsers"));
    var currentUser=allUsers[localStorage.getItem("currentUser")];
    document.getElementById("img-btn").innerHTML="";
    var currentImg=currentUser.profilePhoto;
    var span = document.createElement('span');
    span.innerHTML = ['<img class="nav-img aux2" src="', currentImg.src,
                                    '" title="', currentImg.title, '"/>'].join('');
    document.getElementById("img-btn").insertBefore(span, null);
}

function Photos(){
    this.photo;
    this.description="";
    this.likes=[];
    this.comments=[];
}