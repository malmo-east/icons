import * as React from "react";
import { SVGProps } from "react";

const SvgStandardDefinition = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M512 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h448c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zm48 384c0 26.47-21.53 48-48 48H64c-26.47 0-48-21.53-48-48V96c0-26.47 21.53-48 48-48h448c26.47 0 48 21.53 48 48v320zM384 160h-64c-4.406 0-8 3.578-8 8v176c0 4.422 3.594 8 8 8h64c52.94 0 96-43.06 96-96s-43.1-96-96-96zm0 176h-56V176h56c44.13 0 80 35.89 80 80s-35.9 80-80 80zm-190.2-87.8-9.5-2.3c-40.7-9.7-60.4-18.8-55.6-41.7 4.594-21.55 36.84-32.38 80.66-26.73 9.188 1.172 20.16 3.594 34.47 7.609 4.17 1.121 8.67-1.279 9.87-5.579 1.219-4.266-1.281-8.672-5.531-9.875C233.1 165.4 221.4 162.8 211.4 161.6c-53-6.7-91.8 8.6-98.3 39.3-9 42.3 38 53.8 67.5 60.6l9.594 2.25c44.13 10.3 70.56 18.41 65.13 44.08-4.594 21.55-36.91 32.2-80.69 26.73-14.38-1.766-30.75-6.578-45.22-10.83l-7.156-2.094c-4.438-1.297-8.719 1.234-9.906 5.469-1.219 4.234 1.219 8.672 5.469 9.906l7.094 2.062c15.03 4.422 32.09 9.438 47.75 11.36 8.312 1.062 16.28 1.578 23.84 1.578 40.66 0 68.97-15.02 74.44-40.88C280 268.3 234.2 257.6 193.8 248.2z" />
  </svg>
);

export default SvgStandardDefinition;
