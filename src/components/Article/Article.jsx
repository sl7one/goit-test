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
import { NumericFormat } from 'react-number-format';

export const Article = observer(({ item }) => {
   const { setIsFollow } = usersStore;
   const { avatar, user, tweets, followers, id, isFollow } = item;

   return (
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
               <span>{tweets}</span>
               <span>TWEETS</span>
            </p>
            <p>
               <NumericFormat
                  displayType="text"
                  value={followers}
                  thousandsGroupStyle="thousand"
                  thousandSeparator=","
                  renderText={(value) => <span>{value}</span>}
               />
               <span>FOLLOWERS</span>
            </p>
            <FollowBtn
               type="button"
               onClick={() => setIsFollow(id, isFollow)}
               isFollow={isFollow}
            >
               {isFollow ? 'Followed' : 'Follow'}
            </FollowBtn>
         </BottomBox>
      </ArticleBox>
   );
});
