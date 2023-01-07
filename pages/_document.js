import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className={`bg-dark`}>
        {/* <div className="w-24 h-24 rounded-full bg-white blur-2xl center -z-10"></div> */}
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
