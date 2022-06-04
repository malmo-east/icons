import * as React from "react";
import { SVGProps } from "react";

const SvgBasketball = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm208 256c0 .182-.027.357-.027.54-2.673-.14-5.273-.54-7.973-.54-46.5 0-89.24 16.09-123.3 42.81L289.9 256 418 127.9c29 34.6 46 79.4 46 128.1zM304 456c0-33.25 11.04-63.79 29.22-88.84l51.73 51.73a207.215 207.215 0 0 1-80.81 39.25c-.04-.74-.14-1.44-.14-2.14zm80.1-362.89L256 222.1l-42.8-42.8C239.9 145.2 256 102.5 256 56c0-2.705-.434-5.293-.54-7.973.14.003.34-.027.54-.027 48.7 0 93.5 16.95 128.1 45.11zm-257.1 0a207.215 207.215 0 0 1 80.81-39.25c.09.72.19 1.41.19 2.14 0 33.25-11.04 63.79-29.22 88.84L127 93.11zM93.11 127l51.69 51.8C119.8 196.1 89.25 208 56 208c-.729 0-1.422-.137-2.148-.146C60.99 177.9 74.54 150.4 93.11 127zM48 256c0-.182.027-.357.027-.54 2.683.14 5.263.54 7.973.54 46.5 0 89.24-16.09 123.3-42.81L222.1 256 94 384.1C64.95 349.5 48 304.7 48 256zm79 162.9 129-129 42.81 42.81C272.1 366.8 256 409.5 256 456c0 2.705.434 5.293.54 7.973-.14-.873-.34.027-.54.027-48.7 0-93.5-17-129-45.1zm291.9-34.8-51.73-51.73C392.2 315 422.7 304 456 304c.729 0 1.422.137 2.148.146C451 334.1 437.5 361.6 418.9 384.1z" />
  </svg>
);

export default SvgBasketball;
