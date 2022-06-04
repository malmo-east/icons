import * as React from 'react';
import { SVGProps } from 'react';

const SvgFlowerTulip = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
        <path d="M495.9 288h-47.26c-67.51 0-127.5 30-168.7 77v-77.1c75.26-.875 136-61.1 136-137.5V16c0-5.999-3.375-11.5-8.751-14.25-5.376-2.75-11.88-2.125-16.75 1.375L316.6 56.75l-48.38-51C265.3 2.125 260.8 0 256 0c-4.8 0-9.3 2.125-12.3 5.75l-48.38 51L121.5 3.125C116.6-.375 110.1-1 104.7 1.75 99.35 4.5 95.98 10 95.98 16v134.4c0 75.5 60.76 136.6 136 137.5V365c-41.08-47-101.08-77-168.63-77H16.09c-9.128 0-17.004 9-16.004 19.6C9.962 422.1 106.4 512 223.9 512h64.26c117.5 0 213.9-89.88 223.8-204.4C512.9 297 505 288 495.9 288zM143.1 150.4V78.38l56 41.62L256 64l56.01 56 56.01-41.62v72c0 49.5-40.13 89.62-89.64 89.62H233.6c-49.5 0-90.5-40.1-90.5-89.6zM223.9 464c-79.64 0-148.8-54.13-170-128 75.26 0 128.8 32.25 161 85.88L240.1 464h-16.2zm64.1 0h-16.13l25.25-42.13C329.1 368.6 382.4 336 458.2 336c-21.3 73.9-90.4 128-170.2 128z" />
    </svg>
);

export default SvgFlowerTulip;
