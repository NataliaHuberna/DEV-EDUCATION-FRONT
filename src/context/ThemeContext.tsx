import React, { useState } from "react";

type TProps = {
    children: React.ReactNode
};

const ThemeContext = React.createContext({
    dark: false,
    toggleDark: () => ({})
});

const ThemeProvider: React.FC<TProps>  = ({children}) => {
    const [dark, setDark] = useState(false);

    const toggleDark = (light: boolean) => {
        const dark = !light;
        localStorage.setItem("dark", JSON.stringify(dark));
        setDark(dark);
    };

    React.useEffect(() => {
        const localStorageDark = JSON.parse(localStorage.getItem("dark"));
        if(localStorageDark){
            setDark(localStorageDark);
        }
    },[]);

    return (
        <ThemeContext.Provider value={{dark, toggleDark}}>
            {children}
        </ThemeContext.Provider>
    );
};


export { ThemeProvider, ThemeContext };
