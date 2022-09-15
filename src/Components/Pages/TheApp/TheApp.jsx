import FirstContent from './FirstContent/FirstContent';
import Navibar from '../../Navibar/Navibar';
import SecondContent from './SecondContent/SecondContent';
import FormPage from './ThirdContent/FormPage';

function TheApp() {
  return (
    <>
      <Navibar />
      <FirstContent />
      <SecondContent />
      <FormPage />
    </>
  );
}

export default TheApp;
