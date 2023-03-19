const template = (e)=>{
    return `
        <div class="container">
            <img src="${e.image}" width="100%" class="img"/>
            <div class="detailProject">
                <h4 class="titleProject">${e.project}</h4>
                <p class="description">${e.description}<a href="${e.link}">${e.project}</a>, link github : <a href="${e.linkGithub}">Link github</a></p>
            </div>
        </div>
    `
}

export default template