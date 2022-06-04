import * as React from "react";
import { SVGProps } from "react";

const SvgChestnut = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M302.9 99.43c-25.37-20.56-49.36-39.98-66.48-61.41C233.2 34.01 228.6 32 224 32s-9.2 2.01-12.5 6.02c-17.1 21.43-41.1 40.85-66.4 61.41C80.44 151.7 0 216.8 0 352c0 70.7 57.31 128 128 128h192c70.69 0 128-57.3 128-127.1 0-136.1-80.4-201.2-145.1-253.47zM155.4 111.6c25.93-21.01 50.41-40.86 68.59-63.56 18.14 22.67 42.64 42.54 68.9 63.82C358.1 164.7 432 224.5 432 352c0 5.471-.852 10.71-1.617 15.98H17.62C16.85 362.7 16 357.5 16 352c0-127.5 73.9-187.3 139.4-240.4zM320 464H128c-50.57 0-92.92-33.9-106.8-80h405.6c-13.9 46.1-56.2 80-106.8 80z" />
  </svg>
);

export default SvgChestnut;