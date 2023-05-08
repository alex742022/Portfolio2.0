import React, { useState, useContext} from 'react'

const DarkMode = React.createContext()
const ToggleButton =  React.createContext()
// export to nav 
export function UsedarkModeActive(){
    return useContext(DarkMode)
}
//export to nav
export function UsetoggleButtonForDarkMode(){
    return useContext(ToggleButton)
}

// export this function to the App.js
export function DarkTheme({children}) {

    const [color, setColor] = useState(false)

    const toggleDarkTheme = () => {
        setColor(prevColor => !prevColor)
    }

    return(

       <DarkMode.Provider value={color}>
        <ToggleButton.Provider value={toggleDarkTheme}>
            {children}
        </ToggleButton.Provider>
       </DarkMode.Provider>
  ) 
}
