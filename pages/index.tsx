import Auth from "components/Auth"
import Layout from "components/Layout"
import Head from "next/head"

const Index = () => (
  <>
    <Head>
      <title>Title</title>
    </Head>
    <Auth>
      <Layout>
        <div>Index</div>
      </Layout>
    </Auth>
  </>
)

export default Index
