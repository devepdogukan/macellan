"use client";

import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { PRODUCTS } from '~/mocks/products';
import { Single } from '~/components';



export default function Show() {
    const [emblaRef] = useEmblaCarousel()


    return (
        <div className='mt-4 pl-6'>
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex w-auto">
                    {PRODUCTS.map((product, i) => <Single key={i} {...product} />)}
                </div>
            </div>
        </div>
    )
}
