import { Home } from './pages/Home';

import { UserProvider } from './hooks/useUser';

import { GlobalStyle } from './styles/main';

export function App() {
  return (
    <UserProvider>
      <GlobalStyle />

      <Home />
    </UserProvider>
  );
}
