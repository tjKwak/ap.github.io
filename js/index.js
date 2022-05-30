//헤더
var header_btn_area = document.querySelector('.app-container .web-menu');
var header_btn = header_btn_area.querySelectorAll('.menu');
var header_box = header_btn_area.querySelectorAll('.app-header__menu');

header_btn_area.addEventListener('click',function(e){
    
    e.preventDefault();
    if (!e.target.tagName == 'A') return;

    if(e.target.className === 'menu active'){
        for(let i=0; i < header_btn.length; i++){
            header_btn[i].classList.remove('active');
            header_box[i].classList.remove('active');
        }
    }
    else{
        for(let i=0; i < header_btn.length; i++){
            header_btn[i].classList.remove('active');
            header_box[i].classList.remove('active');
        }
        
        var currIndex = Array.from(header_btn).indexOf(e.target);
        e.target.classList.add('active');
        header_box[currIndex].classList.add('active');
    }
})

//모든 form-disable 에 disalbed 속성 추가
var disable_forms = document.querySelectorAll('#root .form-disable');
        
for(let i=0; i<disable_forms.length; i++){
    disable_forms[i].disabled = true;
}

//테마변경 기능
$('.theme-light').click(function(){
    $('#root .app-container').attr('class','app-container');
    $('#root .app-container').addClass('app-theme-pnt-light');
})
$('.theme-dark').click(function(){
    $('#root .app-container').attr('class','app-container');
    $('#root .app-container').addClass('app-theme-pnt-dark');
})

//모바일 헤더 - 메뉴바 활성화하면 유저버튼 히든
var m_menu_btn = document.querySelector('.mobile-sideBar');
$('.mobile-menu button').click(function(){
    if ($('.mobile-sideBar').hasClass('active')){
        $('.user-box').removeClass('d-none')
    }
    else{
        $('.user-box').addClass('d-none')
    }
})


//헤더 - 시간단위 변경기능
var time_btn = document.querySelector('.time-box a');
var time_txt = time_btn.querySelector('p');
time_btn.addEventListener('click',function(e){
    e.preventDefault();
    if (!e.target.tagName == 'A') return;

    time_txt.innerHTML = (time_txt.innerHTML === "<b>AM</b>03:30:01") ?
    "15:30:01" : "<b>AM</b>03:30:01"
})

//헤더 - 유저박스 드롭다운기능
$('.user-box .user-btn').click(function(){
    $('.user-box .user-btn').toggleClass('active');
    $('.user-box .user-dropbox').toggleClass('active');
})


/////////////////////////////////////////
//모바일 사이드바 오픈
var mobile_side_btn = document.querySelector('.mobile-menu button');
var mobile_side_box = document.querySelector('.mobile-sideBar');

mobile_side_btn.addEventListener('click',function(){
    mobile_side_box.classList.toggle('active');
    var btn_icon = mobile_side_btn.childNodes[0];
    btn_icon.className = ( btn_icon.className === 'icon-hamburger') ?
    'icon-close' : 'icon-hamburger'
})

//모바일 사이드바 메뉴 오픈
var m_sidebar_btn_area = document.querySelector('.mobile-sideBar .m_app-sideBar');
var m_sidebar_btns = m_sidebar_btn_area.querySelectorAll('a');
var m_sidebar_boxs = document.querySelectorAll('.mobile-sideBar .app-optionBar__wrap');
var m_sidebar_box_area = document.querySelector('.mobile-sideBar .m_app-optionBar');

m_sidebar_btn_area.addEventListener('click',function(e){
    e.preventDefault();
    if (!e.target.tagName == 'A') return;


    //사이드바 완전 접기 기능
    if(e.target.className === 'active'){
        m_sidebar_box_area.classList.add('d-none');
        e.target.className = '';
    }
    else{
        m_sidebar_box_area.classList.remove('d-none');

        //사이드바 다른 메뉴 오픈 기능
        for(let i=0; i < m_sidebar_boxs.length; i++){
            m_sidebar_btns[i].classList.remove('active');
            m_sidebar_boxs[i].classList.remove('active');
        }
        var currIndex = Array.from(m_sidebar_btns).indexOf(e.target);
        e.target.classList.add('active');
        m_sidebar_boxs[currIndex].classList.add('active');
    }
})

