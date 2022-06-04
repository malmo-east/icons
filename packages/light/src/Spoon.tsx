import * as React from "react";
import { SVGProps } from "react";

const SvgSpoon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M449.5 241.2c-11.8 13.6-26.2 24.6-42.4 32.5-17 7.9-33.7 12.4-51.7 13.4-4.7 0-9.3-.4-14-1-22.4-4-42.9-16-58.5-31.8l-1.3-1.3L27.33 507.3c-3.01 3-7.08 4.7-11.33 4.7s-8.323-1.7-11.327-4.7A16.03 16.03 0 0 1-.019 496c0-4.2 1.687-8.3 4.692-11.3L258.1 230.4l-1.4-2.3c-16.6-15.6-28.6-36.1-32.6-58.5-.9-20.3 2.3-40.7 10.1-59.5 7.8-18.84 20.1-35.49 35.7-48.56C305.5 23.81 354.3 1.411 406.1-.928c14.1-.458 28.1 1.902 41.2 6.941 13.2 5.037 25.2 12.657 35.4 22.407 49.6 49.6 34.7 144.88-33.2 212.78zM460 51.04a75.118 75.118 0 0 0-53.9-19.97c-43.3 2.43-84 21.44-113.7 53.09-11.9 9.7-22.3 22.14-27.6 36.14-6.3 14.1-9.1 29.5-8.2 44.9 3.1 15.4 11 29.6 22.6 40.3l26.2 26.2c10.8 11.6 24.9 19.6 40.4 22.7 3.2.5 6.4.7 9.6.7 13.8-2 27.1-4.9 39.4-12 12.3-5.4 22.3-14 32.1-24.5 54.4-54.4 69.6-131.14 33.1-167.56z" />
  </svg>
);

export default SvgSpoon;
