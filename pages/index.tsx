import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next";
import Head from "next/head";
import InitForm from "../components/InitForm";

import { prisma } from "../lib/prisma";

const Home: NextPage = ({initialized}: InferGetServerSidePropsType<GetServerSideProps>) => {
    return (
        <div>
            <Head>
                <title>Bugdeck</title>
                <meta name="description" content="" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="flex h-screen justify-center items-center">
                {initialized ?
                    <InitForm />
                    :
                    ''
                }
            </main>
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = async () => {
    const userCount = await prisma.user.count()

    if (userCount === 0) {
        return {
            props: {
                initialized: true
            }
        }
    } else {
        return {
            props: {
                initialized: false
            }
        }
    }
}

export default Home;
