import {Input} from 'antd'
import countrySelector from '../pages/countrySelector'

const {Search} = Input;

const CountrySearch = () => {
    return (
        <Search placeholder="Unavailable" onSearch={value => console.log(value)} enterButton style={{position: "absolute", right: "2%", width: 200, marginTop: "1rem", backgroundColor: "white"}}
        );
}



export default CountrySearch;