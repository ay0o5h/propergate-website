$(document).ready(function() {

    // let x=true;
    //  $('.process .faq li').click(function(){
        
    //      if (x === true){
    //     $('.process .faq .content').css({display:'block'})
    //     $('.process .faq .title').css({border:'0',background:'#F6F8F9'})
    //     $(this).siblings().children('.content').css({display:'none'})
    //     // .children('title').css({borderTop:'.5px solid #E5E5E5',
    //     // background:'#fff',borderBottom:'.5px solid #E5E5E5'})
    //     x = !x
    //      }
        
    //      else {
    //         $('.process .faq .content').css({display:'none'})
    //         $('.process .faq .title').css({borderTop:'.5px solid #E5E5E5',
    //         background:'#fff',borderBottom:'.5px solid #E5E5E5'
    //      })
    //         x = !x
    //      }
    // })

    $(window).scroll(function(){ 
       if ($(this).scrollTop() > 1200 && $(this).width()  > 1199){
        $('.customes .nav').css({top: '-10px', left: '10px', position:'fixed'});  
       }
       else {
        $('.customes .nav').css({ position:'static'});
       }
       $('.customes .box').each(function(){
        if($(window).scrollTop() > $(this).offset().top) {
                var idb=$(this).attr('id');
        $('.customes .nav a').removeClass("active");
        $('.customes .nav  a[data-scroll="'+ idb +'"]').addClass("active")
        }
       })
    })
})

