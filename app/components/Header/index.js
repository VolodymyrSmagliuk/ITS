import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Banner from './banner.jpg';
import messages from './messages';

import header from './HeaderTitle.css';

function Header() {
  return (
    <div id = "header">
      <div id= "header_sub">

          <h1>
            <FormattedMessage id="boilerplate.components.Header.title.ITM.left"/>
          </h1>
          
          <h2>
            <FormattedMessage id="boilerplate.components.Header.title.ITM.right"/>
          </h2>

          <div id = "header_sub_link">
            <a href = "#"><FormattedMessage id="boilerplate.components.Header.title.ITM.right.NDITK"/></a>
            <a href = "#"><FormattedMessage id="boilerplate.components.Header.title.ITM.right.RDS"/></a>
            <a href = "#"><FormattedMessage id="boilerplate.components.Header.title.ITM.right.Z"/></a>
            <a href = "#"><FormattedMessage id="boilerplate.components.Header.title.ITM.right.K"/></a>
            <a href = "#"><FormattedMessage id="boilerplate.components.Header.title.ITM.right.V"/></a>
            <a href = "#" id = "menu" class = "icon">&#9776;</a>
          </div>
       
         
            <div class="box">
              <div class="search_box">
                <span class="icon"> <i class="fa fa-search"></i> </span>
                <input type="search" id="search" placeholder="Пошук статтей" />
              </div>
            </div>
            
            <div id = "footer_left_sub_nav">
                    <div id="language_navigation">
                      <div class = "language_box">
                        <div id = "language">
                          <p>
                            UA
                          </p>
                        </div>
                        <div id = "language">
                          <p>
                            EN
                          </p>
                        </div>
                      </div>
                    </div>
            </div>
                  <div id = "login_container">
                    <div id = "login">
                      <p>Вхід</p>
                    </div>
                  </div>
       </div>
           <nav>
             This is a navigation bar
           </nav>   
    </div>
  );
}

export default Header;


/*
<form action="" method="get">
          
          <button type="submit">Поиск</button>
          </form>*/ 


/*


function Header() {
  return (
    <div>
      <A href="https://www.reactboilerplate.com/">
        <Img src={Banner} alt="react-boilerplate - Logo" />
      </A>
      <NavBar>
        <HeaderLink to="/">
          <FormattedMessage {...messages.home} />
        </HeaderLink>
        <HeaderLink to="/features">
          <FormattedMessage {...messages.features} />
        </HeaderLink>
      </NavBar>
    </div>
  );
}



*/