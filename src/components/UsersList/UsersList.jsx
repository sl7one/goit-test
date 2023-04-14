import { usersStore } from 'store/store';
import { ListBody, ListHeader } from 'styles/styled';
import { observer } from 'mobx-react-lite';
import { Loader } from 'components/Loader/Loader';
import { SortBarPanel } from 'components/SortBarPanel/SortBarPanel';

export const UsersList = observer(() => {
   const { usersDataList, isLoading, setIsFollow } = usersStore;

   return (
      <div
         style={{
            width: '100%',
         }}
      >
         <ListHeader>
            <p>Avatar</p>
            <p>User name</p>
            <p>Tweets</p>
            <p>Followers</p>
            <p>Followed</p>
         </ListHeader>
         <SortBarPanel />
         {isLoading ? (
            <Loader />
         ) : (
            <ListBody>
               {usersDataList.map(({ id, tweets, followers, avatar, user, isFollow }) => (
                  <li key={id}>
                     <div>
                        <img
                           src={avatar}
                           alt={`${user} avatar`}
                        />
                     </div>

                     <p>{user}</p>
                     <p>{tweets}</p>
                     <p>{followers}</p>
                     <div>
                        <input
                           type="checkbox"
                           checked={isFollow}
                           disabled={isLoading}
                           onChange={() => setIsFollow(id, isFollow)}
                        />
                     </div>
                  </li>
               ))}
            </ListBody>
         )}
      </div>
   );
});
