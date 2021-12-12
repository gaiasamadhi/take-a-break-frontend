import { Link } from "react-router-dom";

export default function Footer() {
    return (
  <div className="footer">
    <div className="footerNav">
      <Link to="/" style={{ textDecoration: "none", color: "black" }}>
        FEATURES
      </Link>
      <Link to="/about" style={{ textDecoration: "none", color: "black" }}>
        ABOUT US
      </Link>
      <Link to="/" style={{ textDecoration: "none", color: "black" }}>
        FAQs
      </Link>
      <Link to="/" style={{ textDecoration: "none", color: "black" }}>
        REQUEST A FEATURE
      </Link>
    </div>
    <div className="footerLine"></div>
    <h6>Copyright @ 2021 PEMM. All rights reserved.</h6>
  </div>
  )
}
