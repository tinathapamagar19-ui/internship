// const btn = document.querySelector('.menu')
// const container=document.querySelector('.container1')
// const container = document.querySelector('.container1');
// const closebtnr=document.querySelector('.close')
// console.log(btn);
// console.log(container);




// btn.addEventListener("click",()=>{
//  container.style.display='block'
 

 
// })

// closebtnr.addEventListener("click",()=>{
//  container.style.display='none'

 
// })


const menuBtn = document.querySelector('.menu');
const container = document.querySelector('.container1');
const closeBtn = document.querySelector('.close');

menuBtn.addEventListener("click", () => {
  container.style.display = 'block';
  menuBtn.style.display = 'none';
});

closeBtn.addEventListener("click", () => {
  container.style.display = 'none';
  menuBtn.style.display = 'block';
});


              