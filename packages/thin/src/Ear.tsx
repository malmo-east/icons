import * as React from "react";
import { SVGProps } from "react";

const SvgEar = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M192 0C85.1 0 0 86 0 192v176c0 79.5 64.5 144 144 144s144-64.5 144-144v-9.875C345.4 324.9 384 263 384 192 384 86 297.1 0 192 0zm87.1 344.3-7.1 4.6V368c0 70.58-57.42 128-128 128S16 438.58 16 368V192C16 94.95 94.95 16 192 16s176 78.95 176 176c0 62.5-33.7 120.8-88.9 152.3zm1-245.19c-25.7-24.41-59.3-36.81-94.96-34.94C118.3 67.7 64 128.1 64 198.8V256h22.06c14.34 0 25.94 11.6 25.94 25.9 0 6.906-2.703 13.44-7.594 18.34l-38.06 38.06a7.994 7.994 0 0 0 0 11.31C67.91 351.2 69.95 352 72 352s4.094-.781 5.656-2.344l38.06-38.06A41.874 41.874 0 0 0 128 281.9c0-23.1-18.8-41.9-41.94-41.9H80v-41.2c0-62.34 47.53-115.6 105.1-118.6 30.78-1.906 60.59 9.219 83.11 30.56C291.6 132.1 304 160.1 304 192c0 4.406 3.578 8 8 8s8-3.6 8-8c0-35.5-14.2-68.5-39.9-92.89z" />
  </svg>
);

export default SvgEar;
