function followStudent() {
    const button = document.getElementById("follow-btn");

    if (button.innerText === "Follow") {
        button.innerText = "Following";
        button.style.backgroundColor = "green";
    } else {
        button.innerText = "Follow";
        button.style.backgroundColor = "red";
    }
}
