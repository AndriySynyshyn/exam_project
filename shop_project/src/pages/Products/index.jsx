import React, {useEffect, useState} from 'react'
import ProductCard from "../../components/ProductCard"
import ProductSpecialCard from '../../components/ProductSpecialCard';
export default function Products() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:3333/products/all')
            .then(resp => resp.json())
            .then(data => {
                setProducts(data);
                setLoading(false);
                console.log(data)
            })
            .catch(error => {
                console.error('Error fetching categories:', error);
                setLoading(false);
            });
    }, []);



    return (
      <>
          {loading ? (
              <p>Loading...</p>
          ): (
              <div style={{display:"grid",gridTemplateColumns: "1fr 1fr 1fr 1fr", gridTemplateRows: "390px 390px"}}>
                                      {products.map(product => (
                        // <ProductCard key={product.id} title={product.title} />
                        <ProductSpecialCard data={product}/>
                    ))}
              </div>
          )}
      </>
  )
}