import React, { createContext, useState } from "react";

export const Context = createContext();

export function ContextProvider({ children, value: { getGifs, getGifsByName, scrollToTopSmooth, ...other} }) {
    const [gifs, setGifs] = useState();
    const [search, setSearch] = useState("");

    const handelGetGifs = () => getGifs().then((gifs) => setGifs(gifs));
    const handelSearch = (value) => {
        if (value.length > 0) {
            setSearch(value);
            getGifsByName(value).then((gifs) => setGifs(gifs));
        }
    }
    const handelScrollToTopSmooth = () => window.scrollY > 0 && scrollToTopSmooth();

    const functions = {
        gifs, handelGetGifs,
        search, handelSearch,
        handelScrollToTopSmooth
    }
    
    return (
        <Context.Provider value={{...functions, ...other}}>
            {children}
        </Context.Provider>
    )
}
