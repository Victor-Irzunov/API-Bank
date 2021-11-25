import React, { useContext, useState } from 'react'
import { Context } from "../index"

const Sorting = () => {
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
        <div>
            <p className='sorting-box'>
                Сортировать: &ensp;
                {isCurrencyArrow ?
                    <span
                        onClick={sortingCurrency}
                    >
						по возврастанию
                        {isCurrency ? '↑' : '↓'}
					</span>
                    :
                    <span
                        onClick={sortingCurrency}
                    >
						по убыванию
					</span>
                }


            </p>
        </div>
    );
};

export default Sorting;