import { createElement } from "react"
import { createRoot } from "react-dom/client"

const root = createRoot(document.getElementById("root"))
// const reactElement = createElement("h1", null,
//     createElement('span', null, "Hello into span"),)
//
// console.log(reactElement)

const reactElement = <h1><span>text into span</span></h1>

const MainContent = () => {
    return <h1>React is great!</h1>
}

root.render(
    <>
        {reactElement}
        <MainContent />
    </>
)