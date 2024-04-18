function displayFunc(reactObjs, rootDiv){

    /* method 1 to display the items of reactObjs(object)
    const domElement = document.createElement(reactObjs.type)
    domElement.innerHTML = reactObjs.view
    domElement.setAttribute('href', reactObjs.links.href)
    domElement.setAttribute('target', reactObjs.links.target)
    rootDiv.appendChild(domElement)
    */
    
    const domElement = document.createElement(reactObjs.type)
    domElement.innerHTML = reactObjs.view
    for(const link in reactObjs.links){
        if(link == 'view') continue
        domElement.setAttribute(link, reactObjs.links[link])
    }

    rootDiv.appendChild(domElement)

}


const reactObjs = { //displaying the items by creating the objects.
    type: 'word',
    links: {
        href:"https://google.com",
        target: '_blank'
    },
    view: "click here to visit"
}

const rootDiv = document.getElementById('root')

displayFunc(reactObjs, rootDiv) //parameters(kya display/inject karana he, kisme inject karana he)