import React from 'react';
import Header from './Header';
class Loading extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="loading-wrapper">
          <div className="loading">
            <h1 className='logo-icon'>#</h1>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
export default Loading;