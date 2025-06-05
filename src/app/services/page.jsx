import Breadcrumb from '@/components/Breadcrumb'
import ServiceSection from '@/components/ServiceSection'
import React from 'react'

const Page = () => {
    return <>
        <Breadcrumb title="Services" items={[
            { label: 'Home', href: '/' },
        ]} />
        <ServiceSection />
    </>
}

export default Page
