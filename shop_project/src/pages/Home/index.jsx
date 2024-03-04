import React, { useEffect, useState } from 'react';
import classes from './index.module.css';
import flowers from '../../pictures/flowers.png';
import { Link } from 'react-router-dom';
import axios from 'axios';
import CatalogCard from "../../components/CatalogCard";
import Discount from "../../components/Discount";
import ProductCard from "../../components/ProductCard";

export default function Home() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3333/categories/all');
                setData(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <div className={classes.container}>
                <div className={classes.leftSide}>
                    <h1 className={classes.header}>Sale</h1>
                    <h2 className={classes.paragraph}>New season</h2>
                    <Link to={'/sales'} className={classes.btn}><button className={classes.btn} >Sale</button></Link>
                </div>
                <div style={{display: "grid", alignSelf: "center", paddingBottom: "50px"}}>
                    <img style={{ justifySelf: 'right' }} src={flowers} alt="" />
                </div>
            </div>


            <div style={{paddingBottom: "5%"}}>
                <div style={{display: 'grid', gridTemplateColumns: "150px 200px", paddingLeft: "2%", paddingTop: "2%", paddingBottom: "2%"}}>
                    <h1 className={classes.catalogTitle}><Link to="/categories">Catalog</Link></h1>
                    <button className={classes.btnCatalog}><Link to={'/categories'}>All Categories</Link></button>
                </div>
                <div className={classes.catalogContainer}>
                    <CatalogCard picture_name={"catalog1.png"} title={"Fertillizer"}></CatalogCard>
                    <CatalogCard picture_name={"catalog2.png"} title={"Protective products and septic tanks"}></CatalogCard>
                    <CatalogCard picture_name={"catalog3.png"} title={"Planting material"}></CatalogCard>
                    <CatalogCard picture_name={"catalog4.png"} title={"Tools and Inventory"}></CatalogCard>
                </div>
            </div>

            <Discount />

            <div>
                <div style={{display: 'grid', gridTemplateColumns: "150px 200px", paddingLeft: "2%", paddingTop: "2%", paddingBottom: "2%"}}>
                    <h1 className={classes.catalogTitle}><Link to="/sales">Sale</Link></h1>
                </div>
                <div className={classes.salesContainer}>
                    <ProductCard id={1} title={"Decorative forget bridge"}/>
                    <ProductCard id={2} title={"Flower basket"}/>
                    <ProductCard id={3} title={"Aquarium lock"}/>
                </div>
            </div>

        </div>
    );
}
