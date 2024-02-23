import Head from 'next/head';
import CepSearch from '../components/CepSearch';

const Home: React.FC = () => {
  return (
    <div
    className="bg-cover bg-center bg-no-repeat bg-fixed h-screen flex flex-col items-center justify-center"
    style={{backgroundImage: "url('https://boavista.rr.gov.br/storage/Noticias/2023/MARCO/agenda1.jpg')" }}
  >
    <Head>
      <title>Pesquisa de CEP</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  
    <main className="flex flex-col items-center">
      <h1 className="text-4xl font-bold text-white mb-8">Pesquisa de CEP</h1>
      <CepSearch />
    </main>
  </div>
  
  );
};

export default Home;
