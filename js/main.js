$(document).ready(function(){
    
    // 햄버거 버튼을 클릭하면 모바일 메뉴가 튀어나오게
    $('.m_btn').on('click',function(){
        $('.m_menu_wrap').animate({'left':0});
        $('.m_cover').fadeIn();
        // 밑 스크롤바 안나오게
        $('body,html').css({'overflow':'hidden'})
    })

    // 커버를 클릭하면 모바일 메뉴 다시 들어가게
    $('.m_cover').on('click',function(){
        $('.m_menu_wrap').animate({'left':'-100%'});
        $('.m_cover').fadeOut();
        // 스크롤바 다시 나오게
        $('body,html').css({'overflow':'auto'})
    })

    // 모바일 2차메뉴 숨기기
    $('.m_gnb>li>.m_depth2').hide()
    // 모바일 메뉴 1차 메뉴 클릭하면 2단메뉴 나오게하기(아코디언)
    $('.m_menu_wrap .m_gnb>li>a').on('click',function(){
        $(this).next().slideToggle().parent().siblings().find('.m_depth2').slideUp();
    })


    $('.slider').slick({
    autoplay:true,
    dots:true
    });

    
    // 2차메뉴 보이기
    $('.gnb>li>.depth2').hide()

    $('.gnb>li').on('mouseenter',function(){
        $(this).find('.depth2').fadeIn(200)
    })
    $('.gnb>li').on('mouseleave',function(){
        $(this).find('.depth2').fadeOut(300)
    })


    // cover 숨기기
    $('.cover').hide()
    // collection img hover 시
    // 어두운 이미지를 보이기
    $('.collection div a').on('mouseenter',function(){
        $(this).stop().find('.cover').fadeIn()

    })
    $('.collection div a').on('mouseleave',function(){
        $(this).stop().find('.cover').fadeOut()

    })

    // 8칸짜리 div
    $('.list .sns li a').on('mouseenter',function(){
        $(this).stop().find('.cover').fadeIn()

    })
    $('.list .sns li a').on('mouseleave',function(){
        $(this).stop().find('.cover').fadeOut()

    })

    // family site 보이고 숨기기
    $('.btn_f').on('click',function(){
        $('.family .list').slideToggle();
    })

    // 창의 크기를 조절했을때 이벤트 발생

    $(window).on('resize',function(){
        // 현재 창의 크기가 얼마인지 알기
        let num = $(this).width()
        console.log(num)
        // 창의 가로 사이즈가 767보다 작거나 같으면
        // 모바일이미지로 교체
        if(num<=767){
            // 슬라이드 좌우 버튼 숨기기
            $('.slick-prev,.slick-next').hide()
            // 모바일이미지로 교체
            $('main .slider .visual1 img').attr('src','./images/m_visual2_a.jpg')
            $('main .slider .visual2 img').attr('src','./images/m_visual2_b.jpg')
            // collection 섹션에서 이미지 교체
            $('main .collection .collect3 img').attr('src','./images/m_product.jpg')

            }else{
            // 슬라이드 좌우 버튼 표시(pc)
            $('.slick-prev,.slick-next').show()
            $('main .slider .visual1 img').attr('src','./images/visual_a.jpg')
            $('main .slider .visual2 img').attr('src','./images/visual_b.jpg')
            $('main .collection .collect3 img').attr('src','./original/product_ot.jpg')
            $('main .collection .collect3 .cover img').attr('src','./original/product_ov.jpg')
            }
        })  
        // 해당페이지가 로드되자마자 창의 사이즈를 확인하고
        // 반응형발생(모바일과 pc를 판단하기)
        let num = $(window).width()
        if(num<=767){
            // 슬라이드 좌우 버튼 숨기기
            $('.slick-prev,.slick-next').hide()
            // 모바일이미지로 교체
            $('main .slider .visual1 img').attr('src','./images/m_visual2_a.jpg')
            $('main .slider .visual2 img').attr('src','./images/m_visual2_b.jpg')
            // collection 섹션에서 이미지 교체
            $('main .collection .collect3 img').attr('src','./images/m_product.jpg')
            }else{
            // 슬라이드 좌우 버튼 표시(pc)
            $('.slick-prev,.slick-next').show()
            $('main .slider .visual1 img').attr('src','./images/visual_a.jpg')
            $('main .slider .visual2 img').attr('src','./images/visual_b.jpg')
            $('main .collection .collect3 img').attr('src','./original/product_ot.jpg')
            $('main .collection .collect3 .cover img').attr('src','./original/product_ov.jpg')
        }



});







