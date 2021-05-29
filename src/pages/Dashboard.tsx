import { Switch, Route, Redirect, useRouteMatch } from 'react-router-dom';

import CryptoTabsComponent from '../components/CryptoTabs';
import PortfolioComponent from './Portfolio';

const Dashboard = () => {
  let match = useRouteMatch();

  return (
    <>
      <CryptoTabsComponent />

      <Switch>
        <Route path={`${match.path}/portfolio`}>
          <PortfolioComponent />
        </Route>
        <Route path={`${match.path}/prices`}>
          <h1>Prices Tab</h1>
        </Route>
        <Route path={`${match.path}/defi`}>
          <h1>DeFi Tab</h1>
        </Route>
        <Route path={`${match.path}/nfts`}>
          <h1>NFTs Tab</h1>
        </Route>
        <Route path={`${match.path}/accounts`}>
          <h1>Accounts Tab</h1>
        </Route>
        <Redirect from={`${match.path}`} to={`${match.path}/portfolio`} />
      </Switch>
    </>
  );
};

export default Dashboard;
