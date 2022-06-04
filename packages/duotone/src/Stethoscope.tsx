import * as React from "react";
import { SVGProps } from "react";

const SvgStethoscope = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="stethoscope_svg__fa-primary"
      d="M332.7 13.09 269.8.477c-12.96-2.607-25.56 5.803-28.16 18.77-.002.016.004-.015 0 0L238.4 34.99c-2.607 12.96 5.849 25.61 18.81 28.22.016.004-.016-.002 0 0l30.69 6.059L288 192c0 53.02-42.98 96-96 96s-96.06-43.9-96.06-96.1l-.05-122.53 30.72-6.112C139.6 60.68 147.1 48.07 145.4 35.1c-.004-.018.004.018 0 0l-3.1-15.73C139.7 6.397 127.1-1.997 114.1.581c-.018.004.018-.004 0 0L51.28 12.99C40.06 15.27 32.02 25.15 32 36.59v155.4C32 280.2 103.8 352 192 352s160-71.78 160-160V36.59c-.9-11.43-8.1-21.26-19.3-23.5zM480 112c-44.18 0-80 35.82-80 80s35.8 80 80 80c44.18 0 80-35.81 80-79.1S524.2 112 480 112zm0 104c-13.23 0-24-10.77-24-24s10.8-24 24-24c13.23 0 24 10.77 24 24s-10.8 24-24 24z"
    />
    <path
      d="M512 265.3v78.75c0 92.6-79 168-176 168-95.39 0-173.3-72.82-175.9-163.2l.534.044C170.8 350.9 181.3 352 192 352s21.2-1.143 31.35-3.17l.871-.044c2.701 55.1 51.89 99.23 111.9 99.23 61.8 0 112-46.7 112-104V265.3A78.718 78.718 0 0 0 480 272c11.4 0 22.2-2.5 32-6.7z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgStethoscope;