import React, { useState, useEffect } from 'react';
import CategoryCard from '../../components/CategoryCard';

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3333/categories/all')
        .then(resp => resp.json())
        .then(data => {
          setCategories(data);
          setLoading(false);
          console.log(data)
        })
        .catch(error => {
          console.error('Error fetching categories:', error);
          setLoading(false);
        });
  }, []); // Пустой массив зависимостей

  return (
      <div>
        {loading ? (
            <p>Категории грузятся</p>
        ) : (
            <>
                <h1 style={{paddingLeft: "2%"}}>Categories</h1>
                <div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gridTemplateRows: "422px 422px", padding: "2%"}}>
                    {categories.map(category => (
                        <CategoryCard key={category.id} data={category} />
                    ))}
                </div>
            </>
        )}
      </div>
  );
}
