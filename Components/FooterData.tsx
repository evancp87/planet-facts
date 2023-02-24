import React from "react";

type Props = {};

function FooterData({}: Props) {
  return (
    <footer className="is-flex is-justify-content-center pt-2 pb-6 ">
      <ul className="footer-data-responsive footer-list mobile-widths-footer has-text-white ">
        <li className="is-uppercase border-full my-1  footer-data-heading footer-data-responsive-item p-2  ">
          Rotation Time:
          <span className="footer-data-value is-text-white is-uppercase">
            {" "}
            A Number
          </span>
        </li>
        <li className="is-uppercase border-full my-1 footer-data-heading  footer-data-responsive-item p-2 ">
          Revolution Time:
          <span className="footer-data-value is-text-white "> A Number</span>
        </li>
        <li className="is-uppercase border-full my-1 footer-data-heading footer-data-responsive-item p-2  ">
          Radius:
          <span className="footer-data-value is-text-white "> A Number</span>
        </li>
        <li className="is-uppercase border-full my-1 footer-data-heading footer-data-responsive-item p-2  ">
          Average Temp.:
          <span className="footer-data-value is-text-white "> A Number</span>
        </li>
      </ul>
    </footer>
  );
}

export default FooterData;
