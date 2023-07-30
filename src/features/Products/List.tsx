"use client";

import React from 'react'

export default function List({ label, description, children }: { children?: React.ReactNode, label: string, description: string }) {
    return (
        <div className='pb-[30px]'>
            <div className='px-6'>
                <p className='text-content-ink font-semibold text-lg'>{label}</p>
                <p className='text-content-light text-sm font-normal mt-2'>{description}</p>
            </div>
            {children}
        </div>
    )
}
