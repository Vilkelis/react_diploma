import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Banner from './Banner';
 
function Layout(props) {
  return (
    <React.Fragment>
      <Header />      
      <main className="container">
        <div className="row">
            <div className="col">
              <Banner />
              {props.children} 
            </div>
        </div>
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default Layout;