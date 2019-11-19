import _ from 'lodash';
import Print from './print'

function component() {
  var element = document.createElement('div');
  var button = document.createElement('button');
  var br = document.createElement('br');

  button.innerHTML = '点我 查看控制台!';
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  // element.onclick = Print.bind(null, 'hello webpack!')

  return element;
}

 document.body.appendChild(component());