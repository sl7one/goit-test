import { Article } from 'components/Article/Article';
import { NavigationButton } from 'components/NavigationButton/NavigationButton';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usersStore } from 'store/store';
import { Container, LoadMoreBtn, UserPage } from 'styles/styled';

export const UsersTweets = () => {
   const navigate = useNavigate();
   const [page, setPage] = useState(1);
   const { usersDataList } = usersStore;

   useEffect(() => {
      if (!usersDataList.length) navigate('/goit-test');
   }, [usersDataList.length, navigate]);

   const onClick = () => {
      setPage((prev) => prev + 1);
   };

   const pagination = () => {
      const perPage = 8;
      const end = page * perPage;

      if (end + perPage >= usersDataList.length) {
         return { end: usersDataList.length, isShowBtn: false };
      }

      return { end, isShowBtn: true };
   };

   console.log(pagination().end);

   return (
      <UserPage>
         <Container>
            <ul>
               {usersDataList
                  .map((item) => (
                     <li key={item.id}>
                        <Article item={item} />
                     </li>
                  ))
                  .slice(0, pagination().end)}
            </ul>
            <NavigationButton
               title="Go to main"
               link="goit-test"
            />

            {pagination().isShowBtn && (
               <LoadMoreBtn
                  type="button"
                  onClick={onClick}
               >
                  Load More
               </LoadMoreBtn>
            )}
         </Container>
      </UserPage>
   );
};
