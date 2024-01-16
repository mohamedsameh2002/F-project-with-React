import React from 'react'
import { Link } from 'react-router-dom'

export default function Product(props) {
    const { product } = props
    return (
        <div className="card">
            <img className="card-img-top" src={product.image} alt=".." />
            <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <Link to={`products/${product.id}`} className="btn btn-primary">Detailes</Link>
                {/* <a className="btn btn-primary" href={`products/${product.id}`}>Detailes</a> */}
            </div>
        </div>
    )
}
