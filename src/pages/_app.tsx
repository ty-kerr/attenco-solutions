import { type AppType } from "next/app";
import { Kantumruy_Pro } from "next/font/google";

import "@/styles/globals.css";

const kantumruy = Kantumruy_Pro({
  subsets: ["latin"],
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className={kantumruy.className}>
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
