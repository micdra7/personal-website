import { Layout } from 'components/layout';
import { Socials } from 'components/socials';
import { About } from 'pages/about';
import { Home } from 'pages/home';

const App = (): JSX.Element => (
  <>
    <Layout>
      <Home />
      <About />
    </Layout>
    <Socials />
  </>
);

export default App;
