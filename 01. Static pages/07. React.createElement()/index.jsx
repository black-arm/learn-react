import { createRoot } from "react-dom/client"
import React from 'react';

const root = createRoot(document.getElementById("root"))
// createElement get the element type, the second parameter is the props and the third parameter is the children
const reactElement = React.createElement("h1", null, "Hello from React!")

root.render(reactElement);