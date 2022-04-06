import { Sum } from './calc';
import './index.css'
console.log('hi');
console.log(Sum(1, 4));
console.log(Sum(1, 6));


const root = document.getElementById('root');

const h1 = document.createElement('h1')
h1.innerText = "Hello World";

h1.setAttribute('class', 'redText')
root.appendChild(h1)


