// document.querySelector('.c-hamburger').addEventListener('click', function(e){
// e.preventDefault();
// // this.classList.toggle('is-active');

// if(this.classList.contains('is-active')){
//    this.classList.remove('is-active');
//    document.querySelector('.navigation').classList.remove('nav-active');
//    document.body.classList.remove('body-active');
// }
// else{
//    this.classList.add('is-active');
//    document.querySelector('.navigation').classList.add('nav-active');
//    document.body.classList.add('body-active');
// }
// });
const burger = document.querySelector('.burger-menu__burger-icon');
const menu = document.querySelector('.burger-menu__container');


if (burger && menu) {
   burger.addEventListener('click', () => {
      burger.classList.toggle('_active')
      menu.classList.toggle('_active')

   })
}
