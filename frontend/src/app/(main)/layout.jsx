import Navbar from '../../components/navbar';
import Footer from '../../components/footer';

export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
