import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';

interface AuthState {
  token: string;
  user: object;
}

interface SingInCredentials {
  cnpj: string;
  password: string;
}

interface AuthContextData {
  user: object;
  signIn(credentials: SingInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@LinkShare:token'); // pega e armazena o token numa  constante
    const user = localStorage.getItem('@LinkShare:user'); // pega e armazena o usuario numa  constante

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ cnpj, password }) => {
    try {
      const response = await api.post('sessions', {
        cnpj,
        password,
      });

      const { token } = response.data;

      const user = await api.get('users', { params: { cnpj } });

      api.defaults.headers.Authorization = `Baerer ${token}`;

      localStorage.setItem('@LinkShare:token', token);
      localStorage.setItem('@LinkShare:user', JSON.stringify(user));
      setData({ token, user });
      // history.push('/dashboard');
    } catch (err) {
      return alert(
        'Falha na autenticação, Houve um erro no login, verifique seu email/senha',
      );
    }
  }, []);

  const signOut = useCallback(async () => {
    localStorage.removeItem('@LinkShare:token');
    localStorage.removeItem('@LinkShare:user');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider');
  }

  return context;
}
export { AuthProvider, useAuth };
