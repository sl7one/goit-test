import { Loader } from 'components/Loader/Loader';
import { NavigationButton } from 'components/NavigationButton/NavigationButton';
import { UsersList } from 'components/UsersList/UsersList';
import { useEffect } from 'react';
import { usersStore } from 'store/store';
import { Container } from 'styles/styled';

export const App = () => {
   const { fetchAllUsers, isLoading } = usersStore;

   useEffect(() => {
      fetchAllUsers();
   }, [fetchAllUsers]);

   return (
      <Container>
         {isLoading ? (
            <Loader />
         ) : (
            <>
               <UsersList />
               <NavigationButton
                  title="Go to the tweets"
                  link="tweets"
               />
            </>
         )}
      </Container>
   );
};
