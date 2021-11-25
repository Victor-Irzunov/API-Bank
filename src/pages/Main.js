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

    console.log('currency:::', currency);


    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Chart.js Line Chart',
            },
        },
    };

    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    const data = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Dataset 2',
                data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };

    useEffect(() => {
        exchangeRate().then(data => {
            console.log('data:: ', data)
            currency.setCurrency(Array.from(data.data))
        }).finally(() => setLoading(false))
    }, [isReload])

    function copyFunction(text) {
        const copyText = document.getElementById("myInput");
        copyText.value = text
        copyText.select();
        document.execCommand("copy");
        alert("Вы скопировали: " + copyText.value);
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
                            <p>To do</p>
                        </div>
                    </div>
                    <div className="col-3 col-m-6 col-sm-6">
                        <div className="counter bg-warning">
                            <p>
                                <i className="fas fa-spinner" />
                            </p>
                            <h3>100+</h3>
                            <p>In progress</p>
                        </div>
                    </div>
                    <div className="col-3 col-m-6 col-sm-6">
                        <div className="counter bg-success">
                            <p>
                                <i className="fas fa-check-circle" />
                            </p>
                            <h3>100+</h3>
                            <p>Completed</p>
                        </div>
                    </div>
                    <div className="col-3 col-m-6 col-sm-6">
                        <div className="counter bg-danger">
                            <p>
                                <i className="fas fa-bug" />
                            </p>
                            <h3>100+</h3>
                            <p>Issues</p>
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
                                {/*<i className="fas fa-ellipsis-h" />*/}
                                <div onClick={() => setIsReload(i=>!i)}>
                                    <i className="fa fa-undo" aria-hidden="true"></i>
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
                                        <th></th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {currency.currency.map((obj, count) => {
                                        return(
                                            <tr key={obj.Cur_ID}>
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
                                                    copyFunction(`Валюта: ${obj.Cur_Name}; ${obj.Cur_Scale} ${obj.Cur_Abbreviation} = ${obj.Cur_OfficialRate} на дату: ${(obj.Date).slice(0, 10).replace(/^(\d+)-(\d+)-(\d+)$/, `$3.$2.$1`)}`)
                                                    // copyFunction()
                                                }}>
                                                    <input
                                                        type="text"
                                                        // value={'Валюта: ' + obj.Cur_Name +'; '+obj.Cur_Scale +obj.Cur_Abbreviation +' = '+ obj.Cur_OfficialRate+ ' на дату: '+ (obj.Date).slice(0, 10).replace(/^(\d+)-(\d+)-(\d+)$/, `$3.$2.$1`)}
                                                        //    value={`Валюта: ${obj.Cur_Name}; ${obj.Cur_Scale} ${obj.Cur_Abbreviation} = ${obj.Cur_OfficialRate} на дату: ${(obj.Date).slice(0, 10).replace(/^(\d+)-(\d+)-(\d+)$/, `$3.$2.$1`)}`}
                                                        // value={''}
                                                        id="myInput"/>
                                                    <i className="fa fa-clone" aria-hidden="true"></i>
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
                                    Progress bar
                                </h3>
                                <i className="fas fa-ellipsis-h" />
                            </div>
                            <div className="card-content">
                                <div className="progress-wrapper">
                                    <p>
                                        Less than 1 hour
                                        <span className="float-right">50%</span>
                                    </p>
                                    <div className="progress">
                                        <div className="bg-success" style={{width: "50%"}} />
                                    </div>
                                </div>
                                <div className="progress-wrapper">
                                    <p>
                                        1 - 3 hours
                                        <span className="float-right">60%</span>
                                    </p>
                                    <div className="progress">
                                        <div className="bg-primary"  style={{width: "60%"}} />
                                    </div>
                                </div>
                                <div className="progress-wrapper">
                                    <p>
                                        More than 3 hours
                                        <span className="float-right">40%</span>
                                    </p>
                                    <div className="progress">
                                        <div className="bg-warning"  style={{width: "40%"}} />
                                    </div>
                                </div>
                                <div className="progress-wrapper">
                                    <p>
                                        More than 6 hours
                                        <span className="float-right">20%</span>
                                    </p>
                                    <div className="progress">
                                        <div className="bg-danger"  style={{width: "20%"}} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-m-12 col-sm-12">
                        <div className="card">
                            <div className="card-header">
                                <h3>
                                    Chartjs
                                </h3>
                            </div>
                            <div className="card-content">
                                <Line options={options} data={data} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
});

export default Main;