import "../styles/Footer.css";

function Footer() {
  return (
    <footer>
      <div className="row footer_row">
        <div className="footer_social--list">
          <a
            href="https://www.linkedin.com/in/eric-tan-6b2866201/"
            className="
                footer_social--link
                link_hover-effect
                link_hover-effect--white"
            target="_blank" rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/ErichasaTan"
            className="
                footer_social--link
                link_hover-effect
                link_hover-effect--white"
            target="_blank" rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="mailto:etan34@my.bcit.ca"
            className="
                footer_social--link
                link_hover-effect
                link_hover-effect--white"
            target="_blank" rel="noreferrer"
          >
            Email
          </a>
        </div>
        <div className="footer_copyright">Copyright © 2022 Eric Tan</div>
      </div>
    </footer>
  );
}

export default Footer;
