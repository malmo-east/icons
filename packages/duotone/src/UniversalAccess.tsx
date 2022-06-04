import * as React from "react";
import { SVGProps } from "react";

const SvgUniversalAccess = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="universal-access_svg__fa-primary"
      d="M256 160c22.09 0 40-17.91 40-40s-17.9-40-40-40-40 17.91-40 40 17.9 40 40 40zm135.1 25.4c-3.656-12.75-16.97-20.25-29.67-16.47l-59.25 16.94a167.931 167.931 0 0 1-92.31 0L150.6 168.9c-12.7-3.7-26 3.8-29.7 16.5s3.734 26.03 16.48 29.66l59.25 16.97c3.77 1.07 7.57 1.57 11.37 2.37v62.29l-30.64 87.34c-4.391 12.5 2.188 26.19 14.69 30.59 2.65.98 5.35 1.38 7.95 1.38 9.906 0 19.19-6.188 22.64-16.06l25.85-70.65c2.562-7.002 12.46-7.002 15.03 0l25.85 70.65C292.8 409.8 302.1 416 312 416c2.641 0 5.312-.438 7.953-1.344 12.5-4.406 19.08-18.09 14.69-30.59L304 296.7v-62.3c3.8-.8 7.6-1.3 11.3-2.4l59.25-16.94c12.75-3.66 20.15-16.86 16.55-29.66z"
    />
    <path
      d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 80c22.09 0 40 17.91 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm118.6 135.1L315.3 232c-3.7 1.1-7.5 1.6-11.3 2.4v62.32l30.64 87.34c4.391 12.5-2.188 26.19-14.69 30.59-2.65.95-5.35 1.35-7.95 1.35-9.906 0-19.19-6.188-22.64-16.06l-25.85-70.65c-2.562-7.002-12.46-7.002-15.03 0l-25.85 70.65C219.2 409.8 209.9 416 200 416c-2.641 0-5.312-.438-7.953-1.344-12.5-4.406-19.08-18.09-14.69-30.59L208 296.7v-62.3c-3.8-.8-7.6-1.3-11.3-2.4l-59.3-16.9c-12.7-3.7-20.1-16.9-16.5-29.7s17-20.2 29.7-16.5l59.25 16.94a167.931 167.931 0 0 0 92.31 0l59.25-16.94c12.7-3.781 26.02 3.719 29.67 16.47 3.62 12.83-3.78 26.03-16.48 29.73z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgUniversalAccess;
