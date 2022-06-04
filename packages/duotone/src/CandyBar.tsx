import * as React from "react";
import { SVGProps } from "react";

const SvgCandyBar = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="candy-bar_svg__fa-primary"
      d="M0 352h128v96H32c-8.49 0-16.63-3.4-22.628-9.4C3.371 432.6 0 424.5 0 416v-64zm80-224c17.36-.1 34.2-5.8 48-16.4V192H47.65A79.362 79.362 0 0 0 64 144v-16h16zM0 224h128v96H0v-96zM288 64v128H160V64h128zM160 224h128v96H160v-96zm0 128h128v96H160v-96z"
    />
    <path
      d="M288 448V64h304c12.7 0 24.9 5.06 33.9 14.06S640 99.27 640 112v288c0 12.7-5.1 24.9-14.1 33.9S604.7 448 592 448H288z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgCandyBar;
