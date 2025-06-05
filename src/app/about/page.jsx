import React from 'react'
import PromoArea from '@/components/PromoArea'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import AboutUsSection from '@/components/AboutUsSection'

const Page = () => {
    return <>
        <div>
            <Breadcrumb title="About Us" items={[
                { label: 'Home', href: '/' },
            ]} />

            <AboutUsSection />

            <PromoArea
                heading={<>Hire Taxi On Best Price <br /> @Mathuravrindavantaxiservices</>}
            // para1={<>You will get the best <b>Mathura taxi service</b> to travel the distance most comfortable and also very budget-friendly.There are also a wide variety of services for your comfortable travel experience while planning a trip to Mathura.</>}
            // para2={<>For booking a <strong>taxi service in Mathura</strong> you will get a list of cars with their price and you can choose one from it according to the passenger capacity and your budget. It can be a <Link href="/packages">Mathura Vrindavan tour</Link> which will be very easily accomplished by booking a taxi service which will give you a comfortable right and will be very economical.</>}
            />


        </div>
    </>
}

export default Page
