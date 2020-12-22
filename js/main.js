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
}

function commentAPost(e){
    console.log(e.target.name);
}