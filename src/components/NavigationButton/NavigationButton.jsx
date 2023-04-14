import { Link } from 'react-router-dom';
import { NavigationBox } from 'styles/styled';

export const NavigationButton = ({ title, link }) => {
   return (
      <NavigationBox>
         <Link to={`/${link}`}>{title}</Link>
      </NavigationBox>
   );
};
