import * as React from "react";
import { SVGProps } from "react";

const SvgTicket = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="ticket_svg__fa-primary"
      d="M448 128c17.7 0 32 14.3 32 32v192c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h320zm0 32H128v192h320V160z"
    />
    <path
      d="M128 160h320v192H128V160zm384-96c35.3 0 64 28.65 64 64v80c-26.5 0-48 21.5-48 48s21.5 48 48 48v80c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64v-80c26.51 0 48-21.5 48-48s-21.49-48-48-48v-80c0-35.35 28.65-64 64-64h448zM96 352c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32H128c-17.7 0-32 14.3-32 32v192z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgTicket;
