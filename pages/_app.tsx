import 'tailwindcss/tailwind.css';

import { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <main className="flex flex-col max-w-lg min-h-screen mx-auto px-4 pb-4">
    <Component {...pageProps} />
  </main>
);

export default MyApp;
