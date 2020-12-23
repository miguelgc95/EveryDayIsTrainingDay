function loadTrainingsInfo(){
    document.getElementById("trainings").innerHTML="";
    var allUsers=JSON.parse(localStorage.getItem("allUsers"));
    allUsers.forEach(element => {
        var trainingPosts=element.trainingPosts;
        trainingPosts.forEach(e => {
            loadATrainingInMainFeed(e,element.email);
        });
    });
}

function loadATrainingInMainFeed(training, meta){
    var allUsers=JSON.parse(localStorage.getItem("allUsers"));
    var myDiv = document.createElement('div');
    //in button's atributes will be stored who interacted(name) and the index of the post where interacted(title)
    myDiv.innerHTML = ['<div><img class="yep" src="', training.images[0].src,'" title="', training.images[0].title,
                        '"</div><div>', training.trainDescription,'</div><div><span>',training.likes.length,
                        ' likes<button name="',meta,'" title="',training.idTraining,'" class="like-btn">like this</button></span><div>comments:', training.comments.length,
                        '<button name="',meta,'" title="',training.idTraining,'" class="comment-btn">comment this</button></div></div>'].join('');
    document.getElementById("trainings").insertAdjacentElement('beforeend',myDiv);
    myDiv.querySelector(".like-btn").addEventListener("click", likeApost);
    myDiv.querySelector(".comment-btn").addEventListener("click", commentAPost);
    training.comments.forEach(element => {
        var mySpan=document.createElement("span");
        mySpan.innerHTML = [allUsers[element.whoCommented].userName+' commented: '+element.commentText+'<br>']
        myDiv.insertAdjacentElement('beforeend',mySpan);
    });
}

function loadPicturesInfo(){

}

function loadSearchInfo(){
    addTrainingToProfilePage(element);
}

function loadSelfProfileInfo(){
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
    currentUser.trainingPosts.forEach(element => {
        loadTrainingToProfilePage(element);
    });
}

function loadTrainingToProfilePage(training){
    var div = document.createElement('div');
    div.innerHTML = ['<div><img src="', training.images[0].src,'" title="', training.images[0].title,
    '"</div><div>', training.trainDescription,
    '</div><div><span>',training.likes.length,' likes</span><div>comments:', training.comments.length,'</div></div>'].join('');
    document.getElementById("galery-trainings").insertAdjacentElement('beforeend',div);
}

function loadProfileSettingsInfo(){

}

function loadNotificationsInfo(){
    document.getElementById("notifications").innerHTML="";
    var allUsers=JSON.parse(localStorage.getItem("allUsers"));
    var currentUser=allUsers[localStorage.getItem("currentUser")];
    var notifications=currentUser.notifications;
    notifications.forEach((element,i) => {
        loadEveryNotification(element,i);
    });
}

function loadEveryNotification(element,i){
    //"element" is a notification object and "i" is the notification index
    var myDiv=document.createElement('div');
    if(element.notificationType==="like"){
        if(element.status){
            myDiv.innerHTML = [element.whoInteracted+' liked your training '+element.whereInteracted+ '<button class="read" title="'+i+'">Mark as read</button>'];
            myDiv.querySelector(".read").addEventListener("click", changeNotificationStatus);
        }
        else{
            myDiv.innerHTML = [element.whoInteracted+' liked your training '+element.whereInteracted+'<button>Readed</button>'];
        }
    }
    else if(element.notificationType==="comment"){
        if(element.status){
            myDiv.innerHTML = [element.whoInteracted+' commented in your training '+element.whereInteracted+': '+element.mesage+ '<button class="read" title="'+i+'">Mark as read</button>'];
            myDiv.querySelector(".read").addEventListener("click", changeNotificationStatus);
        }
        else{
            myDiv.innerHTML = [element.whoInteracted+' commented in your training '+element.whereInteracted+': '+element.mesage+'<button>Readed</button>'];
        }
    }
   
    document.getElementById("notifications").insertAdjacentElement('beforeend',myDiv);
}