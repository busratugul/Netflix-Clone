import Navbar from '../navbar/Navbar'
import './home.scss'

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <img
        src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        width="100%"
      />
    </div>
  )
}

export default Home
