import Link from "next/link"

const Layout = ({ children }) => (
  <>
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a>Homepage</a>
          </Link>
        </li>
        <li>
          <Link href="/signup">
            <a>Sign up</a>
          </Link>
        </li>
        <li>
          <Link href="/signin">
            <a>Sign in</a>
          </Link>
        </li>
        <li>
          <Link href="/profile">
            <a>Profile</a>
          </Link>
        </li>
      </ul>
    </nav>
    {children}
  </>
)

export default Layout
