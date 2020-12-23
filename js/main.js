function handleFileSelect(evt) {
    var files = evt.target.files; // FileList object

    // Loop through the FileList and render image files as thumbnails.
    for (var i = 0, f; f = files[i]; i++) {

      // Only process image files.
        if (!f.type.match('image.*')) {
            continue;
        }

        var reader = new FileReader();

      // Closure to capture the file information.
        reader.onload = (function(theFile) {
            return function(e) {
                // Render thumbnail.
                var span = document.createElement('span');
                span.innerHTML = ['<img class="thumb" src="', e.target.result,
                                '" title="', escape(theFile.name), '"/>'].join('');
                document.getElementById('list').insertBefore(span, null);
            };
        })(f);

      // Read in the image file as a data URL.
        reader.readAsDataURL(f);
    }
}

document.getElementById('files').addEventListener('change', handleFileSelect, false);

function handleFileSelectProfile(evt) {
    var files = evt.target.files; // FileList object
    var reader = new FileReader();
    var f=files[0]
    // Closure to capture the file information.
    reader.onload = (function(theFile) {
        return function(e) {
            // Render thumbnail.
            var span = document.createElement('span');
            span.innerHTML = ['<img class="thumb" src="', e.target.result,
                            '" title="', escape(theFile.name), '"/>'].join('');
            document.getElementById('list-profile-img').insertBefore(span, null);
        };
        })(f);
    // Read in the image file as a data URL.
    reader.readAsDataURL(f);
}

document.getElementById("files-profile-img").addEventListener("change", handleFileSelectProfile, false);

function createUser(){
    var name=document.getElementById("user-name").value;
    var password=document.getElementById("password").value;
    var email=document.getElementById("email-create").value;
    var p1=new User(name, email, password);
    var allUsers=JSON.parse(localStorage.getItem("allUsers"))
    localStorage.setItem('allUsers',JSON.stringify([]))
    allUsers.push(p1);
    localStorage.setItem("allUsers", JSON.stringify(allUsers));
    setCurrent(email);
}

function likeApost(e){
    var allUsers=JSON.parse(localStorage.getItem("allUsers"));
    var currentUser=allUsers[localStorage.getItem("currentUser")];
    var indexOfLikedUser=allUsers.findIndex(element => {
        return element.email===e.target.name;
    });
    allUsers[indexOfLikedUser].trainingPosts[e.target.title].likes.push(currentUser.userName);
    localStorage.setItem("allUsers", JSON.stringify(allUsers));
    loadTrainingsInfo();
    var mesage="";
    setNewNotification("like",e.target.title, currentUser.userName, mesage, indexOfLikedUser);
}

function commentAPost(e){
    var myDiv=document.createElement("div");
    var textAreaComment=document.createElement("textarea");
    var confirmComment=document.createElement("button");
    var discardComment=document.createElement("button");
    confirmComment.setAttribute("title", e.target.title);
    confirmComment.setAttribute("name", e.target.name);
    confirmComment.innerHTML="send comment";
    discardComment.innerHTML="discard comment";
    confirmComment.addEventListener("click",saveComment);
    discardComment.addEventListener("click",cancelComment);
    myDiv.insertAdjacentElement("beforeEnd",textAreaComment);
    myDiv.insertAdjacentElement("beforeEnd",confirmComment);
    myDiv.insertAdjacentElement("beforeEnd",discardComment);
    e.target.parentNode.parentNode.parentNode.insertAdjacentElement("beforeEnd",myDiv);
}

function saveComment(e){
    // añadir los comentarios al loadInfo
    var allUsers=JSON.parse(localStorage.getItem("allUsers"));
    var currentUser=allUsers[localStorage.getItem("currentUser")];
    var indexOfCommentedUser=allUsers.findIndex(element => {
        return element.email===e.target.name;
    });
    var mesage=e.target.parentNode.firstChild.value;
    var commentInfo={
        whoCommented:localStorage.getItem("currentUser"),
        commentText:mesage,
    }
    allUsers[indexOfCommentedUser].trainingPosts[e.target.title].comments.push(commentInfo);
    localStorage.setItem("allUsers", JSON.stringify(allUsers));
    e.target.removeEventListener("click",saveComment);
    e.target.parentNode.lastChild.removeEventListener("click",cancelComment);
    loadTrainingsInfo();
    setNewNotification("comment", e.target.title, currentUser.userName, mesage, indexOfCommentedUser)
}

function cancelComment(e){
    e.target.previousSibling.removeEventListener("click",saveComment);
    e.target.removeEventListener("click",cancelComment);
    e.target.parentNode.parentNode.removeChild(e.target.parentNode);
}

function setNewNotification(notificationType, whereInteracted, whoInteracted, mesage,indexOfLikedUser){
    var newNot=new Notification(notificationType, whereInteracted, whoInteracted,mesage);
    var allUsers=JSON.parse(localStorage.getItem("allUsers"));
    allUsers[indexOfLikedUser].notifications.push(newNot);
    localStorage.setItem("allUsers", JSON.stringify(allUsers));
}

//every 1 secs notifications will be checked for a new one
setInterval(function () {
    var allUsers=JSON.parse(localStorage.getItem("allUsers"));
    var currentUser=allUsers[localStorage.getItem("currentUser")];
    if(currentUser.notifications.lenth!=0){
        currentUser.notifications.forEach(element => {
        if(element.status){
            notifyUser();
        }
        else{
            if(document.querySelector("#notifications-btn").classList.contains("red-me")){
                document.querySelector("#notifications-btn").classList.remove("red-me");
            }
        }
        });
    }
    }, 1000);

    function notifyUser(){
        if(!document.querySelector("#notifications-btn").classList.contains("red-me")){
            document.querySelector("#notifications-btn").classList.add("red-me");
        }
    }

    function changeNotificationStatus(e){
        var allUsers=JSON.parse(localStorage.getItem("allUsers"));
        var currentUser=allUsers[localStorage.getItem("currentUser")];
        currentUser.notifications[e.target.title].status=false;
        localStorage.setItem("allUsers", JSON.stringify(allUsers));
        document.getElementById("notifications").innerHTML="";
        loadNotificationsInfo();
    }