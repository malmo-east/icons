import * as React from 'react';
import { SVGProps } from 'react';

const SvgPie = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
        <path d="M544 240c-6.5 0-10.38-1.25-14.5-3.5C494.9 136.1 400.1 64 288 64S81 136.2 46.5 236.5c-4.12 2.4-8 3.5-14.5 3.5-17.62 0-32 14.38-32 32s14.38 32 32 32c32 0 49.1-13.5 61.88-22.38C103 274.8 106.8 272 117.5 272c10.62 0 14.38 2.75 23.5 9.625C152.9 290.5 170.9 304 202.9 304s50-13.5 61.88-22.38c9.02-6.82 12.82-9.62 23.52-9.62 10.63 0 14.38 2.75 23.38 9.625C323.6 290.5 341.5 304 373.5 304s50-13.5 61.88-22.38c9.02-6.82 12.72-9.62 23.52-9.62 10.62 0 14.25 2.75 23.38 9.625C493.1 290.5 512 304 544 304c17.62 0 32-14.38 32-32s-14.4-32-32-32zm-337.7-88.9-16 32c-2.7 5.5-9.2 8.9-14.3 8.9-5.5 0-10.8-2.9-13.6-7.6-2.9-4.6-3.1-10.7-.7-15.5l16-32c4-8 13.56-11.09 21.44-7.211C207 133.7 210.3 143.3 206.3 151.1zM304 176c0 8.9-7.1 16-16 16s-16-7.1-16-16v-32c0-8.9 7.1-16 16-16s16 7.125 16 16v32zm103.1 14.3c-7.875 4-17.53.852-21.41-7.148l-16-32c-4-7.875-.75-17.54 7.125-21.41 7.875-4 17.44-.727 21.44 7.148l16 32c3.945 7.81.745 17.51-7.155 21.41zM445.4 400H130.6l-28.4-85.1c-13.5 9-28.62 15.25-44.5 18.38l31 92.88C93.12 439.1 105.2 448 119.1 448H457c13.75 0 26-8.875 30.25-21.88l31-92.88c-15.88-3.125-31-9.375-44.38-18.38L445.4 400z" />
    </svg>
);

export default SvgPie;
