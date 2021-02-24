
var wrapper = document.getElementById("wrapper");

var output = document.getElementById("output");


wrapper.addEventListener("click",function(event){
    console.log(event.target.id);
    if (event.target.id!=="backspase"){
        output.innerHTML+= event.target.id;
    } else {
        output.innerHTML = output.innerHTML.slice(0,-1);
    }
    
})

