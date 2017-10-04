import React, { PropTypes } from 'react';
import { Router } from 'react-router';
import ReactDOM from 'react-dom'

import styles from './styles.module.css'

class App extends React.Component {
  static contextTypes = {
    router: PropTypes.object
  }

  static propTypes = {
    history: PropTypes.object.isRequired,
    routes: PropTypes.element.isRequired
  };

  get content() {
    return (
      <Router
        routes={this.props.routes}
        history={this.props.history} />
    )
  }

  render () {
     return (
       <div>
         {this.content}
       </div>
     )
   }
}


module.exports = App;
