//헤더
var header_btn_area = document.querySelector('.web-menu');
var header_btn = header_btn_area.querySelectorAll('.menu');
var body_menu = document.querySelectorAll('.body-wrap > div');
var widget_lang = document.querySelector('.widget-lang');
var widget_theme = document.querySelector('.widget-theme');
var theme_btn = widget_theme.querySelector('.switch-btn');
var widget_info = document.querySelector('.widget-info');
var side_right = document.querySelector('.app-body .side-right');


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
        widget_info.classList.remove('v-hidden')
        widget_info.classList.remove('opacity-0')
        side_right.classList.remove('short')
        widget_theme.classList.add('d-none')
    }
    else if(e.target.innerText == '제품 보기'){
        widget_info.classList.add('v-hidden')
        widget_info.classList.add('opacity-0')
        side_right.classList.add('short')
        widget_theme.classList.remove('d-none')
    }
    else if(e.target.innerText == '문의'){
        widget_info.classList.remove('v-hidden')
        widget_info.classList.remove('opacity-0')
        side_right.classList.remove('short')
        widget_theme.classList.add('d-none')
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

const PRO_LEN = product_name.length

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
    changeLink(currClass);
    //changeImage(currClass);
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


    if (currIndex + nextIndex === PRO_LEN) {
        product_cont.classList.add(classgroup[0])
        newActive(0)
        changeTxt(classgroup[0]);
        changeLink(classgroup[0]);
        //changeImage(classgroup[0]);
        return;
    }
    if (currIndex + nextIndex === -1) {
        product_cont.classList.add(classgroup[PRO_LEN - 1])
        newActive(PRO_LEN - 1)
        changeTxt(classgroup[PRO_LEN - 1]);
        changeLink(classgroup[PRO_LEN - 1]);
        //changeImage(classgroup[PRO_LEN - 1]);
        return;
    }
    product_cont.classList.add(classgroup[currIndex + nextIndex])
    newActive(currIndex + nextIndex)
    changeTxt(classgroup[currIndex + nextIndex]);
    changeLink(classgroup[currIndex + nextIndex]);
    //changeImage(classgroup[currIndex + nextIndex]);
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

/////////////////////////////////////////////////
//테마스위치 기능
theme_btn.addEventListener('click', function(){
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

///////////////////////////////////////////////
//내용 변환 기능
import productData from "./product.js"

function changeLink(productName){
    const product = productData[productName];
    product_img.parentElement.href = product.link
}

function changeTxt(productName){
    const product = productData[productName];
    product_txt.children[0].innerHTML = product.title
    product_txt.children[1].innerHTML = product.subTitle
    product_txt.children[2].innerHTML = product.desc
}

// function changeImage(productName){
//     const product = productData[productName];
//     if( product_img.className === 'img-white' ){
//         product_img.style.backgroundImage = "url(" + product.whiteImg + ")"
//     }
//     else{
//         product_img.style.backgroundImage = "url(" + product.darkImg + ")"
//     }
// }





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