"use client";

import React from 'react'
import { useBasketStore } from '~/stores'
import { formatCurrency } from '~/utils/helper'

export default function Basket() {
    const items = useBasketStore(state => state.items)
    const totalPrice = items.reduce((p, c) => p + c.price, 0)
    return (
        <div>
            <div className='mt-0 h-[92px]'></div>
            <div className='fixed bottom-0 w-full bg-white px-6 py-[18px] z-[999] flex items-center justify-between shadow-[0px_-1px_0px_0px_rgba(0,0,0,0.16)]'>
                <div>
                    <p className='text-content-medium text-sm font-normal'>{items.length} ürün</p>
                    <p className='text-content-ink text-base font-bold'>{formatCurrency(totalPrice)}</p>
                </div>
                <button className='bg-brand text-sm font-bold py-4 px-[68px]  rounded-[13px] text-white'>Öde</button>
            </div>
        </div>
    )
}
