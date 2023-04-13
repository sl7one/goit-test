import {
   ArticleBox,
   BottomBox,
   Circle,
   FollowBtn,
   MiddleLine,
   TopBox,
} from 'styles/styled';
import logoGoit from '../../assets/img/logo-goit.svg';
import { usersStore } from 'store/store';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export const Article = observer(() => {
   const { userData, setIsFollow, isLoading, usersDataList } = usersStore;
   const { avatar, user, tweets, followers, id, isFollow } = userData;
   const navigate = useNavigate();

   useEffect(() => {
      if (!usersDataList.length) navigate('/goit-test');
   }, [usersDataList.length, navigate]);

   return (
      <>
         <ArticleBox>
            <TopBox isFollow={isFollow}>
               <img
                  src={logoGoit}
                  alt="logo goit"
                  name="goit"
               />
               <div>
                  <div name="computer" />
                  <div name="topBox" />
                  <div name="boxBottomRight" />
                  <div name="boxBottomLeft" />
               </div>
            </TopBox>
            <MiddleLine>
               <Circle>
                  <img
                     src={avatar}
                     alt={`avatar ${user}`}
                  ></img>
               </Circle>
            </MiddleLine>
            <BottomBox>
               <p>
                  <span>{tweets}</span> <span>TWEETS</span>
               </p>
               <p>
                  <span>{followers}</span> <span>FOLLOWERS</span>
               </p>
               <FollowBtn
                  type="button"
                  onClick={() => setIsFollow(id, isFollow)}
                  disabled={isLoading}
                  isFollow={isFollow}
               >
                  {isFollow ? 'Followed' : 'Follow'}
               </FollowBtn>
            </BottomBox>
         </ArticleBox>
      </>
   );
});
