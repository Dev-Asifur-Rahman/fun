const get_button = document.querySelector('body button')

get_button.onclick = function task(){
    const get_p =document.querySelectorAll('p')
    const get_d = document.querySelectorAll('div')
    for(const p of get_p){
        p.classList.add('hidden')
    }
    for(const d of get_d){
        d.classList.remove('hidden')
    }
    get_button.classList.add('hidden')
}