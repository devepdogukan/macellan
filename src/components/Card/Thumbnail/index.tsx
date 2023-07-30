"use client";

import Image from 'next/image'
import React from 'react'
import { formatCurrency } from '~/utils/helper'
import { CardProps } from '../type'
import { Plus } from '@phosphor-icons/react'
import { useBasketStore } from '~/stores'

export default function Thumbnail({ price, title, description, image }: CardProps) {
    const addItem = useBasketStore(state => state.addItem)
    const imageSrc = require(`./../../../../public/products/${image}`)
    return (
        <div className='overflow-hidden flex gap-4 rounded-[20px] px-4 py-[14px] bg-content-semantic'>
            <div className='overflow-hidden relative min-w-[82px] h-[114px] rounded-xl'>
                <Image src={imageSrc} layout='fill' alt={title} />
            </div>
            <div className='flex gap-2 flex-col '>
                <p className='text-sm font-bold text-content-ink'>{title}</p>
                {description && (
                    <p className='text-sm font-normal text-content-medium'>{description}</p>
                )}
                <div className='flex justify-between'>
                    <div className='rounded-full relative z-50 w-min self-end px-2 py-1 bg-yellow'>
                        <p className='text-xs font-bold'>{formatCurrency(price)}</p>
                    </div>
                    <button
                        onClick={() => addItem({ price, title, image })}
                        className='w-8 h-8 rounded-full bg-brand flex items-center justify-center'>
                        <Plus size="16px" color='white' />
                    </button>
                </div>
            </div>
        </div>
    )
}
