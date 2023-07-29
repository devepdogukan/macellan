"use client";

import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { useSortStore } from '~/stores';
import { CATEGORIES } from '~/mocks/categories';
import Single from '../Card/Single';


const products = [
    {
        title: 'Izgara Somon Balığı',
        price: 199.90,
        image: '1.png'
    },
    {
        title: 'Cheddar Tost',
        price: 99.90,
        image: '2.png'
    },
    {
        title: 'Izgara Somon Balığı',
        price: 299.90,
        image: '3.png'
    },
    {
        title: '2’li Hamburger Menü',
        description: '2 adet hamburger, 2 adet patates kızartması ve tercih edeceğiniz 2 adet içecek.',
        price: 89.90,
        image: '4.png'
    },
    {
        title: 'Mini Kahvaltı Tabağı Menü',
        description: '2 göz yumurta, karışık kahvaltı tabağı ve portakal suyu.',
        price: 129.90,
        image: '5.png'
    }
]

export default function Show() {
    const [emblaRef] = useEmblaCarousel()


    return (
        <div className='mt-4 pl-6'>
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex w-auto">
                    {products.map((product, i) => <Single key={i} {...product} />)}
                </div>
            </div>
        </div>
    )
}
