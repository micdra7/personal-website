import { Hero } from 'components/hero';
import { Layout } from 'components/layout';
import { Socials } from 'components/socials';

const App = (): JSX.Element => (
  <Layout centeredVertically>
    <Hero />
    <Socials />
  </Layout>
);

export default App;
