window.onload= trigger();
document.getElementById("sections-wrapper").addEventListener("scroll",stickProfileOption)
// .onscroll=stickProfileOption();

function trigger(){
    var parent = document.querySelectorAll(".flow-btn");
    for(i=0;i<parent.length;i++){
        parent[i].addEventListener("click", flow)
    }
}

function flow(e){
    var parent = document.querySelectorAll("section");
    console.log(parent[0].id);
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
}

function stickProfileOption(){
    var selfProfileAux=document.getElementById("self-profile")
    if(!selfProfileAux.classList.contains("hide-me")){
        console.log("illo");
        var stickMe=document.getElementById("to-stick");
        var sticky=stickMe.offsetTop;
        console.log(sticky);
        console.log(document.getElementById("sections-wrapper").scrollTop);
        if(document.getElementById("sections-wrapper").scrollTop>=95){
            stickMe.classList.add("sticky");
            console.log("entro");
        }
        else{
            stickMe.classList.remove("sticky");
        }
    }

}