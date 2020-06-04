import Link from "next/link"

export const Sign = ({ type }: { type: "signup" | "signin" }) => (
  <div className="max-w-md mx-auto flex h-full justify-center items-center">
    <div className="grid row-gap-4">
      <h2 className="text-center text-3xl leading-9 font-extrabold text-gray-900">
        {type === "signup" ? "Sign up for free" : "Sign in to your account"}
      </h2>
      <form className="space-y-4">
        <label htmlFor="email" className="sr-only">
          Email address
        </label>
        <div className="relative rounded-md shadow-sm">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg
              className="h-5 w-5 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884zM18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <input
            id="email"
            className="form-input block w-full pl-10 sm:text-sm sm:leading-5"
            placeholder="Email address"
          />
        </div>
        <button
          type="submit"
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
        >
          <span className="absolute left-0 inset-y-0 flex items-center pl-3">
            <svg
              className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400 transition ease-in-out duration-150"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          {type === "signup" ? "Sign up" : "Sign in"}
        </button>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="relative flex justify-center text-sm leading-5">
          <span className="px-2 bg-gray-100 text-gray-600">
            {type === "signup"
              ? "Already have an account?"
              : "Don't have an account?"}
          </span>
        </div>
      </div>
      <div className="rounded-md shadow-sm">
        <button className="block w-full items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150">
          <Link href={type === "signup" ? "/signin" : "/signup"}>
            <a>{type === "signup" ? "Sign in" : "Sign up"}</a>
          </Link>
        </button>
      </div>
    </div>
  </div>
)
