import React ,{createContext, useState} from 'react'
export const myContext = createContext();


export const Mycontext = ({children}) => {

    const [order, setOrder] = useState([]);

  return (

    

    <myContext.Provider value = {{order, setOrder}}>
    {children}
    </myContext.Provider>

  )
}