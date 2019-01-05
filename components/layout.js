import Link from "next/link";
import Head from "next/head";

export default ({ children, title = "Welcome to secureo" }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
        integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
        crossorigin="anonymous"
      />
      <link
        href="https://stackpath.bootstrapcdn.com/bootswatch/4.2.1/sandstone/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-T8Hp0+7hNSzMWfUlwSbmLBVrToSckKSiobfGsr5PL1ezzM/+aTdPnnMBTicJvoib"
        crossorigin="anonymous"
      />
    </Head>
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link href="/">
                <a className="nav-link">secureo</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about">
                <a className="nav-link">About</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact">
                <a className="nav-link">Contact</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>

    {children}

    <footer>I'm just a footer</footer>
  </div>
);
