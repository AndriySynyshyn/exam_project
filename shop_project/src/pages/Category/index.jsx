import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Products from "../Products";
import ProductSpecialCard from "../../components/ProductSpecialCard";

export default function Category(){
    const { categoryId } = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [category, setCategory] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3333/categories/${categoryId}`)
            .then(resp => resp.json())
            .then(data => {
                setProducts(data.data);
                setLoading(false);
                setCategory(data.category);
                console.log(data); // Log the entire response to the console
            })
            .catch(error => {
                console.error('Error fetching categories:', error);
                setLoading(false);
            });
    }, [categoryId]);


    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <>
                    <h1 style={{ paddingLeft: "2%", fontSize: "40px", fontWeight: "700", letterSpacing: "0.03em", fontFamily: "sans-serif"}}>{category.title}</h1>
                    <div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gridTemplateRows: "422px 422px", padding: "2%"}}>
                        {products.map(product => (
                            <ProductSpecialCard key={product.id} data={product} />
                        ))}
                    </div>
                </>
            )}
        </div>
    );

}
