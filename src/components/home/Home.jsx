import Navbar from '../navbar/Navbar'
import './home.scss'
import Featured from '../featured/Featured'
import List from '../list/List'

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Featured />
      <List />
      <List />
    </div>
  )
}

export default Home
