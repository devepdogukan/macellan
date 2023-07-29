"use client";

import React from 'react'
import { CATEGORIES } from '~/mocks/categories'
import { useSortStore } from '~/stores'
import Show from './Show';

export default function List() {
    const activeIndex = useSortStore(state => state.current)
    const activeCategory = CATEGORIES[activeIndex]
    return (
        <div>

            <div className='px-6'>
                <p className='text-content-ink font-semibold text-lg'>{activeCategory.label}</p>
                <p className='text-content-light text-sm font-normal mt-2'>Restoranın en çok tercih edilen ürünleri</p>
            </div>
            <Show />
        </div>
    )
}
