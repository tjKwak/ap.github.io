
window.onload = function(){
    var body = document.querySelector('body')
    var check_btns = document.querySelectorAll('.pnt-checkbox')
    var radio_wrap = document.querySelectorAll('.pnt-radio');
    var radio_btns = document.querySelectorAll('.pnt-radio li');
    var input_error = document.querySelectorAll('.pnt-input--group.input-error');
    var select_btns = document.querySelectorAll('.select__btn');
    var select_boxs = document.querySelectorAll('.pnt-select--group');
    var select_list_btns = document.querySelectorAll('.pnt-select--group li');
    var table_btns = document.querySelectorAll('.table-clickable .tr')
    var icon_toggle = document.querySelectorAll('.icon-toggle-type');
    var disable_forms = document.querySelectorAll('#root .form-disable');

    //아이콘 토글 기능
    $('.icon-toggle').click(function(){
        if($('.icon-toggle').hasClass('icon-off')){
            $('.icon-toggle').removeClass('icon-off');
            $('.icon-toggle').addClass('icon-on');
        }
        else{
            $('.icon-toggle').removeClass('icon-on');
            $('.icon-toggle').addClass('icon-off');
        }
    })

    //모든 form-disable 에 disalbed 속성 추가
    for(let i=0; i<disable_forms.length; i++){
        if(disable_forms[i].classList.contains('form-disable')){
            disable_forms[i].disabled = true;
        }
        else{
            disable_forms[i].disabled = false;
        }
    }

    //체크박스 기능
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
    for(let i=0; i<input_error.length; i++){
        input_error[i].parentNode.classList.add('align-start');
    }

    
    //셀렉트박스 기능
    for(let i=0; i<select_btns.length; i++){
        select_btns[i].addEventListener('click',function(e){
            //1. 클릭 개체가 on이 있을경우 - on을 제거한다.
            if(e.target.parentNode.className === 'pnt-select--group on'){
                e.target.parentNode.classList.remove('active');
                return;
            }
            //2. 클릭 개체가 on이 없다면 - 전체 리셋후 클릭개체만 on을 추가한다.
            else{
                for(let i=0; i<select_boxs.length; i++){
                    select_boxs[i].classList.remove('active');
                }
                select_boxs[i].classList.toggle('active');
            }
        })

        //타겟영역을 제외하고 클릭했을 시 - on을 제거한다.
        body.addEventListener('click', function(e){
            var clickArea = e.target.className;
            var validArea = select_boxs[i].querySelectorAll('*')
            var validArea_list = Array.from(validArea).map(node => node.className);
            
            if(validArea_list.includes(clickArea) == false ){
                select_boxs[i].classList.remove('active');
                return;
            }
        })
    }
    for(let i=0; i<select_list_btns.length; i++){
        select_list_btns[i].addEventListener('click', function(e){
            for(let i=0; i<select_list_btns.length; i++){
                select_list_btns[i].classList.remove('active');
            }
            e.target.parentNode.classList.add('active');
        })
    }

    //테이블 클릭 기능
    for(let i=0; i<table_btns.length; i++){
        table_btns[i].addEventListener('click', function(e){
            for(let i=0; i<table_btns.length; i++){
                table_btns[i].className = 'tr';
            }
            e.target.parentNode.classList.add('active')
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
};


