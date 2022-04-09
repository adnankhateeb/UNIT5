import { Sum } from './calc';
import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'

console.log('hi');
console.log(Sum(1, 4));
console.log(Sum(1, 6));


const root = document.getElementById('root');



// const h1 = React.createElement('h1', {className : 'redText'}, "Hello React!");
// const p = React.createElement('p', {}, "I am the paragraph")
// const div = React.createElement('div', {className : 'flex'}, h1, p);
// const h1 = document.createElement('h1')
// h1.innerText = "Hello World";

// h1.setAttribute('class', 'redText')
// root.appendChild(h1)

ReactDOM.render(
    <div>
        <h1>Hello World</h1>
    </div>
    , root)


