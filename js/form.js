
window.onload = function(){
    var body = document.querySelector('body')


    //체크박스 기능
    var check_btns = document.querySelectorAll('.pnt-checkbox')
    for(let i=0; i<check_btns.length; i++){
        //체크되어있는 element엔 check-checked 란 클래스명을 붙인다.
        if(check_btns[i].children[0].checked){
            check_btns[i].classList.add('check-checked')
        }
        else{
            check_btns[i].classList.remove('check-checked')
        }
        //disalbe 되어있는 element엔 check-disabled
        if(check_btns[i].children[0].disabled){
            check_btns[i].classList.add('check-disabled')
        }
        else{
            check_btns[i].classList.remove('check-disabled')
        }
        //클릭하면 check-checked 란 클래스명을 붙인다.
        check_btns[i].addEventListener('click',function(e){
            if(check_btns[i].children[0].checked){
                check_btns[i].classList.add('check-checked')
            }
            else{
                check_btns[i].classList.remove('check-checked')
            }
            return;
        })
    }

    //라디오 체크 기능
    var radio_wrap = document.querySelectorAll('.pnt-radio');
    var radio_btns = document.querySelectorAll('.pnt-radio li');
    for(let i=0; i<radio_wrap.length; i++){
        radio_wrap[i].addEventListener('click',function(e){
            if(e.target.parentNode.nodeName !== 'LI'){
                return;
            }
            for(let i=0; i<radio_btns.length; i++){
                radio_btns[i].className = '';
            }
            e.target.parentNode.className = 'checked';
            return;
        })
    }

    //인풋 에러 기능
    var input_error = document.querySelectorAll('.pnt-input--group.input-error');
    for(let i=0; i<input_error.length; i++){
        input_error[i].parentNode.classList.add('flx-top');
    }

    
    //셀렉트박스 기능
    var select_btns = document.querySelectorAll('.select__btn');
    var select_boxs = document.querySelectorAll('.pnt-select--group');
    var select_list_btns = document.querySelectorAll('.pnt-select--group li');
    for(let i=0; i<select_btns.length; i++){
        select_btns[i].addEventListener('click',function(e){
            //1. 클릭 개체가 on이 있을경우 - on을 제거한다.
            if(e.target.parentNode.className === 'pnt-select--group on'){
                e.target.parentNode.classList.remove('on');
                return;
            }
            //2. 클릭 개체가 on이 없다면 - 전체 리셋후 클릭개체만 on을 추가한다.
            else{
                for(let i=0; i<select_boxs.length; i++){
                    select_boxs[i].classList.remove('on');
                }
                select_boxs[i].classList.toggle('on');
            }
        })

        //타겟영역을 제외하고 클릭했을 시 - on을 제거한다.
        body.addEventListener('click', function(e){
            var clickArea = e.target.className;
            var validArea = select_boxs[i].querySelectorAll('*')
            var validArea_list = Array.from(validArea).map(node => node.className);
            
            if(validArea_list.includes(clickArea) == false ){
                select_boxs[i].classList.remove('on');
                return;
            }
        })
    }
    for(let i=0; i<select_list_btns.length; i++){
        select_list_btns[i].addEventListener('click', function(e){
            for(let i=0; i<select_list_btns.length; i++){
                select_list_btns[i].classList.remove('on');
            }
            e.target.parentNode.classList.add('on');
        })
    }


    //테이블 클릭 기능
    var table_btns = document.querySelectorAll('.table-clickable .tr')
    for(let i=0; i<table_btns.length; i++){
        table_btns[i].addEventListener('click', function(e){
            for(let i=0; i<table_btns.length; i++){
                table_btns[i].className = 'tr';
            }
            e.target.parentNode.classList.add('active')
        })  
    }
    

    //아이콘 클릭시 변경 기능
    var icon_toggle = document.querySelectorAll('.icon-toggle-type');
    for(let i=0; i<icon_toggle.length; i++){
        icon_toggle[i].addEventListener('click',function(){
            icon_toggle[i].classList.toggle('off');
        })
    }

    //헤더 앱 기능
    var headerApp_btns = document.querySelectorAll('.header-app button');
    var headerApp_boxs = document.querySelectorAll('.header-app');
    for(let i=0; i<headerApp_btns.length; i++){
        headerApp_btns[i].addEventListener('click',function(e){
            //1. 클릭 개체가 on이 있을경우 - on을 제거한다.
            if(e.target.parentNode.className === 'header-app on'){
                e.target.parentNode.classList.remove('on');
                return;
            }
            //2. 클릭 개체가 on이 없다면 - 전체 리셋후 클릭개체만 on을 추가한다.
            else{
                for(let i=0; i<headerApp_boxs.length; i++){
                    headerApp_boxs[i].classList.remove('on');
                }
                headerApp_boxs[i].classList.toggle('on');
            }
            //타겟영역을 제외하고 클릭했을 시 - on을 제거한다.
            body.addEventListener('click', function(e){
                var clickArea = e.target.className;
                var validArea = headerApp_boxs[i].querySelectorAll('*')
                var validArea_list = Array.from(validArea).map(node => node.className);
                
                if(validArea_list.includes(clickArea) == false ){
                    headerApp_boxs[i].classList.remove('on');
                    return;
                }
            })
        })
    }


    //테마컬러 기능
    var theme_container = document.querySelector('.app-container');
    var theme_sidebar = document.querySelector('.nav-box__main');
    document.querySelector('.theme-btn-1').addEventListener('click',function(){
        theme_container.className = 'app-container'
        theme_container.classList.add('app-theme-pnt-light')
        theme_sidebar.classList.remove('nav-box__img-bg')
    })
    document.querySelector('.theme-btn-2').addEventListener('click',function(){
        theme_container.className = 'app-container'
        theme_container.classList.add('app-theme-pnt-dark')
        theme_sidebar.classList.remove('nav-box__img-bg')
    })
    document.querySelector('.theme-btn-3').addEventListener('click',function(){
        theme_container.className = 'app-container'
        theme_container.classList.add('app-theme-pnt-navy')
        theme_sidebar.classList.add('nav-box__img-bg')
    })
    document.querySelector('.theme-btn-4').addEventListener('click',function(){
        theme_container.className = 'app-container'
        theme_container.classList.add('app-theme-pnt-flower')
        theme_sidebar.classList.add('nav-box__img-bg')
    })
    document.querySelector('.theme-btn-5').addEventListener('click',function(){
        theme_container.className = 'app-container'
        theme_container.classList.add('app-theme-pnt-plant')
        theme_sidebar.classList.add('nav-box__img-bg')
    })


    //네비게이션 기능
    //사이드바 접고펴기
    var nav_btn = document.querySelector('.header__pane > div > .pnt-btn');
    var nav_box = document.querySelector('.app-container');

    nav_btn.addEventListener('click',function(){
        nav_box.classList.toggle('on');
    })
    //네비게이션 기능
    //main <-> setting 체인지
    var nav_change_btn = document.querySelectorAll('.nav-btn__change-mode')
    for(let i=0; i<nav_change_btn.length; i++){
        nav_change_btn[i].addEventListener('click',function(){

            var nav_main = document.querySelector('.nav-box__main');
            var nav_setting = document.querySelector('.nav-box__setting');
            nav_main.classList.toggle('d-none');
            nav_setting.classList.toggle('d-none');
        })
    }

    //모달
    var modalWrap = document.querySelector('.modal-test-class')
    var modalbox = modalWrap.querySelector('.modal');
    var modalbg = modalWrap.querySelector('.modal-backdrop');
    var modalOpenBtn = document.querySelector('.btn-open-modal');
    var modalCloseBtn = document.querySelector('.btn-close-modal');

    modalOpenBtn.addEventListener('click', function(){
        modalWrap.classList.remove('d-none')
        modalbox.classList.add('show')
        modalbg.classList.add('show')
    })
    modalCloseBtn.addEventListener('click', function(){
        modalWrap.classList.add('d-none')
        modalbox.classList.remove('show')
        modalbg.classList.remove('show')
    })

    //필터박스
    //필터접기 버튼
    var filter_fold_btn = document.querySelector('.filter-open');
    var filter_options_box = document.querySelector('.filter-list');
    filter_fold_btn.addEventListener('click',function(){
        filter_options_box.classList.toggle('folded');
    })

    //모바일일땐 필터접기 버튼 생성
    //옵션이 2줄일때 필터접기 버튼 생성 (미정이라 주석처리함)
    var timer = null;
    window.addEventListener( 'resize', function(){
        clearTimeout( timer );
        timer = setTimeout( function(){
            var width = document.body.clientWidth;
            if(width <= 745){
                filter_options_box.classList.add('folded');
            }
            // else if(width > 745 && filter_options_box.scrollHeight > 50){
            //     filter_fold_btn.classList.remove('d-none');
            //     filter_options_box.classList.add('d-none');
            //     console.log('모바일아님 & 2줄임 - 접기 나타나야함')
            // }
            else{
                filter_options_box.classList.remove('folded');
            }
        }, 100 );
    }, false );

    


    //card-overwrap 오픈
    // var card_info_btns = document.querySelectorAll('.card-overwrap-btn');
    // var card_info_close_btns = document.querySelectorAll('.card-overwrap-close-btn');
    // var card_info_boxs = document.querySelectorAll('.card-overlay'); 

    // for(let i=0; i<card_info_btns.length; i++){
    //     card_info_btns[i].addEventListener('click',function(){
    //         card_info_boxs[i].classList.toggle('on');
    //     })
    // }
    // for(let i=0; i<card_info_close_btns.length; i++){
    //     card_info_close_btns[i].addEventListener('click',function(){
    //         card_info_boxs[i].classList.toggle('on');
    //     })
    // }


    //필터중에 셀렉트박스 두개 쓰는 필터
    var filter_date_btns = document.querySelectorAll('.option-list__btn')
    var filter_date_boxs = document.querySelectorAll('.select__option-list')
    var filter_date_inputs = document.querySelectorAll('.option-list__btn input[type=checkbox]')
    for(let i=0; i<filter_date_btns.length; i++){
        
        filter_date_btns[i].addEventListener('click',function(e){
            //1. 클릭 개체가 checked이 있을경우 - 해당 박스를 접는다
            if(e.target.parentNode.className === 'select__option-list checked'){
                //filter_date_hidden_boxs[i].classList.toggle('d-none');
                return;
            }
            //2. 클릭 개체가 checked이 없다면 - 전체 리셋후 클릭개체만 checked을 추가하고 input을 check 한다.
            else{
                for(let i=0; i<filter_date_boxs.length; i++){
                    filter_date_boxs[i].classList.remove('checked');
                    //e.target.parentNode.classList.add('checked');
                    filter_date_inputs[i].checked = false;
                }
                filter_date_boxs[i].classList.toggle('checked');
                filter_date_inputs[i].checked = true;
            }
        })
    }

    //layout - 자동 높이 맞추기
    var hFix = document.querySelector('.h-fix');
    var h100fix = document.querySelectorAll('.h-100-fix');

    for(let i=0; i<h100fix.length; i++){
        h100fix[i].style.height = "calc(100% - " + hFix.scrollHeight + "px - 1rem )";
    }

    

};


