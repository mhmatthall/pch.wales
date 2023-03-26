// pch.wales site wrapper
//    Imports global styles and wraps the whole app
import '@/styles/globals.scss';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}