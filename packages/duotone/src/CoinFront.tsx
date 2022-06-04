import * as React from "react";
import { SVGProps } from "react";

const SvgCoinFront = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="coin-front_svg__fa-primary"
      d="M64 256c0-106.9 85.1-192 192-192 106 0 192 85.1 192 192 0 106-86 192-192 192-106.9 0-192-86-192-192zm192 160c88.4 0 160-71.6 160-160S344.4 96 256 96 96 167.6 96 256s71.6 160 160 160z"
    />
    <path
      d="M96 256c0-88.4 71.6-160 160-160s160 71.6 160 160-71.6 160-160 160S96 344.4 96 256zm184-72c0-13.3-10.7-24-24-24s-24 10.7-24 24v144c0 13.3 10.7 24 24 24s24-10.7 24-24V184zm232 72c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0s256 114.6 256 256zM256 448c106 0 192-86 192-192 0-106.9-86-192-192-192-106.9 0-192 85.1-192 192 0 106 85.1 192 192 192z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgCoinFront;
