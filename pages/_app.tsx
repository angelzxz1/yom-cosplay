import { ChakraProvider, CSSReset  } from '@chakra-ui/react';
import theme from "../lib/theme";
import react from "react";
import {AppProps} from "next/app"


function MyApp({ Component, pageProps }:AppProps): React.ReactNode {
  return (
    <ChakraProvider theme={theme}>
        <CSSReset />
        <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp