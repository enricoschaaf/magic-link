import Head from "next/head"

const Title = ({ children }: { children?: string }) => (
  <Head>
    <title>
      {children}
      {children && " | "}Magic link
    </title>
  </Head>
)

export default Title
