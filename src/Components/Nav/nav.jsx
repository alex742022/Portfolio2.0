import React from 'react'
import './nav.css'
import logo from '../../assets/my-pictures/logo.png'
import menu from '../../assets/icons/menu.png'
import cancel from '../../assets/icons/cancel.png'
import light from '../../assets/icons/sun.png'
import dark from '../../assets/icons/moon.png'

export default function Nav() {

    // state for icon menu and cancel
    const [toggleIcon, setToggleIcon] = React.useState(false)
    // bar-container function
    const toggleNavbar  = () =>{
        setToggleIcon(prevToggleIcon => !prevToggleIcon)

    }
    //state for darkmode
    const [darkMode, setDarkMode] = React.useState(false)
    // darkmode function
    const activeDarkMode = () => {
        setDarkMode(prevDarkMode => !prevDarkMode)
    }

    // state for theme show or hide
    const [toggleTheme, setToggleTheme] = React.useState(false)
    // theme-container function
    const themeButton = () => {
        setToggleTheme(prevToggleTheme => !prevToggleTheme)
    }

    //Color theme reset
    const colorThemeReset = () => {
        document.documentElement.style.setProperty("--colorThemeOne1", "#008726")
        document.documentElement.style.setProperty("--colorThemeOne3", "linear-gradient(90deg, rgba(0,135,38,1) 0%, rgba(50,185,44,1) 100%)")
    }
    
    // Change color theme
    const colorThemeOne = () => {
        document.documentElement.style.setProperty("--colorThemeOne1", "#a1674a")
        document.documentElement.style.setProperty("--colorThemeOne3", "linear-gradient(90deg, rgba(161,103,74,1) 53%, rgba(240,231,216,1) 100%)")
    }

    const colorThemeTwo = () => {
        document.documentElement.style.setProperty("--colorThemeOne1", "#553555")
        document.documentElement.style.setProperty("--colorThemeOne3", "linear-gradient(90deg, rgba(85,53,85,1) 53%, rgba(133,85,102,1) 100%)")
    }
    const colorThemeThree = () => {
        document.documentElement.style.setProperty("--colorThemeOne1", "#ba1b1d")
        document.documentElement.style.setProperty("--colorThemeOne3", "linear-gradient(90deg, rgba(186,27,29,1) 53%, rgba(242,67,51,1) 100%)")
    }

  return (
    
        <div className="nav-bar">
                <div className="logo-container">
                    <img src={logo} alt="logo"/>
                </div>

            <div className="navbar-content">
                <div 
                    className={toggleIcon ? 
                    "navbar-container navbar-container-show" : 
                    "navbar-container"}
                    >
                    
                    <ul>
                        <a href="#Home"><li>Home</li></a>
                        <a href="#About"><li>About</li></a>
                        <a href="#Projects"><li>Projects</li></a>
                        <a href="#Skills"><li>Skills</li></a>
                        <a href="#Contact"><li>Contact</li></a>
                    </ul>

                    <div className="change-theme-button">
                    {/* theme-container function */}
                        <div onClick={themeButton} className="theme-button">
                        </div>

                        <div onClick={activeDarkMode} className="container-darklight">
                            <img src={darkMode ? dark : light} alt="dark and light" />
                        </div>

                        <div 
                            className={toggleTheme ? 
                            "theme-container theme-container-show" : 
                            "theme-container"}
                            >
                            <div onClick={colorThemeReset} className="color color-reset"></div>
                            <div onClick={colorThemeOne} className="color color1"></div>
                            <div onClick={colorThemeTwo} className="color color2"></div>
                            <div onClick={colorThemeThree} className="color color3"></div>
                        </div>

                    </div>
                            
                </div>
                {/* bar-container function */}
                <div onClick={toggleNavbar} className="bar-container">
                    <img src={toggleIcon ? cancel : menu} alt="navbar button"/>
                </div>   
            </div>
        </div>
  )
}
