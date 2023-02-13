import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from 'react';

import { User } from '../types/user';

interface UserContextData {
  user: User;
  isCurrentUser: (user: User) => boolean;
}

const UserContext = createContext<UserContextData>({} as UserContextData);

interface UserProviderProps {
  children: ReactNode;
}

export function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<User>({} as User);

  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((data) => setUser(data.currentUser));
  }, []);

  function isCurrentUser(userToCompare: User) {
    return userToCompare.username === user.username;
  }

  const context = useMemo(
    () => ({
      user,
      isCurrentUser,
    }),
    [user]
  );

  return <UserContext.Provider value={context}>{children}</UserContext.Provider>;
}

export function useUser() {
  return useContext(UserContext);
}
