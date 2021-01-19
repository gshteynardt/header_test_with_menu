import React from 'react';
import './Header.css';

import createClassName from "../../utils/createClassName";
import {Navbar} from "../Navbar/Navbar";


export const Header = ({ className, loggedIn = true}) => {

  const headerClassName = createClassName('header', className);

  return (
    <header className={`${headerClassName}`}>
     <Navbar
       theme={'white'}
       loggedIn={loggedIn}
     />
    </header>
  );
}




