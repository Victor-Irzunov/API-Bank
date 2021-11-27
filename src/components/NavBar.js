import React, {memo, useState} from 'react'
import './NavBar.scss'
import logo from './assets/logo.png'
import photo2 from './assets/photo2.jpeg'

const NavBar = memo(({switchTheme, collapseSidebar}) => {
    const [isToggleMenu,setIsToggleMenu] = useState(false)
    const [isToggleAccount ,setIsToggleAccount] = useState(false)

    let ulClassName = 'dropdown-menu notification-menu'
    if(isToggleMenu) ulClassName += ' dropdown-expand'
    let ulClassNameIcon = 'dropdown-menu'
    if(isToggleAccount) ulClassNameIcon += ' dropdown-expand'


    return (
        <div className="navbar">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href='/#'>
                        <i className="fas fa-bars"
                           onClick={()=>  collapseSidebar()}
                        />
                    </a>
                </li>
                <li className="nav-item">
                    <img src={logo} alt="logo" className="logo logo-light" />
                    <img src={logo} alt="logo" className="logo logo-dark" />
                </li>
            </ul>
            <form className="navbar-search">
                <input type="text" name="Search" className="navbar-search-input"
                       placeholder="Что вы ищите..." />
                <i className="fas fa-search"/>
            </form>
            <ul className="navbar-nav nav-right">
                <li className="nav-item mode">
                    <a className="nav-link" href="/#"
                       onClick={() => switchTheme() }
                    >
                        <i className="fas fa-moon dark-icon"/>
                        <i className="fas fa-sun light-icon"/>
                    </a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link" href='/#' onClick={()=> setIsToggleMenu(i=>!i)}>
                        <i className="fas fa-bell dropdown-toggle" data-toggle="notification-menu" />
                        <span className="navbar-badge">3</span>
                    </a>
                    <ul id="notification-menu" className={ulClassName}>
                        <div className="dropdown-menu-header">
						<span>
							Уведомления
						</span>
                        </div>
                        <div className="dropdown-menu-content overlay-scrollbar scrollbar-hover">
                            <li className="dropdown-menu-item">
                                <a href="/#" className="dropdown-menu-link">
                                    <div>
                                        <i className="fas fa-gift"/>
                                    </div>
                                    <span>
									Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
									<br />
									<span>
										26/11/2021
									</span>
								</span>
                                </a>
                            </li>

                            <li className="dropdown-menu-item">
                                <a href="/#" className="dropdown-menu-link">
                                    <div>
                                        <i className="fas fa-tasks"/>
                                    </div>
                                    <span>
									Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
									<br />
									<span>
										26/11/2021
									</span>
								</span>
                                </a>
                            </li>

                            <li className="dropdown-menu-item">
                                <a href="/#" className="dropdown-menu-link">
                                    <div>
                                        <i className="fas fa-tasks"/>
                                    </div>
                                    <span>
									Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
									<br />
									<span>
										26/11/2021
									</span>
								</span>
                                </a>
                            </li>
                        </div>
                        <div className="dropdown-menu-footer">
						<span>
							Смотреть все уведомления
						</span>
                        </div>
                    </ul>
                </li>

                <li className="nav-item avt-wrapper" onClick={() => setIsToggleAccount(i => !i)}>
                    <div className="avt dropdown">
                        <img src={photo2} alt="User images" className="dropdown-toggle"
                             data-toggle="user-menu" />
                        <ul id="user-menu" className={ulClassNameIcon}>
                            <li className="dropdown-menu-item">
                                <a href='https://euro-app.tech' target='_blank' rel="noreferrer" className="dropdown-menu-link">
                                    <div>
                                        <i className="fas fa-user-tie"/>
                                    </div>
                                    <span>Портфолио</span>
                                </a>
                            </li>
                            <li className="dropdown-menu-item">
                                <a href='https://euro-app.site' target='_blank' rel="noreferrer" className="dropdown-menu-link">
                                    <div>
                                        <i className="fa fa-check-square"/>
                                    </div>
                                    <span>Последняя работа</span>
                                </a>
                            </li>
                            <li className="dropdown-menu-item">
                                <a href="https://www.instagram.com/euro_website_app" target='_blank' rel="noreferrer" className="dropdown-menu-link">
                                    <div>
                                        <i className="fab fa-instagram" aria-hidden="true" />
                                    </div>
                                    <span>Instagram</span>
                                </a>
                            </li>
                            <li className="dropdown-menu-item">
                                <a href="https://github.com/Victor-Irzunov" target='_blank' rel="noreferrer" className="dropdown-menu-link">
                                    <div>
                                        <i className="fab fa-github" aria-hidden="true" />
                                    </div>
                                    <span>GitHub</span>
                                </a>
                            </li>
                            <li className="dropdown-menu-item">
                                <a href="/#" className="dropdown-menu-link">
                                    <div>
                                        <i className="fas fa-sign-out-alt"/>
                                    </div>
                                    <span>Выход</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    )
})

export default NavBar