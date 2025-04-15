/**
 * Challenge: Set up a React app from scratch again.
 * This time, try rendering an unordered list with 2-3 list items inside
 * with why you're excited to be learning React.
 */

import ReactDom from 'react-dom/client';

ReactDom.createRoot(document.getElementById('root')).render(
    <div>
        <ul>
            <li>React</li>
            <li>Components</li>
            <li>Props</li>
            <li>State</li>
        </ul>
    </div>
)