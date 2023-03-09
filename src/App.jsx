import styles from './style';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import {
  AboutMe,
  Button,
  ContactMe,
  Experiences,
  Footer,
  Hero,
  Navbar,
  Projects,
  Stats,
} from './components';

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/home" element={<Hero />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experiences" element={<Experiences />} />
            <Route path="/aboutMe" element={<AboutMe />} />
            <Route path="/contactMe" element={<ContactMe />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
