import React ,{ useContext} from "react";
import ThemeContext from "../Context/ThemeContext";
import AppTheme from "../color";



const HeroSection = () => {
    const [theme, setTheme] = useContext(ThemeContext)
    const currentTheme  = AppTheme[theme];

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
      };
    
    return(
        <div
        style={{
            padding: "1rem",
            backgroundColor: `${currentTheme.backgroundColor}`,
            color: `${currentTheme.textColor}`,
            textAlign: "center"
        }}
        >
            <h1>Context Api Theme Toggler</h1>
            <p>This is a nice paragraph</p>
            <button style={{
                backgroundColor : "#26ae60",
                padding : "10px 150px",
                fontSize: "20px",
                border : `${currentTheme.border}`

            }}  onClick={toggleTheme}
            
            >
                Click Me
            </button>
        </div>
     )
}

export default HeroSection;