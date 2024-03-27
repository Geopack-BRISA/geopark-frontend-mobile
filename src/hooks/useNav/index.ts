import { useRouter } from 'expo-router';

type pages =
  | 'signIn'
  | 'signUp'
  | 'home'
  | 'valuetion'
  | 'sendData'
  | 'editData'
  | 'userManagement'
  | 'report';

/**
 *
 * retorna uma função que deve ser utilizada para navegar entre as paginas
 *
 * nav('signIn')
 *
 * @returns Function
 * */
export const useNav = () => {
  const router = useRouter();
  return (page: pages) => router.replace(page);
};
