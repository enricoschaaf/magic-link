import { AppProps } from "next/app"
import { ReactQueryDevtools } from "react-query-devtools"
import "../styles/index.css"

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <ReactQueryDevtools initialIsOpen={false} />
    <Component {...pageProps} />
  </>
)

export default App
