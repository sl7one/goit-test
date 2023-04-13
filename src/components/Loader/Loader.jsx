import { DotLoader } from 'react-spinners';

export const Loader = () => {
   return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
         <DotLoader color="#36d7b7" />
      </div>
   );
};
