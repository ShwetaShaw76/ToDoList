let txt=document.querySelector(".txt")
let items=document.querySelectorAll(".t")
let del=document.querySelectorAll(".del")
let send=document.querySelector(".btn1")
let obj=document.querySelectorAll(".i")
let i=0;
let k,j,l;
const date = new Date();
const date1 = date.toDateString();
const time = date.toTimeString();
const dt=document.querySelector(".date")
const tm=document.querySelector(".time")
dt.textContent=date1;
tm.textContent=time;

send.addEventListener("click",()=>{
        for(l=0;l<7;l++){
            if(items[l].textContent==""){
                items[l].textContent=txt.value;
                obj[l].style.display="inline-block";
                break;
            }
        }
})
del.forEach((e, i) => {
    e.addEventListener("click",()=>{
        items[i].textContent="";
        obj[i].style.display="none";
        for(j=0;j<6;j++){
            if(items[j].textContent==""){
                items[j].textContent=items[j+1].textContent;
                items[j+1].textContent="";
            }
    }
})
})

