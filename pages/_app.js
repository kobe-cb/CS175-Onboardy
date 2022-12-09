import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import { useRouter } from "next/router";
import CandidateNav from "../components/candidates/CandidateNav";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  if (router.asPath.startsWith("/login")) {
    return (
      <>
        <Component {...pageProps} />
      </>
    );
  } else if (router.asPath.startsWith("/candidates")) {
    return (
      <>
        <CandidateNav />
        <Component {...pageProps} />
        <Footer />
      </>
    );
  } else {
    return (
      <>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </>
    );
  }
}

export default MyApp;
