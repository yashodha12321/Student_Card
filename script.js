function followStudent(){
    const button=document.getElementById("follow-btn");
    if(button.innerText==="Follow"){
        button.innerText="Unfollow";
        button.style.backgroundColor="#ff0000";
    }else{
        button.innerText="Follow";
        button.style.backgroundColor="#008000";
    }
}