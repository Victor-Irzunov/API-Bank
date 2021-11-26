import React, { useContext, useEffect, useState } from 'react'
import { Context } from "../index"
import { observer } from "mobx-react-lite"
import './Main.scss'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from 'faker';
import SideBar from "../components/SideBar";
import {exchangeRate} from "../apiBank/http";
import Sorting from "../components/Sorting";
import Video from "../components/Video";
import Loading from "../components/Loading";
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);





const Main = observer(() => {
    const { currency } = useContext(Context)
    const [loading, setLoading] = useState(true)
    const [isReload, setIsReload] = useState(false)

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'График курса популярных валют',
            },
        },
    }

    const labels = ['Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']

    const data = {
        labels,
        datasets: [
            {
                label: 'USD',
                data: labels.map(() => faker.datatype.number({ min: -2.9, max: 2.9 })),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'EUR',
                data: labels.map(() => faker.datatype.number({ min: -2.9, max: 2.9 })),
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    }

    useEffect(() => {
        exchangeRate()
            .then(data => {
            currency.setCurrency(Array.from(data.data))
        })
            .finally(() => setLoading(false))
    }, [isReload, currency])

    function copyFunction(text) {
        const copyText = document.getElementById("myInput");
        copyText.value = text
        copyText.select();
        document.execCommand("copy");
        alert("Вы скопировали: " + copyText.value);
    }

    const closeCurrency = id => {
        let newCurrency = currency.currency.filter(obj => obj.Cur_ID !== id)
        currency.setCurrency(newCurrency)
    }

    if(loading) {
        return <Loading />
    }

    return (
        <>
            <SideBar />
            <div className="wrapper">
                <div className="row">
                    <div className="col-3 col-m-6 col-sm-6">
                        <div className="counter bg-primary">
                            <p>
                                <i className="fas fa-tasks" />
                            </p>
                            <h3>100+</h3>
                            <p>надо сделать</p>
                        </div>
                    </div>
                    <div className="col-3 col-m-6 col-sm-6">
                        <div className="counter bg-warning">
                            <p>
                                <i className="fas fa-spinner" />
                            </p>
                            <h3>100+</h3>
                            <p>в процессе</p>
                        </div>
                    </div>
                    <div className="col-3 col-m-6 col-sm-6">
                        <div className="counter bg-success">
                            <p>
                                <i className="fas fa-check-circle" />
                            </p>
                            <h3>100+</h3>
                            <p>завершенные</p>
                        </div>
                    </div>
                    <div className="col-3 col-m-6 col-sm-6">
                        <div className="counter bg-danger">
                            <p>
                                <i className="fas fa-bug" />
                            </p>
                            <h3>100+</h3>
                            <p>проблемы</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-8 col-m-12 col-sm-12">
                        <div className="card">
                            <div className="card-header">
                                <h3>
                                    Курсы валют
                                </h3>

                                <Sorting />

                                <div onClick={() => setIsReload(i=>!i)}>
                                    <i className="fa fa-undo" aria-hidden="true"/>
                                </div>
                            </div>
                            <div className="card-content">
                                <table>
                                    <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Наименование</th>
                                        <th>Кол-во единиц,<br /> буквенный код</th>
                                        <th>Курс</th>
                                        <th>Дата</th>
                                        <th>&ensp;</th>
                                        <th>&ensp;</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {currency.currency.map((obj, count) => {
                                        return(
                                            <tr
                                                key={obj.Cur_ID}
                                                className={obj.Cur_Abbreviation === currency.addCurrency ? 'table-trCurrency' : ''}
                                            >
                                                <td>{count+1}</td>
                                                <td>{obj.Cur_Name}</td>
                                                <td>{obj.Cur_Scale} {obj.Cur_Abbreviation}</td>
                                                <td>
                                            <span className="dot">
                                                <i className="bg-success" />
                                                {obj.Cur_OfficialRate}
                                            </span>
                                                </td>
                                                <td>{(obj.Date).slice(0, 10).replace(/^(\d+)-(\d+)-(\d+)$/, `$3.$2.$1`)}</td>
                                                <td onClick={ ()=>{
                                                    copyFunction(`Валюта: ${obj.Cur_Name}; ${obj.Cur_Scale} ${obj.Cur_Abbreviation} = ${obj.Cur_OfficialRate}; курс на: ${(obj.Date).slice(0, 10).replace(/^(\d+)-(\d+)-(\d+)$/, `$3.$2.$1`)}`)
                                                }}>
                                                    <input
                                                        type="text"
                                                        id="myInput"/>
                                                    <i className="fa fa-clone" aria-hidden="true"/>
                                                </td>
                                                <td onClick={() => closeCurrency(obj.Cur_ID)}>
                                                    <i className="fa fa-times" aria-hidden="true"/>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                    </tbody>


                                </table>
                            </div>
                        </div>
                    </div>



                    <div className="col-4 col-m-12 col-sm-12">
                        <div className="card">
                            <div className="card-header">
                                <h3>
                                    Индикатор выполнения
                                </h3>
                                <i className="fas fa-ellipsis-h" />
                            </div>
                            <div className="card-content">
                                <div className="progress-wrapper">
                                    <p>
                                        Менее 1 часа
                                        <span className="float-right">50%</span>
                                    </p>
                                    <div className="progress">
                                        <div className="bg-success" style={{width: "50%"}} />
                                    </div>
                                </div>
                                <div className="progress-wrapper">
                                    <p>
                                        1 - 3 часа
                                        <span className="float-right">60%</span>
                                    </p>
                                    <div className="progress">
                                        <div className="bg-primary"  style={{width: "60%"}} />
                                    </div>
                                </div>
                                <div className="progress-wrapper">
                                    <p>
                                        Более 3 часов
                                        <span className="float-right">40%</span>
                                    </p>
                                    <div className="progress">
                                        <div className="bg-warning"  style={{width: "40%"}} />
                                    </div>
                                </div>
                                <div className="progress-wrapper">
                                    <p>
                                        Более 6 часов
                                        <span className="float-right">20%</span>
                                    </p>
                                    <div className="progress">
                                        <div className="bg-danger"  style={{width: "20%"}} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Video />

                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-m-12 col-sm-12">
                        <div className="card">
                            <div className="card-header">
                            </div>
                            <div className="card-content">
                                <Line options={options} type='line' data={data} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
})

export default Main