import React, {memo, useContext, useState} from 'react'
import { Context } from "../index"
import './Sorting.scss'

const Sorting = memo(() => {
    const { currency } = useContext(Context)
    const [isCurrency, setIsCurrency] = useState(false)
    const [isCurrencyArrow, setIsCurrencyArrow] = useState(false)

    function sortingCurrency() {
        setIsCurrencyArrow(true)
        if (!isCurrency) {
            setIsCurrency(i => !i)
            return currency.setCurrency(currency.currency.sort((a, b) => a.Cur_OfficialRate - b.Cur_OfficialRate))
        }
        setIsCurrency(i => !i)
        return currency.setCurrency(currency.currency.sort((a, b) => b.Cur_OfficialRate - a.Cur_OfficialRate))
    }


    return (
        <div className='sorting-box'>
            <p>
                <i className="fa fa-filter fad-filter" aria-hidden="true" />
                Сортировать: &ensp;
                {isCurrencyArrow ?
                    <span
                        onClick={sortingCurrency}
                    >
						по курсу
                        {isCurrency ? '↑' : '↓'}
					</span>
                    :
                    <span
                        onClick={sortingCurrency}
                    >
						по курсу
					</span>
                }
            </p>
        </div>
    )
})

export default Sorting