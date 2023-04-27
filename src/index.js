<<<<<<< HEAD
import './style.css';
=======
import _ from 'lodash';
import './style.css';

function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  return element;
}

document.body.appendChild(component());
>>>>>>> 67889bef0b3ac3f282484a1c6b4706f3c71d7be3
