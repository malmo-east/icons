import * as React from "react";
import { SVGProps } from "react";

const SvgRacquet = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M640 140C640 31.37 543.6 0 485.4 0c-49.53 0-103.9 16.92-152.3 50.4-130.3 90.2-81.3 157.1-165.1 265.7-.2-.2-5.5-3-13.9-3-5.151 0-11.35 1.325-17.69 5.738l-123.6 86.73C4.756 411.8 0 421.7 0 431.8c0 6.349 1.878 12.76 5.786 18.36l33.75 48.12C45.91 507.4 55.77 512 65.7 512c6.439 0 12.9-1.931 18.46-5.815l123.6-86.48c8.917-6.207 13.15-15.98 13.15-26.01 0-1.077-.049-2.157-.146-3.236 29.65-9.027 60.25-14.01 91.23-14.01 31.38 0 37.9 4.144 62.71 4.144 49.17 0 103.2-16.63 151.9-50.38C598.7 280.3 640 206.4 640 140zM207.9 343.1c9.9-12 18.4-25.6 26.4-39.5 8.5 16.75 12.63 20.5 21 29.62-15.9 2.48-31.6 5.98-47.4 9.88zm383.9-202.3c0 49.05-31.44 107.7-92.53 149.9-38.98 27.05-83.16 41.88-124.5 41.88-87.47 0-106.9-56.76-106.9-92.42 0-49.32 31.71-108.3 92.31-150.3 56.63-39.12 106-41.87 126.6-41.87h7.5-7.38c70.6.8 104.9 41.58 104.9 92.81z" />
  </svg>
);

export default SvgRacquet;