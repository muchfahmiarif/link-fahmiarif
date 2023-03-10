import Head from "next/head";
import image from "../public/fahmi arif.jpg";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Link - Muchammad Fahmi Arif</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="mt-20 md:mt-32">
          <div className="px-4 sm:px-8 max-w-5xl m-auto">
            <div className="flex justify-center mb-6">
              <Image src={image} alt="" className="w-44 rounded-full" />
            </div>
            <h1 className="text-center font-semibold text-2xl text-zinc-200">
              Muchammad Fahmi Arif
            </h1>
            <p className="mt-2 text-center text-sm mb-4 text-gray-500">
              @muchfahmiarif
            </p>
            <ul className="rounded overflow-hidden shadow-md">
              <li className="flex justify-center">
                <a
                  target={`_blank`}
                  href="https://fahmiarif.site"
                  className="bg-dark text-white/70 py-2 w-full sm:w-1/2 text-center border border-primary/10 rounded-xl my-2 hover:bg-primary/10">
                  My Website
                </a>
              </li>
              <li className="flex justify-center">
                <a
                  target={`_blank`}
                  href="https://www.linkedin.com/in/muchfahmiarif/"
                  className="bg-dark text-white/70 py-2 w-full sm:w-1/2 text-center border border-primary/10 rounded-xl my-2 hover:bg-primary/10">
                  LinkedIn
                </a>
              </li>
              <li className="flex justify-center">
                <a
                  target={`_blank`}
                  href="https://t.me/muchfahmiarif"
                  className="bg-dark text-white/70 py-2 w-full sm:w-1/2 text-center border border-primary/10 rounded-xl my-2 hover:bg-primary/10">
                  Telegram
                </a>
              </li>
              <li className="flex justify-center">
                <a
                  target={`_blank`}
                  href="https://www.instagram.com/muchfahmiarif/"
                  className="bg-dark text-white/70 py-2 w-full sm:w-1/2 text-center border border-primary/10 rounded-xl my-2 hover:bg-primary/10">
                  Instagram
                </a>
              </li>
              <li className="flex justify-center">
                <a
                  target={`_blank`}
                  href="https://github.com/muchfahmiarif"
                  className="bg-dark text-white/70 py-2 w-full sm:w-1/2 text-center border border-primary/10 rounded-xl my-2 hover:bg-primary/10">
                  Github
                </a>
              </li>
            </ul>
            <a
              target={`_blank`}
              href="mailto:fahmiarif96@gmail.com"
              className="text-xs text-center block mt-4 hover:underline text-white">
              Mail me
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
