const btns=document.querySelectorAll(".color_botton");
const bgBox=document.querySelector(".container")
btns.forEach(btn => {
  btn.addEventListener("click",()=>{
    // console.log("clicked")
    bgBox.style.background=btn.id
    btns.forEach(b => {
      if (b === btn) {
        b.style.display = "block"    
      } else {
        b.style.display = "none"
      }
   }   ) 
 
    
    
  
  })
    
});