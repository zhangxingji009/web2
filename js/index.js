function show_menu(li){
    li.className='top dropdown2 active';
    li.getElementsByTagName("ul")[0].style.display = "block";
}
function hide_menu(li){
    li.className='top dropdown2 noactive';
    li.getElementsByTagName("ul")[0].style.display = "none";
}
$(document).ready(function () {
    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        
        // 如果需要分页器
        pagination: '.swiper-pagination',
        
        // 如果需要前进后退按钮
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        
        // 如果需要滚动条
        scrollbar: '.swiper-scrollbar',
        grabCursor : true,
        parallax : true,
      }) 
    var drop_li = document.querySelector('.dropdown2');
    hide_menu(drop_li);
   })
