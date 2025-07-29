import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

export const Appcontext = createContext();

const Appcontextprovider = (props) => {
  const [token, setToken] = useState(localStorage.getItem('token') || "");
  const [atoken, setAtoken] = useState(localStorage.getItem('atoken') || "");
  
  const navigate = useNavigate();

  

  const value = {
    token,
    setToken,
    navigate,
    atoken,
    setAtoken
  };

  return (
    <Appcontext.Provider value={value}>
      {props.children}
    </Appcontext.Provider>
  );
};

export default Appcontextprovider;
