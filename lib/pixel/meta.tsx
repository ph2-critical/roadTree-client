import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    {/* Facebook Pixel Code */}
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                        !function(f,b,e,v,n,t,s)
                        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                        n.queue=[];t=b.createElement(e);t.async=!0;
                        t.src=v;s=b.getElementsByTagName(e)[0];
                        s.parentNode.insertBefore(t,s)}(window, document,'script',
                        'https://connect.facebook.net/en_US/fbevents.js');
                        fbq('init', '676172684563621');
                        fbq('track', 'PageView');
                    `,
                        }}
                    />
                    <noscript>
                        <img height="1" width="1" style={{ display: "none" }}
                            src="https://www.facebook.com/tr?id=676172684563621&ev=PageView&noscript=1"
                        />
                    </noscript>
                    {/* End Facebook Pixel Code */}

                    {/* Google Tag Manager */}
                    <script async src="https://www.googletagmanager.com/gtag/js?id=AW-11323385873"></script>
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'AW-11323385873');
                    `,
                        }}
                    />

                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
