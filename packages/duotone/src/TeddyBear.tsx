import * as React from "react";
import { SVGProps } from "react";

const SvgTeddyBear = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="teddy-bear_svg__fa-primary"
      d="M537.7 354.9c-29.34-9.812-61.09 6.062-70.84 35.41L463.6 400h-15.62v-64.83c33.16-23.18 63.23-53.74 88.12-91.67 14.56-22.19 8.375-51.94-13.78-66.47-22.12-14.56-51.9-8.406-66.46 13.78C415.3 252.6 358.4 288 299.6 288h-23.2c-58.8 0-115.7-35.4-156.3-97.2-14.5-22.1-44.21-28.4-66.43-13.8-22.16 14.6-28.34 44.3-13.78 66.5 24.89 37.92 54.96 68.49 88.12 91.67V400H112.4l-3.25-9.719c-9.75-29.34-41.47-45.16-70.84-35.41-29.34 9.781-45.19 41.5-35.4 70.84l16 48C26.51 496.6 47.92 512 72.01 512h431.1c24.09 0 45.5-15.44 53.12-38.28l16-48C582.9 396.4 567 364.7 537.7 354.9zM192 416c0-35.35 28.65-64 63.1-64h63.1c35.34 0 63.1 28.65 63.1 64H192zm96-160c75.11 0 136-59.53 136-132.1 0-39.07-27.2-73.13-65.97-82.61h-.002a295.259 295.259 0 0 0-140.1 0h-.002C179.2 49.9 152 83.96 152 123c0 73.5 60.9 133 136 133zm48-160c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16zm-96 0c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16zm48 32c35.35 0 64 21.49 64 48s-28.7 48-64 48-64-21.5-64-48 28.7-48 64-48zm0 64c17.67 0 32-10.75 32-24 0-13.26-14.33-24-32-24s-32 10.7-32 24 14.3 24 32 24z"
    />
    <path
      d="M217.1 40.43c6.113-1.494 12.34-2.266 18.52-3.363C228.7 15.5 208.2 0 184 0c-30.9 0-56 25.07-56 56 0 20.11 10.69 37.6 26.61 47.48 7.373-30.43 31.27-55.21 63.36-63.05h-.87zM224 176c0 26.5 28.7 48 64 48s63.1-21.49 63.1-48-27.8-48-63.1-48-64 21.5-64 48zm64-32c17.67 0 31.1 10.74 31.1 24 0 13.3-13.4 24-31.1 24s-32-10.7-32-24 14.3-24 32-24zM392 0c-24.25 0-44.7 15.5-52.49 37.06 6.178 1.098 12.4 1.869 18.52 3.363h.002c32.09 7.844 55.98 32.62 63.36 63.05C437.3 93.6 448 76.11 448 56c0-30.93-25.1-56-56-56zm-72.9 352H256c-35.34 0-63.1 28.65-63.1 64H384c-.9-35.3-28.7-64-64.9-64z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgTeddyBear;