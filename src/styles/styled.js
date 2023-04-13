import styled, { keyframes } from 'styled-components';
import computer from '../assets/img/computer.png';
import boxTop from '../assets/img/boxTop.png';
import boxBottomRight from '../assets/img/boxBottomRight.png';
import boxBottomLeft from '../assets/img/boxBottomLeft.png';

export const Container = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   padding: 0 40px;
`;

export const ArticleBox = styled.article`
   background: linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);
   box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
   border-radius: 20px;
   width: 380px;
`;

const rotate = keyframes`
  0% {
    transform:  perspective(400px) rotateY(15deg);
  }

  100% {
    transform: perspective(400px) rotateY(-15deg);
  }
  `;

export const TopBox = styled.div`
   padding: 20px;
   position: relative;

   img[name='goit'] {
      width: 76px;
   }

   div {
      position: relative;
      display: flex;
      justify-content: center;
      height: 168px;

      animation: ${rotate} 6000ms infinite alternate backwards ease-in-out 1000ms; */
     perspective: 400px; 

      transition: all 350ms ease-out;
}

      div[name='computer'] {
         top: 10px;
         width: 304px;
         height: 165px;
         background-image: url(${computer});
         position: relative;
         z-index: 1;
      }
      div[name='topBox'] {
         background-image: url(${boxTop});
         width: 35px;
         height: 41px;
         position: absolute;
         top: ${({ isFollow }) => (isFollow ? 0 : '50%')};
         right: ${({ isFollow }) => (isFollow ? 0 : '50%')};
      }
      div[name='boxBottomRight'] {
         background-image: url(${boxBottomRight});
         width: 32px;
         height: 36px;
         position: absolute;
         bottom: ${({ isFollow }) => (isFollow ? 0 : '50%')};
         right: ${({ isFollow }) => (isFollow ? '5%' : '50%')};
      }
      div[name='boxBottomLeft'] {
         background-image: url(${boxBottomLeft});
         width: 40px;
         height: 35px;
         position: absolute;
         bottom: ${({ isFollow }) => (isFollow ? 0 : '50%')};
         left: ${({ isFollow }) => (isFollow ? 0 : '50%')};
      }
   }
`;

export const MiddleLine = styled.div`
   position: relative;
   height: 8px;
   background-color: #ebd8ff;
   box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
   display: flex;
   justify-content: center;
`;

export const Circle = styled.div`
   position: absolute;
   top: 0%;
   transform: translateY(-50%);

   width: 80px;
   height: 80px;
   background: #ebd8ff;
   box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
      inset 0px -2.19582px 4.39163px #ae7be3, inset 0px 4.39163px 3.29372px #fbf8ff;
   border-radius: 50%;
   display: flex;
   align-items: center;
   justify-content: center;

   img {
      width: 62px;
      height: 62px;
      object-fit: cover;
      border-radius: 50%;
   }
`;

export const BottomBox = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   padding: 62px 0 36px 0;

   p {
      font-weight: 500;
      font-size: 20px;
      text-transform: uppercase;

      color: #ebd8ff;
      &:last-of-type {
         margin-top: 16px;
      }
   }
`;

export const FollowBtn = styled.button`
   margin-top: 26px;
   padding: 14px 28px;
   font-weight: 600;
   font-size: 18px;
   text-transform: uppercase;
   color: #373737;
   background-color: ${({ isFollow }) => (isFollow ? '#5CD3A8' : '#ebd8ff')};
   box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
   border-radius: 10.3108px;

   transition: all 350ms ease-in-out;

   &: hover {
      transform: scale(1.1);
   }
`;

export const ListHeader = styled.div`
   display: flex;
   background-color: rgba(0, 0, 0, 0.1);

   p {
      flex: 1;
      font-weight: 600;
      padding: 20px;
   }

   p:nth-of-type(2) {
      flex: 3;
   }
`;

export const ListBody = styled.ul`
   li {
      display: flex;
      align-items: center;

      div {
         flex: 1;
         padding: 10px 20px;

         img {
            width: 50px;
            height: 50px;
            border-radius: 50%;
         }
      }

      div:last-of-type {
         display: flex;
         justify-content: center;
      }

      p {
         flex: 1;
         text-transform: capitalize;
         padding: 10px 20px;
      }

      p:nth-of-type(1) {
         flex: 3;
      }

      input {
      }

      a {
         flex: 1;
         color: blue;
         font-weight: 400;
         padding: 10px 20px;
      }
   }

   li:nth-of-type(odd) {
      background-color: rgba(0, 0, 0, 0.05);
   }
`;

export const UserPage = styled.div`
   ${Container} {
      flex-direction: column;
      a {
         padding: 20px;
         background-color: #5cd3a8;
         margin-top: 30px;

         border-radius: 10.3108px;

         transition: all 350ms ease-in-out;

         &: hover {
            transform: scale(1.1);
         }
      }
   }
`;

export const SortBarPanelBox = styled.div`
   display: flex;
   align-items: center;
   padding: 10px 0px 10px 20px;

   p {
      margin-right: 30px;
      width: 15%;
   }

   .Dropdown-root {
      width: 85%;
   }
`;
