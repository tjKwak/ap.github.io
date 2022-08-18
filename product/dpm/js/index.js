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
// const tabs = document.querySelectorAll('.menu-tab .menu-left a')

// for(let i=0; i<tab_list.length; i++){
//     tab_list[i].addEventListener('click',function(){
//         console.log('hi')
//     })
// }

