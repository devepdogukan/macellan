"use client";

import React from 'react'
import { ArrowLeft } from '@phosphor-icons/react'
import Image from 'next/image';

export default function Navigation() {
    return (
        <div className='p-mobile bg-primary flex justify-between items-center'>
            <div className='cursor-pointer'>
                <ArrowLeft size={24} color='white' />
            </div>
            <div className='flex items-center gap-4'>
                <p className='text-white font-semibold text-lg'>Plus Kitchen</p>
                <Image src="/Logo.png" alt='Plus kitchen logo' width={32} height={32} />
            </div>
        </div>
    )
}
