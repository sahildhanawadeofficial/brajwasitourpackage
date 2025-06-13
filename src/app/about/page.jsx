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
                            Book Your Mathura Vrindavan Tour <br /> with Brajwasi Packages
                        </>
                    }
                    para1={
                        <>
                            We offer trusted and comfortable travel experiences through our{" "}
                            <strong>Brajwasi Tour Packages</strong> — covering Mathura, Vrindavan, Barsana, Govardhan, and more.
                            Enjoy the spiritual charm of Braj with expert-guided tours and seamless arrangements.
                        </>
                    }
                    para2={
                        <>
                            Whether you're traveling solo, with family, or a group, we provide{" "}
                            <strong>customizable tour packages</strong> tailored to your interests and convenience.
                            Browse our <Link href="/packages">Brajwasi packages</Link> to start planning or call us now for a personalized quote.
                        </>
                    }
                />

            </div>
        </>
    );
};

export default Page;
