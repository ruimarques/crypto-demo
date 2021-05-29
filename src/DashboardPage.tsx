import { Switch, Route } from 'react-router-dom';

import styles from './DashboardPage.module.css';
import CryptoTabsComponent from './components/CryptoTabs';
import { useRouteMatch } from 'react-router-dom';
import PortfolioComponent from './components/Portfolio';

const DashboardPage = () => {
  let match = useRouteMatch();

  return (
    <>
      <CryptoTabsComponent />

      <Switch>
        <Route path={`${match.path}/portfolio`}>
          <PortfolioComponent />
        </Route>
        <Route path={`${match.path}/prices`}>
          <h2>Prices Tab</h2>
        </Route>
        <Route path={`${match.path}/defi`}>
          <h2>DeFi Tab</h2>
        </Route>
        <Route path={`${match.path}/nfts`}>
          <h2>NFTs Tab</h2>
        </Route>
        <Route path={`${match.path}/accounts`}>
          <h2>Accounts Tab</h2>
        </Route>
      </Switch>
    </>
  );
};

export default DashboardPage;
