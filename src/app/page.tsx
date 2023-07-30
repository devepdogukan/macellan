"use client";

import dynamic from 'next/dynamic';
import { Thumbnail } from '~/components';
import Navigation from '~/features/Navigation'
import List from '~/features/Products/List'
import Show from '~/features/Products/Show';
import Sort from '~/features/Sort'
import { CATEGORIES } from '~/mocks/categories'
import { PRODUCTS } from '~/mocks/products';
import { useSortStore } from '~/stores'


const Basket = dynamic(() => import('~/features/Basket'), { ssr: false })

export default function Home() {
  const activeIndex = useSortStore(state => state.current)
  const activeCategory = CATEGORIES[activeIndex]
  return (
    <div>
      <Navigation />
      <Sort />
      <List label={activeCategory.label} description='Restoranın en çok tercih edilen ürünleri'>
        <Show />
      </List>
      <List label="Cazip Menüler" description='Cazip fiyatlı ve birbirinden lezzetli menüler.'>
        <div className='px-6 flex flex-col gap-2 mt-5'>
          {PRODUCTS.slice(3).map((product, i) => (
            <Thumbnail key={i} {...product} />
          ))}
        </div>
      </List>
      <Basket />
    </div>
  )
}
