import * as React from "react";
import { SVGProps } from "react";

const SvgMailbox = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="mailbox_svg__fa-primary"
      d="M512 208v64c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-48h-48c-8.8 0-16-7.2-16-16s7.2-16 16-16h96c8.8 0 16 7.2 16 16zm-224 0v208c0 17.7-14.3 32-32 32H32c-17.6 0-32-14.4-32-32V214.2C0 139 54.95 71.86 129.8 64.68 215.7 56.45 288 123.8 288 208zm-64 0c0-8.8-7.2-16-16-16H80c-8.84 0-16 7.2-16 16s7.16 16 16 16h128c8.8 0 16-7.2 16-16z"
    />
    <path
      d="M576 208v208c0 17.6-14.4 32-32 32H256c17.7 0 32-14.3 32-32V208c0-79.1-64.1-142.56-143.1-143.16-.3-.24-.6-.62-.9-.84h288c79.5 0 144 64.5 144 144zm-64 0c0-8.8-7.2-16-16-16h-96c-8.8 0-16 7.2-16 16s7.2 16 16 16h48v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-64z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgMailbox;
