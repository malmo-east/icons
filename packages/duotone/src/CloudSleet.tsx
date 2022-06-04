import * as React from "react";
import { SVGProps } from "react";

const SvgCloudSleet = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="cloud-sleet_svg__fa-primary"
      d="M128 320h319.1c53.9 0 96.9-43 96.9-96s-42.1-96-95.1-96c-.625 0-1.125.25-1.625.25C447.5 123 448 117.6 448 112c0-44.25-35.75-80-79.1-80-24.62 0-46.25 11.25-60.1 28.75C288.4 24.75 251.3 0 208 0 146.1 0 96 50.13 96 112c0 7.25.751 14.25 2.126 21.25C59.76 145.8 32.01 181.5 32.01 224c0 53 43 96 95.99 96z"
    />
    <path
      d="M113.5 353.9c-12.19-5.219-26.3.406-31.52 12.59l-47.1 112c-6.16 12.21-.52 26.31 11.67 31.61 3.08 1.3 6.28 1.9 9.44 1.9 9.312 0 18.17-5.438 22.08-14.53l47.1-112c6.13-12.17.43-26.27-11.67-31.57zm272 0c-12.22-5.219-26.28.406-31.52 12.59l-47.1 112c-5.219 12.19.422 26.31 12.61 31.53 2.11 1.38 5.31 1.98 7.61 1.98 9.312 0 18.17-5.438 22.08-14.53l47.1-112c7.02-12.17 1.32-26.27-10.78-31.57zM520 392h-15.1v-16c0-13.25-10.75-24-23.1-24-13.25 0-23.1 10.75-23.1 24v16h-15.1c-13.25 0-23.1 10.75-23.1 24s10.75 24 23.1 24h15.1v16c0 13.25 10.75 24 23.1 24 13.25 0 23.1-10.75 23.1-24v-16H520c13.3 0 24-10.7 24-24s-10.7-24-24-24zm-256 0h-16v-16c0-13.25-10.75-24-23.1-24S200 362.8 200 376v16h-16c-13.25 0-23.1 10.75-23.1 24s10.75 24 23.1 24h16v16c0 13.25 10.75 24 23.1 24s23.1-10.75 23.1-24v-16h15.1c13.25 0 23.1-10.75 23.1-24s-7.1-24-20.4-24z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgCloudSleet;