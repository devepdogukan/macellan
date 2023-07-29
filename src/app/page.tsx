import Image from 'next/image'
import Navigation from '~/features/Navigation'
import List from '~/features/Products/List'
import Sort from '~/features/Sort'

export default function Home() {
  return (
    <div>
      <Navigation />
      <Sort />
      <List />
    </div>
  )
}
