import * as React from "react";
import { SVGProps } from "react";

const SvgFaceThermometer = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M288 47.1c-114.9 0-208 94-208 208C80 370.9 173.1 464 288 464c65.9 0 124.7-30.7 162.8-78.5 1.5-1.3 2.9-2.6 4.4-4l84.8-80.4C518.8 420.1 414 512 288 512 146.6 512 32 397.4 32 256S146.6 0 288 0c97 0 181.4 53.96 224.8 133.5-16.5-.3-33 4.4-47.3 14.1C428.1 87.84 363.1 48 288 48v-.9zm257.9 204.4L415.1 376.1c-2 4.1-3.4 8-6.8 11.2-9.8 9-25 8.3-33.9-1.4-15.2-16.4-41.2-33.9-78.4-33.9s-63.2 17.5-78.4 33.9c-8.9 9.7-24.1 10.4-33.9 1.4-10.6-9-10.3-24.2-1.3-33.9 21.9-23.9 59.9-50.3 113.6-50.3 16.2 0 31.1 3.2 44.4 7.2l135.7-130.9c20.5-18.8 51.5-19.3 70.7.7 19.8 19 19.4 52.1-.9 71.4zm-116.5 66.8-5.9-5.8c-4.7-4.7-4.7-12.3 0-17 4.7-4.7 12.3-4.7 17 0l6.2 6.3 15.4-14.7-6.6-6.6c-4.7-4.7-4.7-12.3 0-17 4.7-4.7 12.3-4.7 17 0l7 7.1 15.4-14.7-7.4-7.4c-4.7-4.7-4.7-12.3 0-17 4.7-4.7 12.3-4.7 17 0l7.8 7.8 11.5-10.9c7.3-7 7.4-18.5.3-25.6-6.8-6.9-18-7-25-.3L372.5 323.9c11.2 6.3 20.8 13.6 28.8 21.1l28.1-26.7zm-253-111.2c0-16.8 14.3-32 32-32 17.6 0 32 15.2 32 32 0 18.6-14.4 32-32 32-17.7 0-32-13.4-32-32zm224 0c0 18.6-14.4 32-32 32-17.7 0-32-13.4-32-32 0-16.8 14.3-32 32-32 17.6 0 32 15.2 32 32z" />
  </svg>
);

export default SvgFaceThermometer;
