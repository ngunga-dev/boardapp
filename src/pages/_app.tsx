import {AppProps} from "next/app"
import "../pages/styles/global.scss"
import { Header } from '../components/Header';
function MyApp({ Component, pageProps }:AppProps) {
  return (
    <>
    <Header/>
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
