
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <button>
        <Link href = "/todos">Yapılacaklar Listesine Git</Link>
      </button>
    </div>
  )
}
