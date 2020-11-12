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
                    title = "Product"
                    price = "232342"
                    rating = "5"
                    image = "33434"
                />
            </div>
            <div className="home_row">
                <Product 
                    id = "23432535"
                    title = "Product"
                    price = "232342"
                    rating = "5"
                    image = "33434"
                />
            </div>
            <div className="home_row">
                <Product 
                    id = "23432535"
                    title = "Product"
                    price = "232342"
                    rating = "5"
                    image = "33434"
                />
            </div>
        

        </div>
    );
}

export default Home;