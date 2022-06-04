import * as React from "react";
import { SVGProps } from "react";

const SvgIgloo = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="igloo_svg__fa-primary"
      d="M320 33.76c10.9 1.2 21.5 3 32 5.38V160h175.5c6.8 10.2 13.1 20.9 18.6 32H480v128h96v32H384v128h-32V352c0-35.3-28.7-64-64-64s-64 28.7-64 64v128h-32V352H0v-32h96V192H29.94c5.51-11.1 11.71-21.8 18.56-32H320V33.76zM197.5 320c13.1-37.3 48.7-64 90.5-64s77.4 26.7 90.5 64H448V192H128v128h69.5z"
    />
    <path
      d="M288 32c10.8 0 21.5.6 32 1.76V160H48.5C100.2 82.82 188.1 32 288 32zm239.5 128H352V39.14C424.9 55.67 487.2 99.82 527.5 160zM0 320c0-46 10.77-89.4 29.94-128H96v128H0zm197.5 0H128V192h320v128h-69.5c-13.1-37.3-48.7-64-90.5-64s-77.4 26.7-90.5 64zM576 352v80c0 26.5-21.5 48-48 48H384V352h192zM48 480c-26.51 0-48-21.5-48-48v-80h192v128H48zm528-160h-96V192h66.1c19.1 38.6 29.9 82 29.9 128z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgIgloo;
