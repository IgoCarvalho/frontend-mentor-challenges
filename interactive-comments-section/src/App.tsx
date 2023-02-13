import { Home } from './pages/Home';

import { UserProvider } from './hooks/useUser';
import { CommentsProvider } from './hooks/useComments';

import { GlobalStyle } from './styles/main';

export function App() {
  return (
    <CommentsProvider>
      <UserProvider>
        <GlobalStyle />

        <Home />
      </UserProvider>
    </CommentsProvider>
  );
}
