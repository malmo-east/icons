import * as React from "react";
import { SVGProps } from "react";

const SvgPersonCircleQuestion = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="person-circle-question_svg__fa-primary"
      d="M576 368c0 79.5-64.5 144-144 144s-144-64.5-144-144 64.5-144 144-144 144 64.5 144 144zm-144 48c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zm-22.4-136c-23 0-41.6 18.6-41.6 41.6v6.4c0 8.8 7.2 16 16 16s16-7.2 16-16v-6.4c0-5.3 4.3-9.6 9.6-9.6h40.5c7.7 0 13.9 6.2 13.9 13.9 0 5.2-2.9 9.9-7.4 12.4l-32 16.8c-5.3 2.8-8.6 8.2-8.6 14.1V384c0 8.8 7.2 16 16 16s16-7.2 16-16v-5.1l23.5-12.3c15.1-8 24.5-24.5 24.5-40.7 0-25.3-20.6-45.9-45.9-45.9h-40.5z"
    />
    <path
      d="M112 48c0-26.51 21.5-48 48-48s48 21.49 48 48-21.5 48-48 48-48-21.49-48-48zm8 464c-17.7 0-32-14.3-32-32V256.9l-28.57 47.6c-9.1 15.1-28.76 20-43.91 10.9-15.15-9.1-20.051-28.7-10.947-43.9l58.277-96.9C80.2 145.7 111.4 128 145.1 128h29.8c33.7 0 64.9 17.7 82.3 46.6l44.9 74.7c-17 17.6-28.7 38.4-36.6 61.5-1.9-1.9-4.4-4-4.9-6.3L232 256.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V352h-16v128c0 17.7-14.3 32-32 32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgPersonCircleQuestion;