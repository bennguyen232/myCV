// settup lib
$('#backToTop').goTop({
   container: '',
   appear: 200,
   scrolltime: 800,
   src: "fas fa-chevron-up",
   width: 35,
   place: "right",
   fadein: 500,
   fadeout: 500,
   opacity: 1,
   marginX: 2,
   marginY: 2,
   zIndex: 999
});
$("body").prognroll({
   height: 2,
   color: "#ff5722"
});

const $type_animated = $('.type_animated');
const _myname = ' Nguyen Duy Thai';
const _myintro = ' a Front End Developer';
let isText = false;

function delAnimateHeaderIntro(length, callback) {
   const inter = setInterval(() => {
      $('.type_animated span').last().remove();
      if (length < 0) {
         clearInterval(inter);
         setTimeout(() => {
            callback();
         }, 400);
      }
      length--;
   }, 30);
}

function animateHeaderIntro(str = '') {
   let amount = 0, length = str.length;
   const inter = setInterval(function () {
      $type_animated.append(`<span>${str[amount]}</span>`)
      if (amount >= length - 1) {
         clearInterval(inter);
         setTimeout(() => {
            delAnimateHeaderIntro(length, () => {
               let textnext = isText ? _myname : _myintro
               isText = !isText;
               animateHeaderIntro(textnext);
               $type_animated.html('');
            })
         }, 1200)
      }
      amount++;
   }, 130)
}
animateHeaderIntro(_myname);

$('#btnSubmit').click(()=>{
   alert('Sorry, this feature is not yet used')
})
