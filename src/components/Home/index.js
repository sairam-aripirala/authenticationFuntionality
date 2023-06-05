// Write your JS code here
import {withRouter} from 'react-router-dom'
import Header from '../Header'
import LogoutButton from '../LogoutButton'
import './index.css'

const Home = () => (
  <>
    <Header />
    <h1>Home Route</h1>
    <LogoutButton />
  </>
)

export default withRouter(Home)
