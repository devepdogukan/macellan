import Image from 'next/image'
import React from 'react'
import { formatCurrency } from '~/utils/helper'

export default function Single({ price, title, description, image }: { price: number, title: string, description?: string, image: string }) {

    return (
        <div className='overflow-hidden min-w-[155px] min-h-[206px] flex flex-col rounded-[20px] mr-3 p-2 relative'>
            <div className='rounded-full relative z-50 w-min self-end px-2 py-1 bg-yellow'>
                <p className='text-xs font-bold'>{formatCurrency(price)}</p>
            </div>
            <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#00000090] to-[#00000030] z-10'></div>
            <Image src={`/products/1.png`} layout='fill' alt={title} />
            <div className='w-full bg-white text-center py-2 px-2 rounded-[2px_2px_20px_20px] relative z-50 mt-auto'>
                <p className='text-xs font-bold'>{title}</p>
            </div>
        </div>
    )
}
