import * as React from "react";
import { SVGProps } from "react";

const SvgSimCards = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="sim-cards_svg__fa-primary"
      d="M192 352h16v-48h-48v16c0 17.8 14.3 32 32 32zm16-208h-16c-17.75 0-32 14.25-32 32v16h48v-48zm96 0h-64v48h64v-48zm-64 160v48h64v-48h-64zm96 48h16c17.75 0 32-14.25 32-32v-16h-48v48zm16-208h-16v48h48v-16c0-17.7-14.2-32-32-32zM160 272h224v-48H160v48zm168 240H120C53.83 512 0 458.2 0 392V120c0-13.2 10.75-24 24-24s24 10.8 24 24v272c0 39.7 32.3 72 72 72h208c13.25 0 24 10.75 24 24s-10.7 24-24 24z"
    />
    <path
      d="M336 0H160c-35.2 0-64 28.75-64 64v288c0 35.25 28.75 64 64 64h224c35.25 0 64-28.75 64-64V112L336 0zm48 320c0 17.75-14.25 32-32 32H192c-17.75 0-32-14.25-32-32V176c0-17.75 14.25-32 32-32h160c17.75 0 32 14.25 32 32v144z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgSimCards;
