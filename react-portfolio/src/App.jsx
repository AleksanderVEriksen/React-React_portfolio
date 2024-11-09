import styles from './App.module.css'
import { Navbar } from './components/Navbar/Navbar'
import { Profile } from './components/Profile/Profile.jsx'

import { Footer } from './components/Footer/Footer.jsx'

function App() {

  return ( 
  <div className={styles.App}> 
  <Navbar />
  <Profile />
  </div>
  );
}
export default App
