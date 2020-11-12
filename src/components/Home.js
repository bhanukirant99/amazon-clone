import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return(
        <div className="home">
            <img 
            className="header_image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt="" 
        />

            <div className="home_row">
                <Product 
                    id = "23432535"
                    title = "ASUS ROG Strix G17 17.3 FHD 120Hz Intel Core i7-10750H 10th Gen, GTX 1660Ti 6GB Graphics (16GB RAM/512GB NVMe SSD/Windows 10/Original Black/2.83 Kg), G712LU-H7015T + Xbox Game Pass for PC"
                    price = "232342"
                    rating = {5}
                    image = "https://images-na.ssl-images-amazon.com/images/I/71m05O2uNdL._SL1500_.jpg"
                />
                <Product 
                    id = "23432535"
                    title = "ASUS TUF Gaming F15 Laptop 15.6 FHD 144Hz Intel Core i5 10th Gen"
                    price = "232342"
                    rating = {1}
                    image = "https://images-na.ssl-images-amazon.com/images/I/41riZtvd6ZL._SY300_.jpg"
                />
            </div>
            <div className="home_row">
                <Product 
                    id = "23432535"
                    title = "ASUS TUF Gaming F15 Laptop 15.6 FHD 144Hz Intel Core i5 10th Gen"
                    price = "232342"
                    rating = {3}
                    image = "https://images-na.ssl-images-amazon.com/images/I/41riZtvd6ZL._SY300_.jpg"
                />
            </div>
            <div className="home_row">
                <Product 
                    id = "23432535"
                    title = "ASUS TUF Gaming F15 Laptop 15.6 FHD 144Hz Intel Core i5 10th Gen"
                    price = "232342"
                    rating = {2}
                    image = "https://images-na.ssl-images-amazon.com/images/I/41uo1mSh54L._SY300_.jpg"
                />
            </div>
        

        </div>
    );
}

export default Home;