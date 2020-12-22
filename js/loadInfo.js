function loadTrainingsInfo(){

}

function loadPicturesInfo(){

}

function loadSearchInfo(){
    
}

function loadSelfProfileInfo(){
    console.log("entro");
    document.querySelector("#img-wrapper").innerHTML="";
    document.querySelector("#galery-trainings").innerHTML="";
    var allUsers=JSON.parse(localStorage.getItem("allUsers"));
    var currentUser=allUsers[localStorage.getItem("currentUser")];
    var currentImg=currentUser.profilePhoto;
    var span = document.createElement('span');
    span.innerHTML = ['<img class="profile-img" src="', currentImg.src,
                                    '" title="', currentImg.title, '"/>'].join('');
    document.getElementById('img-wrapper').insertBefore(span, null);
    document.getElementById("my-trainings").innerHTML=currentUser.trainingPosts.length;
    document.getElementById("my-pictures").innerHTML=currentUser.picturesPosts.length;
    document.getElementById("my-followers").innerHTML=currentUser.followers.length;
    document.getElementById("my-following").innerHTML=currentUser.following.length;
    document.getElementById("description").innerHTML=currentUser.description;
    // if(document.getElementById("self-profile").classList.contains("hide-me")){
        
    // }
    currentUser.trainingPosts.forEach(element => {
        addTrainingToProfilePage(element);
    });
}

function loadProfileSettingsInfo(){

}

function loadNotificationsInfo(){
    
}