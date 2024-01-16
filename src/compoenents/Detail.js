import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Product from './Product'

export default function Detail() {
    const params = useParams()
    const apiDetail = `https://fakestoreapi.com/products/${params.productId}`
    const [product, setProduct] = useState({})
    useEffect(() => {
        fetch(apiDetail)
            .then((data) => data.json())
            .then((data) => setProduct(data))
    }, [])
    return (
        <Product product={product} ></Product>
    )
}
