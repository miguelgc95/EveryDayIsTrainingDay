window.onload= trigger();

getLocalStorage()
function getLocalStorage(){
    if (localStorage.getItem('allUsers') === null) {
        console.log("wop");
        localStorage.setItem('allUsers',JSON.stringify([]))
    }
    // else{
    //     allUsers = JSON.parse(localStorage.getItem('allUsers'))
    // }
    if(localStorage.getItem("currentUser"===null)){
        localStorage.setItem("currentUser",JSON.stringify({}))
    }
}

function trigger(){
    var parent = document.querySelectorAll(".flow-btn");
    for(i=0;i<parent.length;i++){
        parent[i].addEventListener("click", flow)
    }
}

function flow(e){
    e.preventDefault();
    if(e.target.classList.contains("validate")){
        validationFlow(e.target);
    }
    var parent = document.querySelectorAll("section");
    for(i=0;i<parent.length;i++){
        if(parent[i].id===e.target.name){
            if(parent[i].classList.contains("hide-me")){
                parent[i].classList.remove("hide-me");
            }
        }
        else{
            if(!parent[i].classList.contains("hide-me")){
                parent[i].classList.add("hide-me")
            }
        }
    }
    switch(e.target.name){
        case "trainings":
            loadTrainingsInfo();
            break;
        case "pictures":
            loadPicturesInfo();
            break;
        case "search":
            loadSearchInfo();
            break;
        case "self-profile":
            document.getElementById("sections-wrapper").addEventListener("scroll",stickProfileOption);
            loadSelfProfileInfo();
            break
        case "profile-settings":
            loadProfileSettingsInfo();
            break;
        case "notifications":
            loadNotificationsInfo();
            break;
    }
}

function stickProfileOption(){
    var selfProfileAux=document.getElementById("self-profile")
    if(!selfProfileAux.classList.contains("hide-me")){
        var stickMe=document.getElementById("to-stick");
        var sticky=stickMe.offsetTop;
        if(document.getElementById("sections-wrapper").scrollTop>=95){
            stickMe.classList.add("sticky");
        }
        else{
            stickMe.classList.remove("sticky");
        }
    }

}

function handleFileSelect(evt) {
    var files = evt.target.files; // FileList object
    console.log(files);

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

window.onclick=function(e){console.log(e.target);}