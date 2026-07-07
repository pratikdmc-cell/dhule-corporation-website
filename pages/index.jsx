import Head from 'next/head';
import Hero from '../components/Hero';
import Services from '../components/Services';
import QuickLinks from '../components/QuickLinks';
import News from '../components/News';
import Stats from '../components/Stats';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - Dhule Municipal Corporation</title>
        <meta name="description" content="Welcome to Dhule Municipal Corporation E-Governance Portal" />
      </Head>
      <Hero />
      <Stats />
      <Services />
      <QuickLinks />
      <News />
    </>
  );
}