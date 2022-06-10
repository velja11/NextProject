import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/navbar'
import {Provider} from 'react-redux';
import { store } from '../src/store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
    <Navbar>
       <Component {...pageProps} />
    </Navbar>
    </Provider>)
}

export default MyApp
