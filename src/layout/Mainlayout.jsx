
import Navbar from '../components/shared/navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/shared/footer/Footer';
import { ToastContainer } from 'react-toastify';
import Useprovider from '../useprovider/Useprovider';


const Mainlayout = () => {

  return (
    <Useprovider >
      <Navbar/>
      <Outlet/>
      <Footer/>
      <ToastContainer />
    </Useprovider>
  );
};

export default Mainlayout;