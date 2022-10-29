import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "@components/Navigation";
import Footer from "@components/Footer";
import { ReactElement } from "react";

interface MetaContainerProps {
  children: ReactElement;
}

export default function MetaContainer(props: MetaContainerProps) {
  const { children, ...customMeta } = props;
  const router = useRouter();

  const meta = {
    title: "Karthikeya Manthri - Senior Software Engineer",
    description: `I'm a Senior Software Engineer, working on frontend tech. Connect with me to know more`,
    image: "/public/profileImage.JPG",
    type: "website",
    date: new Date().toDateString(),
    ...customMeta,
  };
  return (
    <div className="h-screen dark:bg-black bg-[#FFDDD2] transition duration-300 font-satoshi text-lg tracking-wide h-max">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://www.karthikeya.vercel.app${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://www.karthikeya.vercel.app${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="karthikeya Manthri" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@subashkarthik" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <main className="w-full">
        <Navbar />
        <div>{children}</div>
        <Footer />
      </main>
    </div>
  );
}
