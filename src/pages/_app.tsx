import '@/styles/tailwind.css'

import Footer from '@/components/organism/Footer'
import Header from '@/components/organism/Header'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { AnimatePresence, LazyMotion, Variants, domAnimation, m } from 'framer-motion'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import 'react-tippy/dist/tippy.css'
import { LogoJsonLd } from 'next-seo';
import type { NextApiRequest, NextApiResponse } from 'next'
const v: Variants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0
  },
  exit: {
    opacity: 0,
    y: 0
  }
}
const firebaseConfig = {
  apiKey: "AIzaSyBTKKouXciwQZtzSsEx2wWf-C2bDt_SCyE",
  authDomain: "krunal-shah.firebaseapp.com",
  projectId: "krunal-shah",
  storageBucket: "krunal-shah.appspot.com",
  messagingSenderId: "37440834488",
  appId: "1:37440834488:web:0befe8c22e55a126a4dd4d",
  measurementId: "G-W69MC16XS0"
};
function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ThemeProvider attribute='class' storageKey='theme' enableSystem>
      
      <LazyMotion features={domAnimation}>
        <Header />
        <LogoJsonLd
      logo="https://krunal-shah.web.app/static/Krunal-shah-logo.png"
      url="https://krunal-shah.web.app/"
    />
        {/* disable initial animation to get higher score on lighthouse */}
        <AnimatePresence initial={false} onExitComplete={() => window.scrollTo(0, 0)} exitBeforeEnter>
          <m.div
            key={router.route}
            variants={v}
            initial='hidden'
            animate='visible'
            exit='exit'
            transition={{
              duration: 0.25,
              type: 'tween'
            }}
          >
            <Component {...pageProps} />
            <Footer />
          </m.div>
        </AnimatePresence>
      </LazyMotion>
    </ThemeProvider>
  )
}
let analytics;
const app = initializeApp(firebaseConfig);
if (app.name && typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}
export {analytics};
export function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader(
    'Cache-Control',
    'public, max-age=31536000, immutable'
  )

  return {
    props: {},
  }
}
export default MyApp
