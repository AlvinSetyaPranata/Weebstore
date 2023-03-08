import Head from "next/head";
import MainLayout from "@/layouts/main"

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>


      <main>
        <h1 className="text-4xl text-blue-600">Hello worlds</h1>
      </main>
    </>
  )
}


Home.getLayout = (page) => {
  <MainLayout>
    {page}
  </MainLayout>
}