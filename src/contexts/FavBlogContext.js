//import all necessary hooks to create a context 
import React, { createContext, useReducer, useContext, useState, useEffect } from "react";
//create a FavBlogContext
const FavBlogContext = createContext()
//create a keletion of a Provider component
const favBlogProvider = ({ children }) => {

    return <FavBlogContext.Provider value={value} >{children}</FavBlogContext.Provider>
}

export { FavBlogContext, favBlogProvider }