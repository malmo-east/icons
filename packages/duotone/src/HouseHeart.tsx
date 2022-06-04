import * as React from "react";
import { SVGProps } from "react";

const SvgHouseHeart = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="house-heart_svg__fa-primary"
      d="M565.1 231.9c13.3 11.7 14.6 31.9 3 45.2-11.7 13.3-31.9 14.6-45.2 3L288 74.52 53.07 280.1c-13.3 11.6-33.51 10.3-45.153-3-11.637-13.3-10.289-33.5 3.013-45.2L266.9 7.918c11.2-10.557 30.1-10.557 42.2 0l256 223.982zM276.7 428.7 184 336c-22.1-22.1-22.1-57.9 0-80s57.9-22.1 80 0l24 24 24-24c22.1-22.1 57.9-22.1 80 0s22.1 57.9 0 80l-92.7 92.7c-6.2 6.2-16.4 6.2-22.6 0z"
    />
    <path
      d="m64.07 448-.05-177.5L288 74.52 512.1 270.6l.4 177.3c.1 35.4-28.6 64.1-64 64.1H128.1c-35.36 0-64.01-28.6-64.03-64zm235.23-19.3L392 336c22.1-22.1 22.1-57.9 0-80s-57.9-22.1-80 0l-24 24-24-24c-22.1-22.1-57.9-22.1-80 0s-22.1 57.9 0 80l92.7 92.7c6.2 6.2 16.4 6.2 22.6 0z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgHouseHeart;