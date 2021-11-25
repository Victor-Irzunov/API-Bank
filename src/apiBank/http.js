import axios from "axios";

export const exchangeRate = () => axios.get('https://www.nbrb.by/api/exrates/rates?periodicity=0')
