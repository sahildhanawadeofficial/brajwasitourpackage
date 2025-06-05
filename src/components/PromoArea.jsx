import React from 'react'
import Image from 'next/image'

const PromoArea = ({ heading, para1, para2 }) => {
    return <>
        <section className="gauto-promo-area">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="promo-box-left">
                            <Image src="/img/toyota-offer-2.webp" alt="Toyota Camry" width={500} height={350} layout="responsive" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="promo-box-right">
                            <h3>{heading}</h3>
                            <p className="content"> {para1}</p>
                            <br />
                            <p className="content">{para2}</p>
                            <a href="#" className="gauto-btn">Book Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default PromoArea
