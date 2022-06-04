import * as React from 'react';
import { SVGProps } from 'react';

const SvgCrateEmpty = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
        <path d="M480 223.8H32c-17.67 0-32 14.33-32 32V480c0 17.7 14.33 32 32 32h448c17.67 0 32-14.33 32-32V255.8c0-17.6-14.3-32-32-32zM464 464H48v-72h416v72zm0-120H48v-72.3h416V344zM96 320c8.836 0 16-7.164 16-16s-7.2-16-16-16-16 7.2-16 16 7.16 16 16 16zm320 0c8.836 0 16-7.164 16-16s-7.2-16-16-16-16 7.164-16 16 7.2 16 16 16zM96 448c8.836 0 16-7.164 16-16s-7.2-16-16-16-16 7.164-16 16 7.16 16 16 16zm320 0c8.836 0 16-7.164 16-16s-7.2-16-16-16-16 7.164-16 16 7.2 16 16 16z" />
    </svg>
);

export default SvgCrateEmpty;
