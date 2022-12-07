const getElement = (selection)=>{
  const element = document.querySelector("selection");
  if(element){
    return element
  } else {
    throw Error ("please check your selection");
  }
}
let count=0
const value=document.getElementById("value")
const btns = document.querySelectorAll(".btn");

btns.forEach((btn)=>{
   btn.addEventListener("click", ()=>{
     if(btn.classList.contains("increase")){
       count++
       if(count>0){
        value.style.color="green"
       }
      
     }else if(btn.classList.contains("decrease")){
      count--
      if(count<0){
        value.style.color="red"
      }
    
     } else {
      count=0
      value.style.color="black"
     }
    
     value.innerHTML=count
   })
})
