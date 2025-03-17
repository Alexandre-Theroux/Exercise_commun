let bouttonChangerBackground = document.getElementById("bonus");
let body = document.body;

bouttonChangerBackground.addEventListener(("click"),e => {

    if (body.style.background==="greenyellow") {
        body.style.background ="rgb(255, 187, 0)";
    }
    
    else{

        body.style.background = "greenyellow";
    }
 
});