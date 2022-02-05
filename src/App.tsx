import { Layout } from 'components/layout';
import { Socials } from 'components/socials';
import { Home } from 'pages/home';

const App = (): JSX.Element => (
  <Layout>
    <Home />
    <Socials />
  </Layout>
);

export default App;
