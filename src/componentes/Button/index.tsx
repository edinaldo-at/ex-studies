import React from 'react';

import style from '../../styles/button.module.scss';

class Button extends React.Component<{ children: string }> {
  render(): JSX.Element {
    return (
      <button className={style.button}>
        {this.props.children}
      </button>
    )
  }
}

export default Button