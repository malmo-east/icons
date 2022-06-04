import * as React from "react";
import { SVGProps } from "react";

const SvgSunset = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M568 504H8c-4.406 0-8 3.6-8 8s3.594 8 8 8h560c4.406 0 8-3.578 8-8s-3.6-8-8-8zM80.22 468.6c2.5 3.625 7.5 4.469 11.12 2.016a7.997 7.997 0 0 0 2-11.14l-52.03-75.02c-2.031-2.938-1.188-5.812-.75-6.906.469-1.109 1.906-3.734 5.437-4.375L155 353.4a8 8 0 0 0 6.438-6.453l19.72-109C181.8 234.5 184.4 233 185.5 232.6c1.1-.5 3.9-1.4 6.9.7l91 63.16a7.996 7.996 0 0 0 9.125 0l91-63.16c2.969-2.094 5.844-1.219 6.938-.75 1.094.453 3.719 1.906 4.344 5.422l19.72 109a8 8 0 0 0 6.438 6.453l108.1 19.7c3.532.64 4.969 3.266 5.438 4.375.437 1.094 1.281 3.969-.75 6.906l-52.03 75.02c-2.531 3.641-1.625 8.625 2 11.14C486.1 471.5 487.6 472 489.2 472c2.531 0 5.031-1.203 6.562-3.438l52.03-75.02c4.531-6.531 5.438-14.81 2.406-22.16s-9.531-12.58-17.34-14l-103.6-18.72-18.72-103.5a23.17 23.17 0 0 0-13.97-17.36c-7.406-3-15.66-2.141-22.19 2.375L288 280.2l-86.44-60c-6.56-4.6-14.76-5.4-22.16-2.4-7.4 3-12.6 9.5-14 17.3l-18.72 103.5-103.55 18.8c-7.812 1.422-14.31 6.656-17.34 14s-2.125 15.62 2.406 22.16L80.22 468.6zM288 360c-58.84 0-108.8 44.28-116.3 103-.563 4.375 2.562 8.375 6.938 8.938 4.625.484 8.406-2.578 8.938-6.938C194 414.3 237.2 376 288 376s93.97 38.27 100.4 89c.5 4.047 3.969 7 7.938 7 .312 0 .656-.016 1-.063 4.375-.562 7.5-4.562 6.938-8.938C396.8 404.3 346.8 360 288 360zm-5.4-138.1c1.5 1.4 3.5 2.1 5.4 2.1s3.875-.703 5.406-2.109l96-88c3.25-2.984 3.469-8.047.5-11.3-3-3.266-8.062-3.484-11.31-.484L296 197.8V8c0-4.422-3.6-8-8-8s-8 3.578-8 8v189.8l-82.6-75.7c-3.219-3-8.281-2.781-11.31.484-2.99 3.216-2.79 8.316.51 11.316l96 88z" />
  </svg>
);

export default SvgSunset;