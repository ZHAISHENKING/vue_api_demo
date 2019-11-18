import _ from 'lodash';

function component() {
  var element = document.createElement('div');
  var button = document.createElement('button');
  var br = document.createElement('br');

  button.innerHTML = '点我 查看控制台!';
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.appendChild(br);
  element.appendChild(button);

  // Note that because a network request is involved, some indication
  // of loading would need to be shown in a production-level site/app.
  button.onclick = () => import(/* webpackChunkName: "print" */ './print').then(module => {
    var print = module.default;
    print()
  })

  return element;
}

 document.body.appendChild(component());