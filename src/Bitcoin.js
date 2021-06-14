// https://api.coingecko.com/api/v3/coins/markets?vs_currency=Rs&order=market_cap_desc&per_page=100&page=1&sparkline=false

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Coin from './Coin';
const Bitcoin = () => {
    useEffect(() => {
        axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
            .then(res => {
                console.log(res.data);
                setCoins(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);//inside the network execution is stoped
    const handleChange = (e) => {
        setSearch(e.target.value);
    }
    const ding = e =>{
        e.preventDefault();
    }
    const [coins, setCoins] = useState([]);
    const [Search, setSearch] = useState("");
    const filterCoins = coins.filter(coin =>
        coin.name.toLowerCase().includes(Search.toLowerCase()) 
            )
    return (
        <div className="tot">
            <div className="total-2">
                <h1 className="hel">NaTRj-Crypto Traker</h1>
                <form onSubmit = {ding}>
                    <input type="text" placeholder="search currency" className="in" onChange={handleChange} />
                </form>
                <div className = "order">
                    <ul className = "order">
                        <li className = "name">Name</li>
                        <li className = "nam">Usd</li>
                        <li className = "na">Market_Cap</li>
                        <li className = "n">Percentage</li>
                    </ul>

                </div>
            </div>
            {filterCoins.map(coin => {
                return (
                    <Coin key={coin.id}
                    name={coin.name}
                    image={coin.image}
                    Symbol={coin.Symbol}
                    volume={coin.market_cap}
                    price={coin.current_price}
                    priceChange={coin.price_change_percentage_24h}
                    />
                );
            })}
        </div>

    );
}
export default Bitcoin;