import './App.scss'
import React, {useState} from "react"
import {BrowserRouter} from "react-router-dom"
import { observer } from "mobx-react-lite"
import AppRouter from "./components/AppRouter"
import NavBar from "./components/NavBar"

const App = observer(()=> {
    const [isActive, setIsActive] = useState(false)
    const [isActive2, setIsActive2] = useState(false)
    const [toggleClassSideBar, setToggleClassSideBar] = useState('')
    console.log('dark: ', isActive)
    const themeCookieName = 'theme'
    const themeDark = ' dark'
    const themeLight = ' light'
    let mainBlock = 'overlay-scrollbar'


    function setCookie(cookName, cookValue) {
        let date = new Date()
        date.setTime(date.getTime() + (24 * 60 * 60 * 1000))
        let expires = "expires=" + date.toUTCString()
        document.cookie = cookName + "=" + cookValue + ";" + expires + ";path=/"
    }

    function getCookie(cookName) {
        let name = cookName + "="
        let ca = document.cookie.split(';')
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1)
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length)
            }
        }
        return ""
    }

    loadTheme()

    function loadTheme() {
        let theme = getCookie(themeCookieName)
        if(theme === '' ) mainBlock += themeLight
        else {
            if(theme === 'dark') mainBlock += themeDark
            else  mainBlock += themeLight
        }
    }

    function switchTheme() {
        if (mainBlock === 'overlay-scrollbar light') {
            mainBlock += themeDark
            setIsActive(i => !i)
            setCookie(themeCookieName, themeDark)
        } else {
            mainBlock += themeLight
            setIsActive(i => !i)
            setCookie(themeCookieName, themeLight)
        }
    }

    function collapseSidebar() {
        setIsActive2(i=>!i)
        setToggleClassSideBar(mainBlock + ' sidebar-expand')
    }


  return (
    <div className={!isActive2 ? mainBlock : toggleClassSideBar}>
      <BrowserRouter>
          <NavBar switchTheme={switchTheme} collapseSidebar={collapseSidebar} />
          <AppRouter />
      </BrowserRouter>
    </div>
  )
})

export default App
