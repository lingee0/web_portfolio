import styles from './style';
import { Route, Routes } from 'react-router-dom';

import {
  AboutMe,
  ContactMe,
  Experiences,
  Footer,
  Hero,
  Navbar,
  Projects,
} from './components';

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div
        className={`${styles.boxWidth} bg-primary w-full fixed top-0 z-[60] shadow-md`}
      >
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart} mt-20`}>
      <div className={`${styles.boxWidth}`}>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/aboutMe" element={<AboutMe />} />
          <Route path="/contactMe" element={<ContactMe />} />
        </Routes>
      </div>
    </div>

    <div className={`bg-gray-800 ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
