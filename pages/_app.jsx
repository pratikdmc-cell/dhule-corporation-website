import '../styles/globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const noLayoutRoutes = ['/auth/login', '/auth/register'];
  const showLayout = !noLayoutRoutes.includes(router.pathname);

  return (
    <>
      {showLayout && <Header />}
      <main className="min-h-screen">
        <Component {...pageProps} />
      </main>
      {showLayout && <Footer />}
    </>
  );
}