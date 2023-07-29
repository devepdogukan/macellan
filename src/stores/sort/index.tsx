import { create } from 'zustand'

interface SortState {
    current: number,
    setCurrent: (index: number) => void
}

const SortStore = create<SortState>((set) => ({
    current: 0,
    setCurrent: (current) => {
        set({ current })
    }
}))


export default SortStore