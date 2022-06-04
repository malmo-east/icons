import * as React from "react";
import { SVGProps } from "react";

const SvgWallet = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="wallet_svg__fa-primary"
      d="m48 127.1 400 .9h1.3c11.2.3 21.6 3.6 30.7 8.9v-.3c19.1 11 32 31.7 32 55.4v224c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V80c0 26.5 21.49 48 48 48v-.9zM416 336c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32z"
    />
    <path
      d="M0 80c0-26.51 21.49-48 48-48h384c26.5 0 48 21.49 48 48v56.6c-9.4-5.5-20.3-8.6-32-8.6H48c-26.51 0-48-21.5-48-48z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgWallet;
