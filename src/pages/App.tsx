import React from 'react';
import Form from '../componentes/Form';
import List from '../componentes/List';

import style from '../styles/app.module.scss';

function App() {

  return (
    <div className={style.appStyle}>
      <Form />
      <List />
    </div>
  );
}

export default App;