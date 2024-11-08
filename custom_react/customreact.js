function customRender(reactelement, container){
    const domElement = document.createElement(reactelement.type)
    domElement.innerHTML = reactelement.children
    domElement.setAttribute('href', reactelement.props.href)
    domElement.setAttribute('target', reactelement.props.target)
    
    container.appendChild(domElement)
}
const reactelement = {
    type: "a",
    props: {
        href: "http://google.com",
        target: "_blank"
    },
    children: "Click me to visit google"
}

const mainContainer = document.getElementById("root");

customRender(reactelement, mainContainer)