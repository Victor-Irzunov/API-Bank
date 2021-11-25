import React from 'react';
import './NavBar.scss'

const NavBar = (props) => {



    window.onclick = function (event) {
        openCloseDropdown(event)
    }

    function closeAllDropdown() {
        let dropdowns = document.getElementsByClassName('dropdown-expand')
        for (let i = 0; i < dropdowns.length; i++) {
            dropdowns[i].classList.remove('dropdown-expand')
        }
    }

    function openCloseDropdown(event) {
        if (!event.target.matches('.dropdown-toggle')) {
            // Закрыть выпадающий список при нажатии из выпадающего меню
            closeAllDropdown()
        } else {
            let toggle = event.target.dataset.toggle
            let content = document.getElementById(toggle)
            if (content.classList.contains('dropdown-expand')) {
                closeAllDropdown()
            } else {
                closeAllDropdown()
                content.classList.add('dropdown-expand')
            }
        }
    }


    return (
            <div className="navbar">
                {/*// <!-- nav left -->*/}
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link">
                            <i className="fas fa-bars"
                               onClick={()=>  props.collapseSidebar()
                               }
                            ></i>
                        </a>
                    </li>
                    <li className="nav-item">
                        <img src="assets/logo.png" alt="ATPro logo" className="logo logo-light" />
                            <img src="assets/logo.png" alt="ATPro logo" className="logo logo-dark" />
                    </li>
                </ul>
                {/*// <!-- end nav left -->*/}
                {/*// <!-- form -->*/}
                <form className="navbar-search">
                    <input type="text" name="Search" className="navbar-search-input"
                           placeholder="What you looking for..." />
                        <i className="fas fa-search"></i>
                </form>
                {/*// <!-- end form -->*/}

                {/*// <!-- nav right -->*/}
                <ul className="navbar-nav nav-right">
                    <li className="nav-item mode">


                        <a className="nav-link" href="#"
                           onClick={()=>  props.switchTheme()
                           }
                        >
                            <i className="fas fa-moon dark-icon"></i>
                            <i className="fas fa-sun light-icon"></i>
                        </a>




                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link">
                            <i className="fas fa-bell dropdown-toggle" data-toggle="notification-menu"></i>
                            <span className="navbar-badge">3</span>
                        </a>
                        <ul id="notification-menu" className="dropdown-menu notification-menu">
                            <div className="dropdown-menu-header">
						<span>
							Notifications
						</span>
                            </div>
                            <div className="dropdown-menu-content overlay-scrollbar scrollbar-hover">
                                <li className="dropdown-menu-item">
                                    <a href="#" className="dropdown-menu-link">
                                        <div>
                                            <i className="fas fa-gift"></i>
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
                                    <a href="#" className="dropdown-menu-link">
                                        <div>
                                            <i className="fas fa-tasks"></i>
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
                                    <a href="#" className="dropdown-menu-link">
                                        <div>
                                            <i className="fas fa-tasks"></i>
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
							View all notifications
						</span>
                            </div>
                        </ul>
                    </li>

                    <li className="nav-item avt-wrapper">
                        <div className="avt dropdown">
                            <img src="assets/photo2.jpeg" alt="User image" className="dropdown-toggle"
                                 data-toggle="user-menu" />
                                <ul id="user-menu" className="dropdown-menu">
                                    <li className="dropdown-menu-item">
                                        <a className="dropdown-menu-link">
                                            <div>
                                                <i className="fas fa-user-tie"></i>
                                            </div>
                                            <span>Profile</span>
                                        </a>
                                    </li>
                                    <li className="dropdown-menu-item">
                                        <a href="#" className="dropdown-menu-link">
                                            <div>
                                                <i className="fas fa-cog"></i>
                                            </div>
                                            <span>Settings</span>
                                        </a>
                                    </li>
                                    <li className="dropdown-menu-item">
                                        <a href="#" className="dropdown-menu-link">
                                            <div>
                                                <i className="far fa-credit-card"></i>
                                            </div>
                                            <span>Payments</span>
                                        </a>
                                    </li>
                                    <li className="dropdown-menu-item">
                                        <a href="#" className="dropdown-menu-link">
                                            <div>
                                                <i className="fas fa-spinner"></i>
                                            </div>
                                            <span>Projects</span>
                                        </a>
                                    </li>
                                    <li className="dropdown-menu-item">
                                        <a href="#" className="dropdown-menu-link">
                                            <div>
                                                <i className="fas fa-sign-out-alt"></i>
                                            </div>
                                            <span>Logout</span>
                                        </a>
                                    </li>
                                </ul>
                        </div>
                    </li>
                </ul>
                {/*// <!-- end nav right -->*/}
            </div>
    );
};

export default NavBar;