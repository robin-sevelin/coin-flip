


import Coin from './components/Coin';
import Form from './components/Form';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2>My flip coin app</h2>
      <Coin />
      <Form />
    </main>
  );
}