/////////////////////////////////
//사이드바
var sidebar_btn_area = document.querySelector('.app-main__wrap .icon-menu-list');
var sidebar_btns = sidebar_btn_area.querySelectorAll('a');
var sidebar_boxs = document.querySelectorAll('.app-main__wrap .app-optionBar__wrap');
var sidebar_box_area = document.querySelector('.app-main__wrap .app-optionBar');

sidebar_btn_area.addEventListener('click',function(e){
    e.preventDefault();
    if (!e.target.tagName == 'A') return;
    //사이드바 완전 접기 기능
    if(e.target.className === 'active'){
        sidebar_box_area.classList.add('folded');
        e.target.className = '';
    }
    else{
        sidebar_box_area.classList.remove('folded');

        //사이드바 다른 메뉴 오픈 기능
        for(let i=0; i < sidebar_boxs.length; i++){
            sidebar_btns[i].classList.remove('active');
            sidebar_boxs[i].classList.remove('active');
        }
        var currIndex = Array.from(sidebar_btns).indexOf(e.target);
        e.target.classList.add('active');
        sidebar_boxs[currIndex].classList.add('active');
    }
})

//드롭버튼 기능
$('.btn-dropdown').click(function(){
    $('.btn-dropbox').toggleClass('active')
})

//시시티비 뷰모드 변경 기능
var viewMode_btn_area = document.querySelectorAll('.view-mode-select');
var viewMode_btns = document.querySelectorAll('.view-mode-select a');
var viewMode = document.querySelectorAll('.cctv-list');

for(let i=0; i < viewMode_btn_area.length; i++){
    viewMode_btn_area[i].addEventListener('click',function(e){
        e.preventDefault();
        if (!e.target.tagName == 'A') return;
        
        //사이드바 다른 메뉴 오픈 기능
        for(let i=0; i < viewMode_btns.length; i++){
            viewMode_btns[i].classList.remove('active');
        }
        e.target.classList.add('active');
        var currIndex = Array.from(viewMode_btns).indexOf(e.target);
        if(currIndex %4 == 0){
            //console.log('1. 큰 카드로 보기')
            $('.cctv-list').attr('class','cctv-list view__big-card');
        }else if(currIndex %2 == 0){
            //console.log('3. 작은카드로 보기')
            $('.cctv-list').attr('class','cctv-list view__small-card');
        }
        else {
            if(currIndex %4 == 1){
                //console.log('2. 중간 카드로 보기')
                $('.cctv-list').attr('class','cctv-list view__middle-card');
            }else{
                //console.log('4. 리스트로 보기')
                $('.cctv-list').attr('class','cctv-list view__list-card');
            }
        }
    })
}

//알람박스 끄고 키는 기능
var notice_box = document.querySelector('.notice-box');
var notice_close_btn = notice_box.querySelector('a');
var notice_open_btn = document.querySelector('.info-menu-list a');

notice_close_btn.addEventListener('click',function(){
    notice_box.classList.add('disappear')
    notice_box.classList.remove('appear')
})
notice_open_btn.addEventListener('click',function(){
    notice_box.classList.remove('disappear')
    notice_box.classList.add('appear')
})


//프레임 조절 바
$('.app-footer .btn-frame-fold').click(function(){
    $('.btn-frame-fold').children().attr('class') == 'icon-up icon-small' ?
    $('.btn-frame-fold').children().attr('class','icon-down icon-small')
    : $('.btn-frame-fold').children().attr('class','icon-up icon-small')
    $('.app-container').toggleClass('frame-active');
})

//전체화면 기능
$('.btn-fullscreen').click(function(){
    $('.app-container').addClass('full-screen-active');
    $('#root .fullsc-box').removeClass('d-none');
})
$('.fullsc-box a').click(function(){
    $('.app-container').removeClass('full-screen-active');
    $('#root .fullsc-box').addClass('d-none');
})

//cctv 즐겨찾기 버튼
$('.btn-favorite').click(function(){
    $('.btn-favorite').children().toggleClass('opacity-03');
})


/////////////////////////////////////////
//팝업
$('.btn-url-input').click(function(){
    $('#newCamera .v-hidden').removeClass('v-hidden');
    $('#newCamera .sub-content').removeClass('opacity-05');
    $('#newCamera .form-disable').removeClass('form-disable');
})
$('#newVideo .pnt-checkbox input').click(function(){
    if($('#newVideo .pnt-checkbox input').prop('checked') == true){
        $('#newVideo .form-disable').removeClass('form-disable');
    }
    else return;
})
