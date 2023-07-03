import {useState, useEffect} from 'react';

type ProductType = {
    id: string
    name: string
    adjective: string | null
    description: string
    quantity: number
    createdAt: string
    updatedAt: string | null
}

export const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:4005/api/products')
            const json = await response.json()
            setProducts(json);
        }
        fetchData()
    }, [])

    return (
        <div>
            <h1>Products</h1>
            <ul>
                {products.length > 0 && products.map((product: ProductType, index) => {
                    return <li key={index} style={{paddingBottom: '20px'}}>
                        <div>{product.name}</div>
                        <div>{product.description}</div>
                        <div>{product.quantity}</div>
                     </li>
                })}
            </ul>
        </div>
    )
}