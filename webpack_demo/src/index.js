import _ from 'lodash'
import './style.css'
import myImage from './my-image.png'

function component() {
    var element = document.createElement('div');
  
    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    // 在项目中引用新创建的style.css
    element.classList.add('hello')

    // 将图像插入到div
    let myIcon = new Image();
    myIcon.src = myImage;
    element.appendChild(myIcon)
    return element;
  }
  
  document.body.appendChild(component());