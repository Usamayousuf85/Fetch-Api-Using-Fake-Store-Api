/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react'
import { useEffect, useState } from 'react'
import './Cart.css'

const Cart = () => {
    const [data, setdata] = useState([])

    const getdata = () => {
        fetch('https://fakestoreapi.com/products')
            .then((response) => {
                response.json()
                // console.log(response);
                    .then((json) => {
                        console.log(json);
                        setdata(json)
                    })
            })
            .catch((err) => {
                console.log(err)
            })
    }
    useEffect(() => {
        getdata()

    }, [])

    return (
        <div className='header'>
            {data.map((v, i) => {
                return <div key={v.id} className="box"><img src={v.image} width={120} alt="" /><h4>{v.category}</h4>
                    <div><p style={{fontSize : '10px'}}>{v.description}</p></div></div>
            })}
        </div>
    )
}


export default Cart