let heading = React.createElement("h1",{
    id:"item-id 1"
},"hello React");

let heading1 = React.createElement("h2",{
    id:"item-id 2"
},"hello React1");

let container = React.createElement("div",{
    id:'Container'
},[heading,heading1])

let root =ReactDOM.createRoot(document.getElementById("root"));

root.render(container)