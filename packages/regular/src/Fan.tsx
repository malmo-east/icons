import * as React from "react";
import { SVGProps } from "react";

const SvgFan = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M255.1 223.1c-17.62 0-31.1 14.38-31.1 32s14.38 32 31.1 32 31.1-14.38 31.1-32-12.6-32-31.1-32zm256.6 42C500.95 180.22 428.72 116 343.5 116c-14.25 0-28.37 1.125-42.49 3.625l7.748-77.13c1.125-11.75-3.125-23.38-11.62-31.62s-20.37-12.12-31.99-10.5C180.1 10.99 116 83.24 116 168.5c0 14.25 1.125 28.5 3.623 42.5l-77.073-7.8c-11.62-1.25-23.24 3-31.37 11.38-8.373 8.502-12.37 20.5-10.87 32.25 10.75 85 82.98 149.1 168.2 149.1 14.25 0 28.37-1.125 42.49-3.625l-7.7 77.195c-1.25 11.62 3 23.25 11.37 31.38C222 508 231.8 512 242 512c1.623 0 3.373-.125 4.998-.25 84.86-10.75 148.1-83 148.1-168.3 0-14.25-1.125-28.38-3.623-42.5l77.11 7.875c11.62 1.125 23.25-3.125 31.37-11.5C509.2 288.9 513.2 276.1 511.7 265.1zm-161.6-16.5c-11.73-1.184-20.67 10.29-16.65 21.37l4.328 11.95c6.748 18.62 10.25 39.38 10.25 61.63 0 57.25-40.49 106.5-95.85 118.6l11.32-112.1c1.184-11.73-10.29-20.67-21.37-16.65l-11.94 4.328c-18.62 6.875-39.37 10.25-61.61 10.25-57.24 0-106.3-40.5-118.6-95.88l112 11.32c11.73 1.186 20.67-10.29 16.65-21.37L174.3 230.1c-6.8-18.6-10.3-39.4-10.3-61.6 0-57.25 40.49-106.4 95.85-118.6l-11.25 112c-1.184 11.73 10.29 20.67 21.37 16.65l11.94-4.326c18.62-6.75 39.37-10.25 61.61-10.25 57.24 0 106.5 40.5 118.6 95.88L350.1 248.6z" />
  </svg>
);

export default SvgFan;
