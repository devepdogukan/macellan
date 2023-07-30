"use client";

import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { useSortStore } from '~/stores';
import { CATEGORIES } from '~/mocks/categories';



export default function Sort() {
    const [emblaRef] = useEmblaCarousel({ dragFree: false })
    const activeIndex = useSortStore(state => state.current)
    const set = useSortStore(state => state.setCurrent)


    return (
        <div className='py-6 pl-6'>
            <div className="overflow-hidden border-b relative border-b-[#ECEBE8]" ref={emblaRef}>
                <div className="flex w-auto relative top-0 left-0">
                    {CATEGORIES.map((category, i) => {
                        const isActive = activeIndex === i
                        return (
                            <div key={i}
                                onClick={() => set(i)}
                                className={`flex-1 mr-6 pb-2 cursor-pointer transition border-b top-5  left-0 ${isActive ? 'border-b-[#B1B1B4]' : 'border-b-0'}`}>
                                <p className={`text-lg font-semibold ${isActive ? 'text-primary' : 'text-[#7D7D82]'}`}>{category.label}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
