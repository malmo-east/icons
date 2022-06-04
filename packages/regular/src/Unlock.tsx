import * as React from 'react';
import { SVGProps } from 'react';

const SvgUnlock = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
        <path d="M144 192h240c35.3 0 64 28.7 64 64v192c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V256c0-35.3 28.65-64 64-64h32v-64C96 57.31 153.3 0 224 0c56.1 0 105.2 37.22 121.8 88.62 4.1 12.58-3.7 26.18-15.4 30.18-12.7 4.1-26.2-3.7-30.3-15.4-10.3-32.18-40.5-55.4-77-55.4-43.3 0-80 35.82-80 80l.9 64zM48 448c0 8.8 7.16 16 16 16h320c8.8 0 16-7.2 16-16V256c0-8.8-7.2-16-16-16H64c-8.84 0-16 7.2-16 16v192z" />
    </svg>
);

export default SvgUnlock;
