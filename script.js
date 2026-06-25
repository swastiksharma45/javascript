let btn1=document.querySelector("#btn1");
let mode="light";
btn1.addEventListener("click",()=>{
    if(mode==="light"){
        mode="dark";
        document.querySelector("body").style.backgroundColor="black";
    }else{
        mode="light";
        document.querySelector("body").style.backgroundColor="white";
    }
    console.log(mode);
});