import React from "react";

function Footer(props) {
  return (
    <footer id="footer" className={props.color}>
      <div>
        <h4>email</h4>
        <a href="mailto:seongwoo4477@gmail.com">seongwoo4477@gmail.com</a>
      </div>
      <div>
        <h4>Kakao</h4>
        <a href="/">seongwoo91</a>
      </div>
      <div>
        <h4>social</h4>
        <ul>
          <li>
            <a
              href="https://sw91.tistory.com/"
              target="_blank"
              rel="noreferrer"
            >
              Blog
            </a>
          </li>
          <li>
            <a href="/">Instargram</a>
          </li>
          <li>
            <a href="/">Github</a>
          </li>
          <li>
            <a href="/">Referecne</a>
          </li>
          <li>
            <a href="/">Tutorials</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
