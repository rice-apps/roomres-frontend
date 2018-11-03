import React, { Component } from 'react';
import ItemList from './ItemList';

export default class App extends Component {
  render() {
    return (
      <div>
          <p>TESTLINE</p>
        <ItemList onChange={(e)=> handleInput(e)} name="roomNameInput"/>
      </div>
    );
  }
}
