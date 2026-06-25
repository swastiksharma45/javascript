let btn1=document.querySelector("#btn1");
let mode="light";
btn1.addEventListener("click",()=>{
    if(mode==="light"){
        mode="dark";
    }else{
        mode="light";
    }
    console.log(mode);
});