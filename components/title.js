import Head from "next/head";

export default function Title({ title }) {
    return (
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>{title} | MCInfo</title>
        </Head>
    );
}