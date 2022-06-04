import * as React from "react";
import { SVGProps } from "react";

const SvgPresentationScreen = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="presentation-screen_svg__fa-primary"
      d="M543.1 0h-512C14.33 0 0 14.33 0 31.1s14.33 32.01 31.1 32.01h512c18.6.9 32.9-13.43 32.9-31.1S561.7 0 543.1 0zM320 386.8v-34.75h-64v34.75l-75.3 75.3c-6.25 6.25-6.271 16.46-.02 22.71l22.54 22.54c6.25 6.251 16.48 6.249 22.73-.002L288 445.3l61.1 62.01c6.25 6.251 16.48 6.252 22.73.002l22.54-22.54c6.25-6.251 6.229-16.46-.02-22.71L320 386.8z"
    />
    <path
      d="M512 352H64c-17.62 0-32-14.3-32-32l-.9-255.99H96v224h384v-224h63.1L544 320c0 17.7-14.4 32-32 32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgPresentationScreen;
