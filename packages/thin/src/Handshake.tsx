import * as React from "react";
import { SVGProps } from "react";

const SvgHandshake = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="m632 128-116.7-.031c-42.5-41.28-98.44-63.87-157.8-63.87L348.8 64c-9.891 0-19.41 3.688-26.97 10.47l-98.5 90.22-.93 1.01c-18.6 18.3-19.4 46.4-1.7 66.4 7.625 8.344 21.38 15.5 36.33 15.5 9.984 0 20.5-3.188 30.09-11.38L368.5 162c3.266-2.969 3.5-8.032.516-11.31-2.97-3.219-8.016-3.5-11.3-.5C269.1 230.4 280.5 220.9 274.8 225.7c-17.1 12.5-36 2.5-42.3-4.4-12-13-11.2-32.6 1.7-44.7l98.36-90.22C337.1 82.25 342.9 80 348.9 80h8.609c56.23 0 109.1 21.88 148.9 61.63l2.344 2.344H536v207.7h-9.625c-4.422 0-8 3.594-8 8s3.578 8 8 8h11.17C541.2 385.9 556.7 400 576 400h56c4.422 0 8-3.594 8-8V136c0-4.4-3.6-8-8-8zm-8 256-48 .014C562.8 384 552 373.2 552 360V144.2l72-.2v240zM339.7 219.2c-3.422-2.75-8.453-2.281-11.25 1.188-2.797 3.406-2.266 8.469 1.156 11.25l149.3 121.2c10.23 8.312 11.81 23.41 3.531 33.66l-9.578 11.81c-8.266 10.22-23.44 11.81-33.64 3.657l-11.61-9.719-36.47 44.91a29.337 29.337 0 0 1-19.75 10.62c-7.719.719-15.38-1.438-21.2-6.219l-24.3-19.53-5.266 5.281c-9.438 11.59-22.8 18.81-37.66 20.34-14.89 1.594-29.45-2.812-40.78-12l-92.78-83.91H104V143.1l27.47-.156 2.344-2.344C173.5 101.8 226.4 80 282.5 80c4.422 0 8-3.594 8-8s-4.4-8-8-8c-59.3 0-115.1 22.63-157.8 63.1L8 128c-3.823 0-8 3-8 8v256c0 4.406 3.578 8 8 8h56c19.3 0 34.69-14.01 38.43-32.22h40.75l88.53 80.06C244.7 458.4 260.5 464 277 464c2.5 0 5.016-.125 7.547-.375 16.56-1.719 31.69-8.938 43.13-20.34l12.14 10.53c9.312 7.625 21.08 11.03 33.16 9.906 12-1.25 22.83-7.062 30.48-16.44l26.28-32.34c17.22 13.12 41.89 10.28 55.48-6.531l9.578-11.81c13.81-17.09 11.17-42.28-5.875-56.16L339.7 219.2zM88 360c0 13.22-10.77 23.94-24 23.94L16 384V144l72 .219V360z" />
  </svg>
);

export default SvgHandshake;