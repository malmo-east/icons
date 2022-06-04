import * as React from "react";
import { SVGProps } from "react";

const SvgBullseyeArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M319.1 24.37C298.1 18.91 277.8 16 256 16 123.5 16 16 123.5 16 256s107.5 240 240 240 240-107.5 240-240c0-21.8-2.9-43-8.4-63.1l12.9-12.9c6.6 24 11.5 49.5 11.5 76 0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0c26.5 0 51.1 4.012 75.1 11.46l-12 12.91zm102 205.33c2.2 8.6 2.9 17.4 2.9 26.3 0 92.8-75.2 168-168 168S88 348.8 88 256 163.2 88 256 88c8.9 0 17.7.7 26.3 2.04-.1 4.25.2 8.52 1 12.76l.6 3.8c-9.1-1.7-18.4-2.6-27.9-2.6-83.9 0-152 68.1-152 152s68.1 152 152 152 152-68.1 152-152c0-9.5-.9-18.8-2.6-27.9l3.8.6c4.2.8 8.5 1.1 11.9 1zM256 184c4.8 0 9.5.5 14.1 1.4L255.4 200c-30.6.3-55.4 25.3-55.4 55.1 0 31.8 25.1 56 56 56 30.7 0 55.7-23.9 55.1-54.5l15.5-14.7c.9 4.6 1.4 9.3 1.4 14.1 0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72zm5.7 77.7a8.15 8.15 0 0 1-11.4 0 8.15 8.15 0 0 1 0-11.4l77.1-77-12.6-75.74c-2.1-12.74 2.1-25.73 10.3-34.86l51.5-50.61c8.7-8.686 23.5-4.747 26.7 7.1l19.2 70.29 70.3 19.22c11.9 3.2 15.8 18 7.1 26.7L449.3 186c-9.1 9.1-22.1 13.3-34.9 11.2l-75.7-12.6-77 77.1zM387.9 23.4l-50.6 50.61c-5.5 5.48-8 13.27-6.7 20.92l10.7 64.47 65.8-65.77-19.2-70.23zm29.2 158c7.6 1.3 15.4-1.2 20-6.7l51.5-50.6-70.2-19.2-65.8 65.8 64.5 10.7z" />
  </svg>
);

export default SvgBullseyeArrow;