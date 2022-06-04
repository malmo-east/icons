import * as React from "react";
import { SVGProps } from "react";

const SvgBarcodeScan = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="barcode-scan_svg__fa-primary"
      d="M64 56c0-13.25 10.75-24 24-24h16c13.3 0 24 10.75 24 24v136H64V56zm64 264v136c0 13.3-10.7 24-24 24H88c-13.25 0-24-10.7-24-24V320h64zm64 0v144c0 8.8-7.2 16-16 16s-16-7.2-16-16V320h32zm96 0v136c0 13.3-10.7 24-24 24h-16c-13.3 0-24-10.7-24-24V320h64zm0-128h-64V56c0-13.25 10.7-24 24-24h16c13.3 0 24 10.75 24 24v136zm96 128v136c0 13.3-10.7 24-24 24h-16c-13.3 0-24-10.7-24-24V320h64zm0-128h-64V56c0-13.25 10.7-24 24-24h16c13.3 0 24 10.75 24 24v136zm96 128v144c0 8.8-7.2 16-16 16s-16-7.2-16-16V320h32zm0-128h-32V48c0-8.84 7.2-16 16-16s16 7.16 16 16v144zm96 128v136c0 13.3-10.7 24-24 24h-16c-13.3 0-24-10.7-24-24V320h64zm0-128h-64V56c0-13.25 10.7-24 24-24h16c13.3 0 24 10.75 24 24v136zm-384 0h-32V48c0-8.84 7.2-16 16-16s16 7.16 16 16v144z"
    />
    <path
      d="M0 256c0-13.3 10.75-24 24-24h592c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.25 0-24-10.7-24-24z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgBarcodeScan;
