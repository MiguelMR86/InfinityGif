import React, { createContext, useState } from "react";

export const Context = createContext();

export function ContextProvider({ children, value: { getGifsByName, getNextGifs, scrollToTopSmooth, ...other } }) {
    const [gifs, setGifs] = useState();
    const [search, setSearch] = useState("Lofi");
    const [offset, setOffset] = useState(0);
    const [noMoreGifs, setNoMoreGifs] = useState(false);

    const handelGetNextGifs = () => {
        getNextGifs(search, offset)
            .then((newGifs) => {
                (gifs && gifs.length > 0)
                    ? setGifs((prevGifs) => [...prevGifs, ...newGifs])
                    : setGifs(newGifs);
                (newGifs.length === 0) 
                    ? setNoMoreGifs(true)
                    : null;
            });
    }
    
    const handelSearch = (value) => {
        setNoMoreGifs(false)
        if (value.length > 0) {
            setSearch(value);
            getGifsByName(value).then((gifs) => setGifs(gifs));
        }
    }

    const handelScrollToTopSmooth = () => window.scrollY > 0 && scrollToTopSmooth();

    const functions = {
        gifs,
        offset, setOffset, handelGetNextGifs,
        search, handelSearch,
        noMoreGifs,
        handelScrollToTopSmooth,
    }

    return (
        <Context.Provider value={{ ...functions, ...other }}>
            {children}
        </Context.Provider>
    )
}
