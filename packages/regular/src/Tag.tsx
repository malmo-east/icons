import * as React from 'react';
import { SVGProps } from 'react';

const SvgTag = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
        <path d="M80 144c0-17.7 14.33-32 32-32 17.7 0 32 14.3 32 32s-14.3 32-32 32c-17.67 0-32-14.3-32-32zM197.5 32c17 0 33.2 6.74 45.2 18.75l176 175.95c25 25 25 65.6 0 90.6L285.3 450.7c-25 25-65.6 25-90.6 0l-175.95-176C6.743 262.7 0 246.5 0 229.5V80c0-26.51 21.49-48 48-48h149.5zM52.69 240.8l176.01 176c6.2 6.3 16.4 6.3 22.6 0l133.5-133.5c6.3-6.2 6.3-16.4 0-22.6l-176-176.01c-3-3-7.1-4.69-11.3-4.69H48v149.5c0 4.2 1.69 8.3 4.69 11.3z" />
    </svg>
);

export default SvgTag;
