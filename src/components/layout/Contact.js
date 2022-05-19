import React from "react";
import { Link } from "react-router-dom";

function ContContact(props) {
  return (
    <section id="cont__contact" className={props.color}>
      <p>Let’s create something new</p>
      <h3>
        LET`S Get IN<em>TOUCH</em>
      </h3>
      <Link to="/contact">contact me</Link>
    </section>
  );
}

export default ContContact;
