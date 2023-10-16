import type { AppProps } from "next/app";
import "../styles/globals.css";

import "@fontsource/jost/400.css";
import "@fontsource/jost/500.css";
import "@fontsource/jost/600.css";
import "@fontsource/jost/700.css";
import "@fontsource/sen/400.css";
import "@fontsource/sen/700.css";

import { NextSeo } from "next-seo";
import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script id="google-analytics" strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
                `}
      </Script>
      <NextSeo
        title="Ilham Rajab"
        titleTemplate="Ilham Rajab | Personal Portofolio"
        defaultTitle="Ilham Rajab | Personal Portofolio"
        description="Hey! I'm Ilham, a UI/UX Designer, Game Developer and a Student!"
        openGraph={{
          url: "https://portofolio-ilhamsrajab.vercel.app/",
          title: "Ilham Rajab | Personal Portofolio",
          description:
            "Hey! I'm Ilham, a Web Designer",
          images: [
            {
              url: "#",
              width: 800,
              height: 420,
              alt: "Ilham Rajab | Personal Portofolio",
            },
          ],
        }}
        twitter={{
          handle: "@ilham__rajab",
          site: "@ilham__rajab",
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "ui designer, ux designer, ui/ux designer, ilham rajab, ilham syahidatul r, ilham syahidatul rajab, web developer, web development, blogger, tech enthusiast, open source",
          },
        ]}
      />
      <Head>
        <link rel="icon" type="image/png" href="/assests/favicon.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
