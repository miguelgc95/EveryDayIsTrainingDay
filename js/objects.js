class User{
    constructor(userName, email, password){
        this.userName=userName;
        this.email=email;
        this.password=password;
        this.profilePhoto={};
        this.trainingPosts=[];
        this.picturesPosts=[];
        this.followers=[];
        this.description="";
    }
    // get setCurrent (){
    //     var allUsers=JSON.parse(localStorage.getItem("allUsers"));
    //     var ind=allUsers.findIndex(e => {
    //         return e.email===this.email;
    //     });
    //     console.log("entro en set y ind vale",ind);
    //     localStorage.setItem("currentUser",ind);
    // }
    get interaction(){
        console.log("tus muerto");
    }
}

//this function was at the beginning a method of the class "User", but its not possible to store methods in localStorage
function setCurrent (email){
    var allUsers=JSON.parse(localStorage.getItem("allUsers"));
    var ind=allUsers.findIndex(e => {
        return e.email===email;
    });
    console.log("entro en set y ind vale",ind);
    localStorage.setItem("currentUser",ind);
}

// class Training{
//     constructor()
// }
// function Training(){
//     this.typology="";
//     this.trainDescription="";
//     this.trainPhoto;
//     this.likes=[];
//     this.comments=[];
// }

function Photos(){
    this.photo;
    this.description="";
    this.likes=[];
    this.comments=[];
}