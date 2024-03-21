import Top from './Top'
import Bottom from './Bottom'
import Navbar from './Navbar'
import './styles.css'

export default function Home() {
  return (
    <main
      className="flex flex-col items-center gap-0 p-0 bg-dots"
      style={{ backgroundImage: "url('/background3.png')" }}
    >
      <Navbar />
      <Top />
      <Bottom />
    </main>
  )
}
