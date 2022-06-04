import * as React from "react";
import { SVGProps } from "react";

const SvgTrafficLightGo = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path
      className="traffic-light-go_svg__fa-primary"
      d="M256 0c35.3 0 64 28.65 64 64v288c0 88.4-71.6 160-160 160C71.63 512 0 440.4 0 352V64C0 28.65 28.65 0 64 0h192zm-96 320c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48zm0-32c26.5 0 48-21.5 48-48s-21.5-48-48-48-48 21.5-48 48 21.5 48 48 48zm0-224c-26.5 0-48 21.49-48 48 0 26.5 21.5 48 48 48s48-21.5 48-48c0-26.51-21.5-48-48-48z"
    />
    <path
      d="M160 416c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgTrafficLightGo;
