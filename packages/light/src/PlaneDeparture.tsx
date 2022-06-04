import * as React from "react";
import { SVGProps } from "react";

const SvgPlaneDeparture = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="m379.5 137.6 81.8-41.82C481.6 85.41 504 80 526.8 80h61.1c36 0 59.9 37.3 44.8 70-18.5 40-50 72.5-89.4 92.2L269.9 378.9c-6.7 3.4-14 5.1-21.5 5.1H109.3c-12.78 0-24.98-5.1-33.99-14.1L11.5 306.1c-14.921-14.9-11.57-39.9 6.75-50.4l23.74-13.6c13.27-7.5 29.35-8.3 43.31-3l50.2 23.2 83-42.5-114.4-70.4c-20.84-13.5-18.76-45.8 4.5-56.35l36.9-16.76c19.1-8.7 40.9-9.51 60.6-2.28l173.4 63.59zm-257.6-15.4 161.7 100.3-147.1 75.2-64.19-28.5c-4.66-2.1-10.02-1.8-14.44.7l-23.74 13.6 63.81 63.8c2.96 3 7.06 4.7 11.36 4.7h139.1c2.5 0 5-.6 7.2-1.7L529 213.6c32.9-16.4 59.2-43.6 74.6-77 5.3-11.5-3.1-24.6-15.7-24.6h-61.1c-17.7 0-35.2 4.2-51 12.3l-94.2 48.1-186.5-68.3c-11.8-4.39-24.9-3.9-36.4 1.3l-36.8 16.8zM624 480c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.836 0-16-7.2-16-16s7.164-16 16-16h608zM115.2 107.6l6.7 14.6-6.7-14.6zm-36.39 147 6.49-15.5z" />
  </svg>
);

export default SvgPlaneDeparture;