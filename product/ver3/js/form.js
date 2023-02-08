
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
        input_error[i].parentNode.classList.add('align-start');
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
    var table_btns = document.querySelectorAll('.pnt-table .tr')
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

    //유저박스 기능
    var userBox_btn = document.querySelector('.user-box .user-btn');
    var userBox_box = document.querySelector('.user-box .user-options');

    userBox_btn.addEventListener('click', function(){
        userBox_box.classList.toggle('d-none');
    })

    //테마컬러 기능
    var theme_container = document.querySelector('.app-container');
    var theme_btn = document.querySelector('.profile-setting .setting-item:last-child');

    theme_btn.addEventListener('click',function(){
        if(theme_container.classList.contains('app-theme-pnt-navy')){
            theme_container.classList.remove('app-theme-pnt-navy')
            theme_container.classList.add('app-theme-pnt-dark')
        }
        else if(theme_container.classList.contains('app-theme-pnt-dark')){
            theme_container.classList.remove('app-theme-pnt-dark')
            theme_container.classList.add('app-theme-pnt-navy')
        }
    })
    //테마컬러 기능
    // var theme_container = document.querySelector('.app-container');
    // var theme_sidebar = document.querySelector('.nav-box__main');
    // document.querySelector('.theme-btn-1').addEventListener('click',function(){
    //     theme_container.className = 'app-container'
    //     theme_container.classList.add('app-theme-pnt-light')
    //     theme_sidebar.classList.remove('nav-box__img-bg')
    // })
    // document.querySelector('.theme-btn-2').addEventListener('click',function(){
    //     theme_container.className = 'app-container'
    //     theme_container.classList.add('app-theme-pnt-dark')
    //     theme_sidebar.classList.remove('nav-box__img-bg')
    // })
    // document.querySelector('.theme-btn-3').addEventListener('click',function(){
    //     theme_container.className = 'app-container'
    //     theme_container.classList.add('app-theme-pnt-navy')
    //     theme_sidebar.classList.add('nav-box__img-bg')
    // })
    // document.querySelector('.theme-btn-4').addEventListener('click',function(){
    //     theme_container.className = 'app-container'
    //     theme_container.classList.add('app-theme-pnt-flower')
    //     theme_sidebar.classList.add('nav-box__img-bg')
    // })
    // document.querySelector('.theme-btn-5').addEventListener('click',function(){
    //     theme_container.className = 'app-container'
    //     theme_container.classList.add('app-theme-pnt-plant')
    //     theme_sidebar.classList.add('nav-box__img-bg')
    // })

    //전체화면 기능
    var full_btn = document.querySelector('.app-header-right .fullscreen-box button');
    full_btn.addEventListener('click',function(){
        theme_container.classList.add('full-screen-viewer')
        fullScreenmsg();
    })
    document.addEventListener('keydown', evt => {
        if (evt.key === 'Escape') {
            theme_container.classList.remove('full-screen-viewer')
            
        }
    });

    let removeMsg;
    let deleteMsg;
    function fullScreenmsg() {
        let msgBox = document.createElement("div");
        msgBox.setAttribute('id','fullScreenMsg')
        document.querySelector('.app-main').appendChild(msgBox);
        removeMsg = setTimeout(function () {
            document.getElementById("fullScreenMsg").classList.remove("reveal")
        }, 1500)
        deleteMsg = setTimeout(function () {
            document.querySelector('.app-main').removeChild(msgBox);
        }, 3000)
        msgBox.classList.add("reveal");
        msgBox.innerText = '종료하시려면 ESC를 눌러주세요';
    }


    //네비게이션 기능
    //사이드바 접고펴기
    var nav_btn = document.querySelector('.header__pane > div > button');
    var hamburger_icon = nav_btn.querySelector(' .material-icons-round');
    var app_container = document.querySelector('.app-container');
    var nav_area = document.querySelector('.app-sidebar');
    
    nav_btn.addEventListener('click',function(){
        app_container.classList.toggle('sidebar-web-closed');
        hamburger_icon.innerText = 'menu';
        if(app_container.classList.contains('sidebar-web-closed')){
            hamburger_icon.innerText = 'close';
        }
        //마우스호버 기능
        // if(app_container.classList.contains('sidebar-web-closed')){
        //     nav_area.addEventListener('mouseover',function(){
        //         app_container.classList.remove('sidebar-web-closed');
        //     })
        //     nav_area.addEventListener('mouseout',function(){
        //         app_container.classList.add('sidebar-web-closed');
        //     })
        //     return;
        // }
        // else{
        //     return;
        // }
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
    //네비게이션 기능
    //대메뉴 접고 펴기
    var nav_menu_set = document.querySelectorAll('.vertical-nav-menu > .metismenu-container > .metismenu-item')
    var nav_menu_box = document.querySelectorAll('.metismenu-link + .metismenu-container')
    
    for(let i=0; i<nav_menu_set.length; i++){
        nav_menu_set[i].addEventListener('click',function(e){
            //클릭대상이 이미 켜져있으면 OFF 한다.
            if(e.target.parentNode.parentNode.children[1].classList.contains('visible')){
                e.target.parentNode.parentNode.children[1].classList.remove('visible')
                e.target.parentNode.parentNode.classList.remove('active')
                return;
            }
            else{
                //모든 대상을 off 시키고
                for(let i=0; i<nav_menu_box.length; i++){
                    nav_menu_box[i].classList.remove('visible')
                }
                for(let i=0; i<nav_menu_set.length; i++){
                    nav_menu_set[i].classList.remove('active')
                }
                //클릭 대상에 active를 부과한다.
                e.target.parentNode.parentNode.classList.add('active');
                nav_menu_set[i].children[1].classList.add('visible');
            }
        })
    }
    //대시보드 편집기능
    var dashboard_setting_btn = document.querySelector('.pnt-sidebar-bottom a');
    dashboard_setting_btn.addEventListener('click',function(){
        app_container.classList.toggle('dashboard-edit-mode')
        document.querySelector('.dashboard-edit-title').classList.toggle('d-none')
    })


    //클래스 복사 기능
    var tag_items = document.querySelectorAll('.tag-item p')
    for(let i=0; i<tag_items.length; i++){
        tag_items[i].addEventListener('click',function(e){
            let text = e.target.innerText;
            navigator.clipboard.writeText(`${text}`);
            toast(`${text}이 복사되었습니다.`);
        })
    }

    let removeToast;
    function toast(string) {
        const toast = document.getElementById("toast");
        toast.classList.contains("reveal") ?
            (clearTimeout(removeToast), removeToast = setTimeout(function () {
                document.getElementById("toast").classList.remove("reveal")
            }, 1000)) :
            removeToast = setTimeout(function () {
                document.getElementById("toast").classList.remove("reveal")
            }, 1000)
        toast.classList.add("reveal"),
            toast.innerText = string
    }
    // var tag_items = document.querySelectorAll('.tag-set > .tag-content > div')
    // for(let i=0; i<tag_items.length; i++){
    //     tag_items[i].addEventListener('click',function(e){
    //         let text = e.target.children[1].innerText;
    //         navigator.clipboard.writeText(`${text}`);
    //         toast(`${text}이 복사되었습니다.`);
    //     })
    // }

    // let removeToast;
    // function toast(string) {
    //     const toast = document.getElementById("toast");
    //     toast.classList.contains("reveal") ?
    //         (clearTimeout(removeToast), removeToast = setTimeout(function () {
    //             document.getElementById("toast").classList.remove("reveal")
    //         }, 1000)) :
    //         removeToast = setTimeout(function () {
    //             document.getElementById("toast").classList.remove("reveal")
    //         }, 1000)
    //     toast.classList.add("reveal"),
    //         toast.innerText = string
    // }


    //모바일시 헤더 기능
    var mobileHeaderNav_btn = document.querySelector('.app-header .app-header__mobile-menu button');
    var mobileHeaderMenu_btn = document.querySelector('.app-header .app-header__menu button');
    var mobileMenu_box = document.querySelector('.app-header__content');

    mobileHeaderNav_btn.addEventListener('click',function(){
        app_container.classList.toggle('sidebar-mobile-open');
    })
    mobileHeaderMenu_btn.addEventListener('click',function(){
        mobileMenu_box.classList.toggle('header-mobile-open');
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


    //layout - 자동 높이 맞추기
    var hFix = document.querySelector('.h-fix');
    var h100fix = document.querySelectorAll('.h-100-fix');

    for(let i=0; i<h100fix.length; i++){
        h100fix[i].style.height = "calc(100% - " + hFix.scrollHeight + "px - 1rem )";
    }

};


