import React, {useContext, useState} from 'react';
import './SideBar.scss'
import { Context } from "../index"


const SideBar = () => {
    const { currency } = useContext(Context)
    const [addCurrency, setAddCurrency] = useState('')
    const [delCurrency, setDelCurrency] = useState('')



    const addCurrencyFu = () => {
        currency.setAddCurrency((addCurrency).toUpperCase())
        setAddCurrency('')
    }
    const delCurrencyFu = () => {
        currency.setAddCurrency((addCurrency).toUpperCase())
        setAddCurrency('')
    }


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
                        <span>Отслеживать валюту</span>
                        <input
                            type="text"
                            className="input-currency"
                            value={addCurrency}
                            placeholder="usd"
                            onChange={event => setAddCurrency(event.target.value)}
                        />
                        <button
                            className="input-currencyBtn"
                            onClick={addCurrencyFu}
                        >Добавить</button>
                    </a>
                </li>
                <li className="sidebar-nav-item">
                    <a href="#" className="sidebar-nav-link">
                        <div>
                            <i className="fa fa-window-close" aria-hidden="true"></i>
                        </div>
                        <span>Удалить валюту</span>
                        <input
                            type="text"
                            className="input-del-currency"
                            value={delCurrency}
                            placeholder="eur"
                            onChange={event => setDelCurrency(event.target.value)}
                        />
                        <button
                            className="input-currencyBtn"
                            onClick={addCurrencyFu}
                        >Удалить</button>
                    </a>
                </li>
                <li className="sidebar-nav-item">
                    <a href="https://select.by/kurs/" target="_blank" className="sidebar-nav-link">
                        <div>
                            <i className="fas fa-spinner"></i>
                        </div>
                        <span>Курс в других банках</span>
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