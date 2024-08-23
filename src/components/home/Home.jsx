import Navbar from '../navbar/Navbar'
import Featured from '../featured/Featured'
import './home.scss'

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Featured />
    </div>
  )
}

export default Home
