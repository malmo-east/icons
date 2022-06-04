import * as React from "react";
import { SVGProps } from "react";

const SvgEnvelopesBulk = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="envelopes-bulk_svg__fa-primary"
      d="M191.9 448.6a47.726 47.726 0 0 1-27.78-8.891L32 340.2V480c0 17.62 14.38 32 32 32h256c17.62 0 32-14.38 32-32V340.2l-131.8 99.3a48.4 48.4 0 0 1-28.3 9.1zM320 256H64c-17.62 0-32 14.4-32 32v12.18l151 113.8c5.25 3.719 12.7 3.734 18.27-.25L352 300.2V288c0-17.6-14.4-32-32-32zm160-32v64h64v-64h-64z"
    />
    <path
      d="M192 192c0-35.25 28.75-64 64-64h224V32c0-17.62-14.38-32-32-32H128c-17.6 0-32 14.38-32 32v192h96v-32zm384-32H256c-17.6 0-32 14.4-32 32v32h96c33.25 0 60.63 25.38 63.75 57.88L384 416h192c17.62 0 32-14.38 32-32V192c0-17.6-14.4-32-32-32zm-32 128h-64v-64h64v64zM183 413.9 32 300.2v40.06l132.1 99.51a47.733 47.733 0 0 0 27.78 8.891c9.859 0 19.78-3.031 28.33-9.141L352 340.2v-40L201.3 413.7c-5.6 4-13 4-18.3.2z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgEnvelopesBulk;
