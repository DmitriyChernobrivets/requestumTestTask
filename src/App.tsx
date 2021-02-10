import React from 'react';
import Layout from './components/Layout';
import GitHubSearcher from './containers/GitHubSearcher';
import './styles/index.scss';
import 'react-notifications-component/dist/theme.css'



function App() {
   return (
      <Layout>
         <GitHubSearcher />
      </Layout>
   );
}

export default App;
