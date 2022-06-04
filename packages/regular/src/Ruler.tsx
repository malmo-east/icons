import * as React from 'react';
import { SVGProps } from 'react';

const SvgRuler = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
        <path d="M29.25 413.3c-24.99-25-24.99-65.6 0-90.6L322.7 29.25c25-24.989 65.6-24.989 90.6 0l69.4 69.5c25 24.95 25 65.55 0 90.55L189.3 482.7c-25 25-65.6 25-90.56 0l-69.49-69.4zm33.95-34 69.5 69.5c6.2 6.3 16.4 6.3 22.6 0l293.5-293.5c6.3-6.2 6.3-16.4 0-22.6l-69.5-69.5c-6.2-6.25-16.4-6.25-22.6 0l-39.4 39.4 30 30.1c6.3 6.2 6.3 16.4 0 22.6-6.2 6.3-16.4 6.3-22.6 0l-30.1-30-41.3 41.3 30 30.1c6.3 6.2 6.3 16.4 0 22.6-6.2 6.3-16.4 6.3-22.6 0l-30.1-30-41.3 41.3 30 30.1c6.3 6.2 6.3 16.4 0 22.6-6.2 6.3-16.4 6.3-22.6 0l-30.1-30-41.3 41.3 30 30.1c6.3 6.2 6.3 16.4 0 22.6-6.2 6.3-16.4 6.3-22.6 0l-30.1-30-39.4 39.4c-6.25 6.2-6.25 16.4 0 22.6z" />
    </svg>
);

export default SvgRuler;
