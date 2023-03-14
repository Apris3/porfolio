import template from './template/template-projects.js'
import 'regenerator-runtime'
import projects from "./data/data.js"

const main = async () =>{
    const hamburger = document.querySelector('.hamburger-menu')
    const drawer = document.querySelector('.ulNav')
    const main = document.querySelector('main')
    
    hamburger.addEventListener('click', event =>{
        drawer.classList.toggle('open')
        event.stopPropagation()
    })
    
    main.addEventListener('click', function(event){
        drawer.classList.remove('open')
        event.stopPropagation()
    })


    const container = document.querySelector('.projects')
    container.innerHTML = ''
    for(let item of projects){
        container.innerHTML += template(item)
    }; 
};

export default main



