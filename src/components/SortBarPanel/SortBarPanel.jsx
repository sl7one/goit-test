import ReactDropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { usersStore } from 'store/store';
import { SortBarPanelBox } from 'styles/styled';

export const SortBarPanel = () => {
   const options = ['all', 'name', 'tweets', 'followers', 'follow', 'followings'];

   const { setFilter } = usersStore;

   const onChange = ({ value }) => {
      setFilter(value);
   };
   return (
      <SortBarPanelBox>
         <p>Sort by</p>
         <ReactDropdown
            options={options}
            onChange={onChange}
            value={options[0]}
            placeholder="Select an option"
         />
      </SortBarPanelBox>
   );
};
