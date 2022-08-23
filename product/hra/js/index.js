// $('.btn-bestshot').click(function(){
//     $('.btn-bestshot').toggleClass('active');
// })

const best_btn = document.querySelectorAll('.btn-bestshot')

for(let i=0; i<best_btn.length; i++){
    best_btn[i].addEventListener('click',function(){
        if(best_btn[i].classList.contains('active')){
            best_btn[i].classList.remove('active')
        }
        else{
            for(let i=0; i<best_btn.length; i++){
                best_btn[i].classList.remove('active')
            }
            best_btn[i].classList.toggle('active')
        }
    })
}




const tab_first = document.querySelector('.menu-tab .menu-left a:first-child')
const tab_last = document.querySelector('.menu-tab .menu-left a:last-child')

const tab_cont_first = document.querySelector('.setting-wrap .menu-content')
const tab_cont_last = document.querySelector('.setting-wrap #list-content')


tab_last.addEventListener('click',function(){
    tab_last.classList.add('active')
    tab_first.classList.remove('active')
    tab_cont_first.classList.add('d-none')
    tab_cont_last.classList.remove('d-none')

})
tab_first.addEventListener('click',function(){
    tab_first.classList.add('active')
    tab_last.classList.remove('active')
    tab_cont_last.classList.add('d-none')
    tab_cont_first.classList.remove('d-none')
})


