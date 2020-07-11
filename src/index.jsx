import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import Vue from 'vue';
import myButton from './myButton.vue';

console.log(myButton);

function App() {
  const ref = React.useRef();

  useEffect(() => {
    let instance;
    if (ref.current) {
      instance = new Vue(myButton);
      instance.$mount(ref.current);
    }

    return () => {
      if (instance && instance.$destroy)
      instance.$destroy();
    }
  }, []);

  return <div>
    <h1>react</h1>
    <section ref={ref}></section>
  </div>
}


ReactDOM.render(<App />, document.getElementById('app'));
