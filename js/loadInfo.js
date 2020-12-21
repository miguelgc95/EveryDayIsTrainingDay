function loadTrainingsInfo(){
var allUsers=JSON.parse(localStorage.getItem("allUsers"));
var currentUser=allUsers[localStorage.getItem("currentUser")];


// var span = document.createElement('span');
//                 span.innerHTML = ['<img class="profile-img" src="', e.target.result,
//                                 '" title="', escape(theFile.name), '"/>'].join('');
//                 document.getElementById('img-wrapper').insertBefore(span, null);
}

function loadPicturesInfo(){

}

function loadSearchInfo(){
    
}

function loadSelfProfileInfo(){
    
}

function loadProfileSettingsInfo(){
    
}

function loadNotificationsInfo(){
    
}

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
            console.log(span);
        };
        })(f);

    // Read in the image file as a data URL.
    reader.readAsDataURL(f);
}

document.getElementById("files-profile-img").addEventListener("change", handleFileSelectProfile, false);