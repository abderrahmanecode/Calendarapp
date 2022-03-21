
var fields = document.querySelectorAll(".textb input");
var btn = document.querySelector(".btn");
function check(){
    if(fields[0].value !== "" && fields[1].value !== "")
        btn.disabled = false;
    else
        btn.disabled = true;
}

fields[0].addEventListener("keyup",check);
fields[1].addEventListener("keyup",check);





