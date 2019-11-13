import '../css/index.scss';
import { Interface } from '../components/Interface';
import { Table } from '../components/Table';
import { createStore, action, StoreProvider, useStoreState } from 'easy-peasy';

const store = createStore({
  navigator: {
    intefacePage: 'home',
    changePage: action((state, payload) => {
      // @ts-ignore
      state.intefacePage = payload;
    }),
  },
});

const getPageToRender = (page: string) => {
  if (page === 'home') {
    return Table;
  }

  if (page === 'hash') {
    return () => <div>Page hash</div>;
  }

  if (page === 'wave') {
    return () => <div>Page wave</div>;
  }

  if (page === 'archive') {
    return () => <div>Page archive</div>;
  }

  return () => <div>Page not found</div>;
};

const Router = () => {
  // @ts-ignore
  const page = useStoreState(state => state.navigator.intefacePage);

  const Page = getPageToRender(page);

  return <Page />;
};

const Index = () => {
  return (
    <StoreProvider store={store}>
      <Interface>
        <Router />
      </Interface>
    </StoreProvider>
  );
};

export default Index;
