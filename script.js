// focus the cursor on the email-address input
document.addEventListener("DOMContentLoaded",()=>{
  // const emailField = document.getElementById("email-address-input");
  // emailField.focus({
  //   preventScroll: true,
  // });

  // nav toggle 
let iconBar = document.querySelector('.menu')
let crossBar = document.querySelector('.close')
let navLi =document.querySelector('.header-list-nav')
iconBar.addEventListener('click',()=>{
  navLi.classList.add('active')
})
crossBar.addEventListener('click',()=>{
  navLi.classList.remove('active')
})
})

