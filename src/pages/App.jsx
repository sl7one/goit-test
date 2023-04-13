import { UsersList } from 'components/UsersList/UsersList';
import { useEffect } from 'react';
import { usersStore } from 'store/store';
import { Container } from 'styles/styled';

export const App = () => {
   const { fetchAllUsers } = usersStore;

   useEffect(() => {
      fetchAllUsers();
   }, [fetchAllUsers]);

   return (
      <Container>
         <UsersList />
      </Container>
   );
};
