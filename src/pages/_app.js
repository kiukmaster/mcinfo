import Layout from "../../components/Layout";
import NavBar from "../../components/navbar";
import "../globals.css";

export default function App({Component, pageProps}) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}