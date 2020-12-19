getLocalStorage()
function getLocalStorage(){
    if (localStorage.getItem('allUsers') === null) {
        console.log("lo cojo");
        localStorage.setItem('allUsers',JSON.stringify([]))
    }
    // else{
    //     allUsers = JSON.parse(localStorage.getItem('allUsers'))
    // }
    if(localStorage.getItem("currentUser"===null)){
        localStorage.setItem("currentUser",JSON.stringify({}))
    }
}

function User(userName,password){
    this.userName=userName;
    this.password=password
    this.profilePhoto;
    this.trainingPosts=[];
    this.picturesPosts=[];
    this.followers=[];
    this.description="";
    this.interaction=function(){

    }
}

function Training(){
    this.typology="";
    this.trainDescription="";
    this.trainPhoto;
    this.likes=[];
    this.comments=[];
}

function Photos(){
    this.photo;
    this.description="";
    this.likes=[];
    this.comments=[];
}