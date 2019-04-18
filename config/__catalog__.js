'use strict';
import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import '@/less/reset.less';
import './__catalog__.less';

const data = require('./config');

function App() {
  return (
    <Fragment>
      <h1>欢迎使用 webpack-rigger</h1>
      <ul>
        {
          data.map((item, index) =>
            <li className='border1px' key={index}>
              <i>{item.type}</i>
              <a target="_blank"
                 href={'/' + item.key + '.html'}>{`/${item.key}.html`}</a>
              <span>{item.title}</span>
            </li>
          )
        }
      </ul>
      <a className='fn-block text-center logo' href='https://github.com/fish-uncle/webpack-rigger'
         target='_blank'>
        <img src={require('./github.png')}/>
        <span>fish-uncle@126.com</span></a>
    </Fragment>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'));
