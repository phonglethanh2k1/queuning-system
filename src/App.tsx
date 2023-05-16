import React from 'react';
import { SWRConfig } from 'swr';

// third-party
import { SnackbarProvider } from 'notistack';
import Routers from 'routers';
import fetcher from 'services/fetcher';
// import store from 'redux/store';
import { Provider } from 'react-redux';
import { store } from 'app/store';

const App = (): React.ReactElement => (
  <SnackbarProvider maxSnack={5} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
    <SWRConfig
      value={{
        fetcher,
        refreshInterval: 0,
        revalidateOnFocus: false,
        errorRetryCount: 3,
      }}
    >
      <Provider store={store}>
        <Routers />
      </Provider>
    </SWRConfig>
  </SnackbarProvider>
);

export default App;
