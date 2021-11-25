import React from 'react';
import './SideBar.scss'


const SideBar = () => {





    return (
        <div className="sidebar">
            <ul className="sidebar-nav">
                <li className="sidebar-nav-item">
                    <a href="#" className="sidebar-nav-link">
                        <div>
                            <i className="fas fa-tachometer-alt"></i>
                        </div>
                        <span>
						Dashboard
					</span>
                    </a>
                </li>
                <li className="sidebar-nav-item">
                    <a href="#" className="sidebar-nav-link active">
                        <div>
                            <i className="fab fa-accusoft"></i>
                        </div>
                        <span>Lorem</span>
                    </a>
                </li>
                <li className="sidebar-nav-item">
                    <a href="#" className="sidebar-nav-link">
                        <div>
                            <i className="fas fa-tasks"></i>
                        </div>
                        <span>Morbi</span>
                    </a>
                </li>
                <li className="sidebar-nav-item">
                    <a href="#" className="sidebar-nav-link">
                        <div>
                            <i className="fas fa-spinner"></i>
                        </div>
                        <span>Praesent</span>
                    </a>
                </li>
                <li className="sidebar-nav-item">
                    <a href="#" className="sidebar-nav-link">
                        <div>
                            <i className="fas fa-check-circle"></i>
                        </div>
                        <span>Pellentesque</span>
                    </a>
                </li>
                <li className="sidebar-nav-item">
                    <a href="#" className="sidebar-nav-link">
                        <div>
                            <i className="fas fa-bug"></i>
                        </div>
                        <span>Morbi</span>
                    </a>
                </li>
                <li className="sidebar-nav-item">
                    <a href="#" className="sidebar-nav-link">
                        <div>
                            <i className="fas fa-chart-line"></i>
                        </div>
                        <span>Praesent</span>
                    </a>
                </li>
                <li className="sidebar-nav-item">
                    <a href="#" className="sidebar-nav-link">
                        <div>
                            <i className="fas fa-book-open"></i>
                        </div>
                        <span>Pellentesque</span>
                    </a>
                </li>
                <li className="sidebar-nav-item">
                    <a href="#" className="sidebar-nav-link">
                        <div>
                            <i className="fas fa-adjust"></i>
                        </div>
                        <span>Morbi</span>
                    </a>
                </li>
                <li className="sidebar-nav-item">
                    <a href="#" className="sidebar-nav-link">
                        <div>
                            <i className="fab fa-algolia"></i>
                        </div>
                        <span>Praesent</span>
                    </a>
                </li>
                <li className="sidebar-nav-item">
                    <a href="#" className="sidebar-nav-link">
                        <div>
                            <i className="fas fa-audio-description"></i>
                        </div>
                        <span>Pellentesque</span>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default SideBar;