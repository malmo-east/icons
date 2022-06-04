import * as React from "react";
import { SVGProps } from "react";

const SvgCartFlatbedSuitcase = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="cart-flatbed-suitcase_svg__fa-primary"
      d="M512 96h-32v224h32V96zm-224 0h-32v224h32V96zm352 319.1c0 17.6-14.4 32-32 31.1H96c-17.6 1.8-32-12.6-32-31.1V80c0-8.84-7.16-16-16-16H31.1C14.4 64 0 49.6 0 32S14.4 0 31.1 0H64c35.2 0 64 28.8 64 64v320h480c17.6 0 32 14.4 32 31.1z"
    />
    <path
      d="M480 48c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v272h192V48zm-48 48h-96V48h96v48zM224 320h32V96h-32c-17.6 0-32 14.4-32 32v160c0 17.6 14.4 32 32 32zm352-32V128c0-17.62-14.38-32-32-32h-32v224h32c17.6 0 32-14.4 32-32zM253.1 447.1c1.6 5 2.9 11.3 2.9 16.9 0 26.5-21.5 48-48 48s-48-21.5-48-48c0-5.625 1.153-11 2.903-16H253.1zm288.1 0c1.625 5 2.889 10.38 2.889 16 0 26.5-21.51 48-48.01 48s-47.99-21.5-47.99-48c0-5.625 1.168-11 2.918-16H541.2z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgCartFlatbedSuitcase;
