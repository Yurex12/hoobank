import styles from './style';

import {
  Navbar,
  Billing,
  CardDeal,
  Business,
  Clients,
  Cta,
  Stats,
  Footer,
  Testimonials,
  Hero,
} from './components/index';

function App() {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      {/* navbar */}
      <header className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </header>

      {/* hero */}
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      {/* others */}
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <Cta />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
