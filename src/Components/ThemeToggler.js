import React, {useContext} from "react";
import ThemeContext from "../Context/ThemeContext";

const ThemeToggler = () => {
 const [themeMode , setThemeMode] = useContext(ThemeContext)

 return (
    <div
    onClick={ () => {
        setThemeMode(themeMode === "light" ? "dark" : "light")
    }
    }>
       <span>{ themeMode === "light" ? "Turn to Dark" :"Turn To Light"}</span>
    </div>
 )
}

export default ThemeToggler;