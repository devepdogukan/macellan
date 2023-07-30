import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { CardProps } from '~/components/Card/type'



type BasketStore = {
    items: CardProps[],
    addItem: (food: CardProps) => void,
    clearItems: () => void
}


const useBasketStore = create<BasketStore>()(
    persist(
        (set, get) => ({
            items: [],
            addItem: (food) => {
                set({ items: [...get().items, food] })
            },
            clearItems: () => {
                set(({ items: [] }))
            }
        }),
        {
            name: 'basketStore'
        }
    )
)

export default useBasketStore