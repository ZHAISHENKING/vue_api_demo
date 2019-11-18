import { cube } from './main.js'
import printMe from './print'
import './styles.css'

function component() {
    // var element = document.createElement('div');
    var element = document.createElement('pre');
    
    element.innerHTML = [
      'hello webpack',
      '5 cubed is equal to ' + cube(5)
    ].join('\n\n')
    return element;
  }
  
  // document.body.appendChild(component());
  
  /**  
   * 问题： 当启用模块热更新后，发现点击页面中的按钮，执行的还是旧的结果，
   * 为了让它与 HMR 正常工作，我们需要使用 module.hot.accept 更新绑定到新的 printMe 函数上
  */

 let element = component();
 document.body.appendChild(element);

  // 启用HMR模块热更新
  if (module.hot){
    module.hot.accept('./print.js', ()=>{
      console.log('printMe 模块更新')
      // printMe();
      document.body.removeChild(element);
      element = component();
      document.body.appendChild(element);
    })
  }