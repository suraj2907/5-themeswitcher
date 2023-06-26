import React , {useState} from "react";
import ThemeContext from "./Context/ThemeContext";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";


const App = () => {
const [themeHook, setThemeHook] = useState("light");

return(
  <ThemeContext.Provider value={[themeHook, setThemeHook]}>
    <Header />
    <HeroSection />
  </ThemeContext.Provider>
)


}

export default App;
