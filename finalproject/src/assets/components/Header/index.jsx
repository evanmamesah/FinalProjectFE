
const Header = () => {
  return (
    <header>
        <div id="logo">
          <h1>
        Unklab{" "}
            <span id="iisrt">
              <span id="ii">II</span> <span id="srt">Daily</span>
            </span>
          </h1>
          <div id="tagline">
            <h2><br></br>Berita terkini mengenai kampus kita tercinta👍</h2>
          </div>
        </div>
        <nav>
          <ul>
            <li>
              <a href="index.html" id="homenav">
                Home
              </a>
            </li>
            <li>
              <a href="blog.html" id="blognav">
                Blog
              </a>
            </li>
            <li>
              <a href="contact.html">Contact</a>
            </li>
            <li>
              <a href="about.html">About Us</a>
            </li>
          </ul>
        </nav>
      </header>
  )
}

export default Header;