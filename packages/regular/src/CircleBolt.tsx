import * as React from 'react';
import { SVGProps } from 'react';

const SvgCircleBolt = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
        <path d="M313.6 131.2c5.9 4.4 8 12.3 5.1 19.1L280.3 240H344c6.8 0 12.8 4.2 15.1 10.6 2.2 5.5.3 13.5-4.9 17.8l-136 112c-5.7 4.6-13.9 4.8-19.8.4-5.9-4.4-8-12.3-5.1-19.1l38.4-90.6H168c-6.8 0-12.8-3.3-15.1-9.7-2.2-6.4-.3-13.5 4.9-17.8l136-112c5.7-5.5 13.9-4.8 19.8-.4zM512 256c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0s256 114.6 256 256zM256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z" />
    </svg>
);

export default SvgCircleBolt;
