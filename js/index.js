// import  productObject from"./product" 
// console.log(productObject);
//헤더
var header_btn_area = document.querySelector('.web-menu');
var header_btn = header_btn_area.querySelectorAll('.menu');
var body_menu = document.querySelectorAll('.body-wrap > div');
var widget_lang = document.querySelector('.widget-lang');
var widget_theme = document.querySelector('.widget-theme');
var widget_download = document.querySelector('.widget-download');


/////////////////////////////////////////////////
//헤더 메뉴
header_btn_area.addEventListener('click',function(e){
    e.preventDefault();
    if (!e.target.tagName == 'A') return;

    for(let i=0; i < header_btn.length; i++){
        header_btn[i].classList.remove('active');
        body_menu[i].classList.remove('active');
    }
    
    var currIndex = Array.from(header_btn).indexOf(e.target);
    e.target.classList.add('active');
    body_menu[currIndex].classList.add('active');

    if(e.target.innerText == '홈'){
        widget_download.classList.remove('v-hidden')
        widget_download.classList.remove('opacity-0')
    }
    else if(e.target.innerText == '제품 보기'){
        widget_download.classList.add('v-hidden')
        widget_download.classList.add('opacity-0')
    }
    else if(e.target.innerText == '문의'){
        widget_download.classList.remove('v-hidden')
        widget_download.classList.remove('opacity-0')
    }
})

/////////////////////////////////////////////////
//하단 버튼 기능
var product_btn_area = document.querySelector('#product .tab-list');
var product_btn = product_btn_area.querySelectorAll('li');
var product_cont = document.querySelector('#product .tab-cont');
var product_name = document.querySelectorAll('#product .tab-list span');
var product_img = product_cont.querySelector('img');
var product_txt = product_cont.querySelector('.txt-wrap');



product_btn_area.addEventListener('click', function(e){
    let currClass = e.target.parentNode.className;
    
    if(e.target.nodeName !== 'A') return;
    if(e.target.parentNode.classList[1] === 'active') return;

    //리셋
    for(let i=0; i<product_btn.length; i++){
        product_btn[i].classList.remove('active')
    }
    product_cont.className = 'tab-cont';

    e.target.parentNode.classList.add('active')
    product_cont.classList.add(currClass);
    changeTxt(currClass);
})

/////////////////////////////////////////////////
//좌우 버튼 기능
//정렬
function contArray(nextIndex) {
    let itemlist = Array.from(product_name);
    var arr = new Array();
    for(let i=0; i<product_name.length; i++){
        arr.push(itemlist[i].innerHTML);
    }
    let classgroup = Array.from(arr);
    let currIndex = classgroup.indexOf(product_cont.classList[1])

    product_cont.className = 'tab-cont';

    if (currIndex + nextIndex === product_name.length) {
        product_cont.classList.add(classgroup[0])
        newActive(0)
        changeTxt(classgroup[0]);
        return;
    }
    if (currIndex + nextIndex === -1) {
        product_cont.classList.add(classgroup[4])
        newActive(classgroup[4])
        return;
    }
    product_cont.classList.add(classgroup[currIndex + nextIndex])
    newActive(currIndex + nextIndex)
    changeTxt(classgroup[currIndex + nextIndex]);
}
const newActive = (index) => {
    for(let i=0; i<product_btn.length; i++){
        product_btn[i].classList.remove('active')
    }
    product_btn[index].classList.add('active');
};

var btn_prev = product_cont.querySelector('#product-prev');
var btn_next = product_cont.querySelector('#product-next');
btn_next.addEventListener('click',function(){
    contArray(1);
})
btn_prev.addEventListener('click',function(){
    contArray(-1);
})


///////////////////////////////////////////////
//내용 변환 기능
const productObject = {
    rms: {
        title: 'RMS',
        subTitle: 'RTLS Managing System',
        desc: 'WMS 솔루션의 새로운 모니터링 솔루션은<br>정해진 메뉴에만 구분하지 않고 자유롭게 커스텀하는 메뉴들을 구성합니다.<br>고객 요구사항에 맞는 맞춤형 대시보드 RMS를 소개합니다.'
    },
    at: {
        title: 'AT',
        subTitle: 'Asset Tracking',
        desc: '위치기반 IoT 자산 솔루션은 소중한 모든것을 추적합니다.<br>의료기기의 위치뿐만 아니라 각종 상태와 정보까지<br>확인 가능한 모든걸 연결 분석하는 자산 추적 솔루션입니다.'
    },
    am: {
        title: 'AM',
        subTitle: 'Asset Management',
        desc: '고객의 기기,장비,물류 등의 위치와 상태를 시각화,통계화합니다.<br>특정 자산의 조치와 자산 운용 및 플로우 현상을 위해 관리자가 취해야 할 행동반경을 제시합니다.<br>효율적 활용, 안정성 제고, 운영/관리 효율화를 위한 자산관리 시스템 솔루션입니다.'
    },
    ws: {
        title: 'WS',
        subTitle: 'Worker Safety',
        desc: '사고의 예방과 조치를 위해 가장 중요한 것은 작업자의 실시간 위치 파악입니다.<br>작업자 안전 관리솔루션은 작업자의 위치 및 생체데이터를 모니터링 하여,<br>안전 관리자에게 시설 현황 파악 및 구역별 인원 관리를 돕습니다.'
    },
    sh: {
        title: 'SH',
        subTitle: 'Smart Hospital',
        desc: '환자가 편안한 병원, 환자가 안전한 병원<br>치료 공백이 없는 병원, 의료진이 편리한 병원<br>IoMT 스마트 병원 솔루션이 만들어 갑니다.'
    }
}

function changeTxt(productName){
    const product = productObject[productName];
    product_txt.children[0].innerHTML = product.title
    product_txt.children[1].innerHTML = product.subTitle
    product_txt.children[2].innerHTML = product.desc
}


/////////////////////////////////////////////////
//테마스위치 기능
widget_theme.addEventListener('click', function(){
    widget_theme.classList.toggle('active')
    if(product_img.classList.contains('img-dark')){
        product_img.classList.add('img-white');
        product_img.classList.remove('img-dark');
    }
    else if(product_img.classList.contains('img-white')){
        product_img.classList.remove('img-white');
        product_img.classList.add('img-dark');
    }
})


/////////////////////////////////////////////////
//팝업
var popup = document.querySelector('.app-popup');
var address_open_btn = document.querySelector('#btn-address-open');
var address_close_btn = document.querySelector('#popup-address .popup-close-btn');

address_open_btn.addEventListener('click', function(){
    popup.classList.add('active')
})
address_close_btn.addEventListener('click',function(){
    popup.classList.remove('active')
})