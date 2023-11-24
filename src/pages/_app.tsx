import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {MyContextProvider} from "@/contexts/ObserverContext";
import {useState} from "react";

export default function App({ Component, pageProps }: AppProps) {
    const [open, setOpen] = useState(true);

  return (
      <MyContextProvider open={open} setOpen={setOpen}>
            <Component {...pageProps} />
      </MyContextProvider>
      )
}
