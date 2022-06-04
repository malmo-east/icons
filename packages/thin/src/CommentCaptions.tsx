import * as React from "react";
import { SVGProps } from "react";

const SvgCommentCaptions = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M151.1 303.1h-48c-4.406 0-8 3.594-8 8s3.594 8 8 8h48c4.406 0 8-3.594 8-8s-2.7-8-8-8zm72-56c0-4.406-3.608-7.999-8.014-7.999L71.1 239.1c-4.406 0-8 3.594-8 8s3.594 8 8 8h143.1c6.2 0 8.9-2.7 8.9-8zm88 56h-112c-4.406 0-7.1 3.594-7.1 8s3.594 8 7.1 8h112c4.406 0 8-3.594 8-8s-2.7-8-8-8zm96 0h-48c-4.406 0-8 3.594-8 8s3.594 8 8 8h48c4.406 0 8-3.594 8-8s-2.7-8-8-8zm32-64h-176c-4.406 0-8 3.594-8 8s3.594 8 8 8h176c4.406 0 8-3.594 8-8s-2.7-8-8-8zM256 31.1C114.6 31.1.9 124.19.9 239.1c0 49.59 21.38 95.03 56.97 130.7-12.5 50.39-54.27 95.27-54.77 95.77-2.188 2.297-2.781 5.734-1.5 8.734 1.312 3 4.083 4.766 7.271 4.766 66.31 0 116-31.78 140.6-51.39 32.72 12.31 68.99 19.39 107.4 19.39 141.4 0 255.1-93.09 255.1-207.1S397.4 31.1 256 31.1zm-.9 400c-35.12 0-69.36-6.184-101.8-18.38l-8.508-3.201-7.105 5.666c-20.2 16.11-60.14 42.04-112.7 47.06 14.44-18.29 37.42-51.68 46.57-88.59l2.172-8.758-6.371-6.391C34.1 325.1 15.1 283.8 15.1 239.1c0-105.9 107.7-192 240-192s240 86.13 240 192-106.8 192-240 192z" />
  </svg>
);

export default SvgCommentCaptions;
