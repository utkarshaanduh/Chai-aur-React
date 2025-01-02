// function customRender(reactelement, container){
    
//     const domElement = document.createElement(reactelement.type)
//     domElement.innerHTML = reactelement.children
//     domElement.setAttribute('href', reactelement.props.href)
//     domElement.setAttribute('target', reactelement.props.target)
    
//     container.appendChild(domElement)
    

//     // const domElement = document.createElement(reactelement.type)
//     // domElement.innerHTML = reactelement.children
//     // for (const prop in reactelement.props) {
//     //     domElement.setAttribute(prop, reactelement.props[prop])
//     // }
//     //     container.appendChild(domElement)
//     }
// const reactelement = {
//     type: "a", 
//     props: {
//         href: "http://google.com",
//         target: "_blank"
//     },
//     children: "Click me to visit google"
// }

// // const reactelement = react.createElement(
// //     'a',
// //     {href: 'https://google.com', target: '_blank'},
// //     'click me to visit Google'
// // )

// const mainContainer = document.getElementById("root");

// customRender(reactelement, mainContainer)

// ReactDOM.createRoot(document.getElementsById('root')).render(
//     reactelement
// )

function customRender(reactElement, maincontainer){
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML =  reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    maincontainer.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '__blank__'
    },
    children: 'click me to visit google'
}

const mainContainer = document.getElementById('root')

customRender(reactElement, mainContainer)