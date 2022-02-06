import { Layout } from 'components/layout';
import { Navbar } from 'components/navbar';
import { Socials } from 'components/socials';
import { About } from 'pages/about';
import { Contact } from 'pages/contact';
import { Home } from 'pages/home';
import { Projects } from 'pages/projects';

const App = (): JSX.Element => (
  <>
    <Navbar />
    <Layout>
      <Home />
      <About />
      <Projects />
      <Contact />
    </Layout>
    <Socials />
  </>
);

export default App;
