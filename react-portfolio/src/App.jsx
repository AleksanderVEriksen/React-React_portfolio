import styles from './App.module.css'
import { Navbar } from './components/Navbar/Navbar'
import { Profile } from './components/Profile/Profile.jsx'
import { About } from './components/About/About.jsx'

//import { Experience } from './components/Experience/Experience.jsx'
//import { Footer } from './components/Footer/Footer.jsx'

function App() {

  return ( 
  <div className={styles.App}> 
  <Navbar />
  <Profile />
  <About />

  </div>
  );
}
export default App
