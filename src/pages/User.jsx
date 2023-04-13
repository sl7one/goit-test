import { Article } from 'components/Article/Article';
import { Loader } from 'components/Loader/Loader';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { usersStore } from 'store/store';
import { Container, UserPage } from 'styles/styled';

export const User = observer(() => {
   let { userId } = useParams();
   const { fetchOneUser, isLoading } = usersStore;

   useEffect(() => {
      fetchOneUser(userId);
   }, [fetchOneUser, userId]);

   return (
      <UserPage>
         <Container>
            <div
               style={{
                  display: ' flex',
                  alignItems: 'center',
                  justifyContent: 'center',
               }}
            >
               {isLoading ? <Loader /> : <Article />}
            </div>
            <Link to="/goit-test">Back to main</Link>
         </Container>
      </UserPage>
   );
});
