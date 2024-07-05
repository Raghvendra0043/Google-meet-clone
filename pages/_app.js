import { SocketProvoider } from '@/context/socket'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <SocketProvoider>
      <Component {...pageProps} />
    </SocketProvoider>
  )
}
