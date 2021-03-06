import Head from "next/head"
import Title from "./Title"

const Error = ({ statusCode }: { statusCode: number }) => (
  <>
    {statusCode === 404 && (
      <Head>
        <Title>Page not found</Title>
      </Head>
    )}
    <div className="h-full flex justify-center items-center px-4 sm:px-6 lg:px-8">
      <span className="text-gray-600 text-center">
        <h1 className="text-4xl font-black">{statusCode}</h1>
        <p className="text-lg font-medium">
          {statusCode == 404
            ? "Page not found"
            : "An unexpected error has occurred"}
        </p>
      </span>
    </div>
  </>
)

export default Error
