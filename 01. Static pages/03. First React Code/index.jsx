// Challenge: Re-write the first lines of React code we just had.
// You can render anything you want to the screen, doesn't have
// to be an h1 element.

// import { createRoot } from 'react-dom/client';
//
// const root = createRoot(document.getElementById('root'));
//
// root.render(<h1>Hello world</h1>);

import ReactDom from 'react-dom/client';

ReactDom.createRoot(document.getElementById('root')).render(
    <h1>Hello world</h1>
)