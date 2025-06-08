import React from 'react';
import PromoArea from '@/components/PromoArea';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AboutUsSection from '@/components/AboutUsSection';

const Page = () => {
    return (
        <>
            <div>
                <Breadcrumb
                    title="About Us"
                    items={[
                        { label: 'Home', href: '/' },
                    ]}
                />

                <AboutUsSection />

                <PromoArea
                    heading={
                        <>
                            Book Char Dham Yatra Taxi <br /> with Uttarakhand Yatra
                        </>
                    }
                    para1={
                        <>
                            We provide reliable and comfortable taxi services for your{" "}
                            <strong>Char Dham Yatra</strong> — Yamunotri, Gangotri, Kedarnath, and Badrinath.
                            Our experienced drivers and well-maintained vehicles ensure a safe and memorable journey through the Himalayas.
                        </>
                    }
                    para2={
                        <>
                            Whether you're traveling solo, as a couple, or with a group, we offer{" "}
                            <strong>customizable taxi packages</strong> tailored to your schedule and budget.
                            View our <Link href="/packages">Char Dham packages</Link> to get started or call us now to plan your pilgrimage with ease.
                        </>
                    }
                />
            </div>
        </>
    );
};

export default Page;
