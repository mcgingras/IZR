import React from 'react';

const Sidenav = (props) => {

  /*
    props.pageHandler is the nav function to trigger the page change
    it works by setting the page 'state' to be the clicked page.
    we only support three pages for now, so only a few have this handler.
    the other pages are for UI purposes only at the moment.

    This is a prototype.
   */

  const setPage = (page) => {
    return (e) => {
      props.pageHandler(e, page)
    }
  }

  return (
    <div className={props.verified ? 'nav admin' : 'nav'}>
      <h4 className="nav--title">Portfolio</h4>
      <a href="" className="nav--item" onClick={setPage('strategies')}>Strategies</a>
      <a href="" className="nav--item" onClick={setPage('adjust')}>Adjust Strategy</a>
      <a href="" className="nav--item" onClick={setPage('wallets')}>Wallets</a>
      <a href="" className="nav--item" onClick={setPage('markets')}>Markets</a>
      <h4 className="nav--title">Settings</h4>
      <a href="#" className="nav--item">Account Settings</a>
      <a href="#" className="nav--item">Manage Plugins</a>
      <a href="#" className="nav--item">Contact</a>
      <a href="#" className="nav--item">Sign Out</a>
    </div>

  );
};

export default Sidenav;
