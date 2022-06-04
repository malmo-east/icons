import * as React from "react";
import { SVGProps } from "react";

const SvgRupiahSign = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <defs>
      <style />
    </defs>
    <path
      className="rupiah-sign_svg__fa-primary"
      d="M0 64c0-17.67 14.33-32 32-32h80c79.5 0 144 64.47 144 144 0 79.5-64.5 144-144 144H64v128c0 17.7-14.33 32-32 32S0 465.7 0 448V64zm64 192h48c44.2 0 80-35.8 80-80s-35.8-80-80-80H64v160zm98.3 203.9-64.01-160 59.41-23.8 64 160c6.6 16.4-1.4 35-17.8 41.6-16.4 6.6-35-1.4-41.6-17.8zM288 192c0-17.7 14.3-32 32-32h80c61.9 0 112 50.1 112 112s-50.1 112-112 112h-48v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V192zm64 128h48c26.5 0 48-21.5 48-48s-21.5-48-48-48h-48v96z"
    />
  </svg>
);

export default SvgRupiahSign;
