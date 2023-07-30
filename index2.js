const arr="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
document.querySelector("h1").onmouseover=event=>{
    
    let i=0;

    const interval = setInterval(()=>{
    event.target.innerText= event.target.innerText.split("")
    .map((l,index)=>{
       if(index<i){
        return event.target.dataset.value[index];
       }
       return arr[Math.floor(Math.random()*26)]
    })
    .join("");

    if(i>=event.target.dataset.value.length)clearInterval(interval);

    i+=2/3;
    },30);
}


let activeIndex=0;

const groups=document.getElementsByClassName("groupcard");

const right=()=>{

    const nextIndex= activeIndex+1<=groups.length-1 ? activeIndex+1 : 0;

    const currGroup=document.querySelector(`[data-index="${activeIndex}"]`);
    const newGroup=document.querySelector(`[data-index="${nextIndex}"]`);

    currGroup.dataset.status="after";
    
    newGroup.dataset.status="becoming-active-from-before";

    setTimeout(()=>{
        newGroup.dataset.status='active';
        activeIndex=nextIndex;
    });
}
const left=()=>{

    const nextIndex= activeIndex-1 >=0 ? activeIndex-1 : groups.length-1;

    const currGroup=document.querySelector(`[data-index="${activeIndex}"]`);
    const newGroup=document.querySelector(`[data-index="${nextIndex}"]`);

    currGroup.dataset.status="before";
    
    newGroup.dataset.status="becoming-active-from-after";

    setTimeout(()=>{
        newGroup.dataset.status='active';
        activeIndex=nextIndex;
    });
}