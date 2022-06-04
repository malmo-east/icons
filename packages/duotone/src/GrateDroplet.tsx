import * as React from "react";
import { SVGProps } from "react";

const SvgGrateDroplet = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="grate-droplet_svg__fa-primary"
      d="M482.6 205.8c-5.031-18.05-31.5-18.83-37.19 0C415.7 304.3 352 331.2 352 400.7c0 61.5 50.1 111.3 112 111.3s112-49.84 112-111.3c0-69.9-63.5-95.8-93.4-194.9z"
    />
    <path
      d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h280.2c-16.1-22.7-24.2-50-24.2-79.3 0-37.73 14.8-65.7 32-91.31V288h14.82c17.79-25.07 35.88-51.44 47.95-91.42C419.8 180 432.3 167.7 448 162.6V96c0-35.35-28.7-64-64-64zM96 416H64V288h32v128zm0-192H64V96h32v128zm96 192h-32V288h32v128zm0-192h-32V96h32v128zm96 192h-32V288h32v128zm0-192h-32V96h32v128zm96 0h-32V96h32v128z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgGrateDroplet;
