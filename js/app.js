$(window).on('load', function () {
    $('#hello_menu_text').delay(17500);

    $('#hello_menu_text_text').typeIt({
        strings: ["Los Santos '86 - это UCP проект на платформе SA:MP 0.3.7,", "который позволит игрокам прочувствовать атмосферу 80-ых годов в любимой игре", "и вновь оказаться на стороне криминала или полиции,", "начинающих IT-шников из гаража", "или коммерсантов, музыкантов или реднеков в Лос-Сантосе."],
        speed: 100,
        autoStart: true,
        instant: true,
        loop: true
    });
});

//window.addEventListener("scroll", function(){
//    let scrolPos = window.scrollY;
//  
//   if(scrolPos > 0){
//     nav.classList.add('bgcolor');
//   }else{
 //    nav.classList.remove('bgcolor');
//   }
//  })

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = anchor.getAttribute('href').substr(1)

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

$(".nav_hamb").on('click',function(){
  $(".menu_block").show();
})

$(".nav_hamb_block").on('click',function(){
  $(".menu_block").hide();
})

$("#login").on('click',function(){
  $(".blur_background").show();
  $(".blur_background_none").show(300);
})

$("#login_button").on('click',function(){
  $(".blur_background").show();
  $(".blur_background_none").show(300);
})

$("#login_button_two").on('click',function(){
  $(".blur_background").show();
  $(".blur_background_none").show(300);
})

$("#blur_background").on('click',function(){
  $(".blur_background").hide();
  $(".blur_background_none").hide(300);
})

//$(document).click( function(event){
//  if( $(event.target).closest("#blur_background_none").length ) return;
//  $("#blur_background_none").hide();
//  $("#blur_background").hide();
//  event.stopPropagation();
//});