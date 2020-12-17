window.onload= trigger();

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