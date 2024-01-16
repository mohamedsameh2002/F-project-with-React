import Product from "./Product"
import { useEffect, useState } from "react"
import axios from "axios"

export default function ProductList() {
    const apiUrl = `https://fakestoreapi.com/products`
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])
    const getProudts = async () => {
        let products = await axios.get(apiUrl)
        setProducts(products.data)
    }
    const getCategories = () => {
        fetch(`${apiUrl}/categories`)
            .then((data) => data.json())
            .then((data) => setCategories(data))
    }

    const getProductWithCat = (catName) => {
        fetch(`${apiUrl}/category/${catName}`)
            .then((data) => data.json())
            .then((data) => setProducts(data))
    }
    useEffect(() => {
        getProudts()
        getCategories()
    }, [])

    return (
        <>
            <h2 className="text-center p-3">Our Products</h2>
            <div className="container">
                <button className="btn btn-info" onClick={getProudts}>All</button>
                {
                    categories.map((el) => {
                        return (<button key={el} className="btn btn-info" onClick={() => { getProductWithCat(el) }}>{el}</button>)
                    })
                }
                <div className="row">
                    {
                        products.length === 0 ? <h1>loding...</h1> : products.map((el) => {
                            return (
                                <div className="col-3" key={el.id} >
                                    <Product product={el} ></Product>
                                </div>)
                        })
                    }
                </div>


            </div>
        </>
    )
}
