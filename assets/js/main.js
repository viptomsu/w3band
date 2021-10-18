// toast function 
function toast({
   title = '',
   msg = '',
   type = 'info',
   duration = 3000
}) {
   const main = document.getElementById('alert');
   if (main) {
      const toast = document.createElement('div');
      const icons = {
         success: "fa-solid fa-circle-check",
         info: "fa-solid fa-circle-info",
         warning: "fa-solid fa-circle-exclamation",
         danger: "fa-solid fa-circle-radiation"
      }
      const fadeOutTime = 400;
      toast.classList.add('toast', `toast--${type}`);
      toast.style.animation = `slideIn 0.3s ease-in-out, fadeOut ${fadeOutTime/1000}s linear ${duration/1000}s forwards`;
      toast.innerHTML = `
         <div class="toast__icon">
            <i class="${icons[type]}"></i>
         </div>
         <div class="toast__body">
            <h3 class="toast__title">${title}</h3>
            <p class="toast__msg">${msg}</p>
         </div>
         <div class="toast__close">
            <i class="fa-solid fa-xmark"></i>
         </div>
      `;
      main.appendChild(toast);
      setTimeout(function () {
         main.removeChild(toast);
      }, duration + fadeOutTime + 400)
   }
}

// modal 
const buyBtns = document.querySelectorAll(".js-buy");
const modal = document.getElementById("modal");
const modalClose = document.querySelector('#modal .modal-close');
const modalContainer = document.querySelector('#modal .modal-container');
const payBtn = document.getElementById('pay');

for (const buyBtn of buyBtns) {
   buyBtn.addEventListener("click", function(){
      modal.classList.add("open");
   })
}

modalClose.addEventListener('click', function(){
   modal.classList.remove('open');
})

modal.addEventListener('click', function(){
   modal.classList.remove('open');
})

modalContainer.addEventListener('click', function(event){
   event.stopPropagation();
})

payBtn.onclick = function () {
   toast({
      title: 'Success',
      msg: 'Your tickets will be sent to you soon',
      type: 'success',
      duration: 2000
   })
   modal.classList.remove('open');
}

// header 
const header = document.getElementById('header');
const mobileBtn = document.querySelector('.toggle-btn');
const headerHeight = header.clientHeight;
const subnavs = document.querySelectorAll('.submenu > a');
const sectionLinks = document.querySelectorAll('#nav li:not(.submenu)');

mobileBtn.addEventListener('click', function(){
   var isClose = header.clientHeight == headerHeight;
   if (isClose){
      header.classList.add("show");
   }else{
      header.classList.remove("show");
      mobileBtn.blur();
   }
});

for (let i = 0; i < sectionLinks.length; i++) {
   const sectionLink = sectionLinks[i];
   sectionLink.onclick = function (event) {
      header.classList.remove("show");
   }
}

for (let i = 0; i < subnavs.length; i++) {
   const menus = subnavs[i];
   menus.onclick = function (event) {
      event.preventDefault();
   }
}

// search
const searchBtn = document.querySelector('.search');
searchBtn.onclick = function () {
   toast({
      title: 'Error',
      msg: "This function hasn't been realeased yet",
      type: 'danger',
      duration: 2000
   })
}