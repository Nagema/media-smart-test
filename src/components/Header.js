import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header className="App-header header-app">
        <div className='header-container'>
          <img src="https://www.mediasmart.io/assets/images/logo-mediasmart.png" alt="Logo of mediasmart" className='mediasmart-logo' />
            <h1 className='main-title header-title'>Members</h1>
        </div>
      </header>
    )
  }
}
export default Header;