import * as React from 'react';
import { SVGProps } from 'react';

const SvgRaygun = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
        <path d="M112 151.1c-13.25 0-24 10.75-24 24s10.75 24 24 24 24-10.75 24-24c0-12.4-10.8-24-24-24zm96 0c-13.25 0-24 10.75-24 24s10.75 24 24 24 24-10.75 24-24c0-12.4-10.8-24-24-24zM311.1 31.98c-12.3 0-23.1 10.8-23.1 24v19.23c-14.9-7.38-31.4-11.08-48-11.2l-48-.03L87.12 1.724c-4.87-2.5-10.87-2.25-15.5.625C66.88 5.35 64 10.51 64 16.01v59.22C26.25 93.23 0 131.4 0 176c0 55.26 40.12 100.9 92.88 109.1l-70.5 122c-6.38 11.9-8.13 25.1-4.76 37.3C20.88 456.8 29 467.3 40 473.5l55.38 32c11.12 6.376 24.12 8.126 36.5 4.876 12.25-3.25 22.75-11.38 29.12-22.38l120.1-208.1c2.4-.896 4.5-2.496 6.9-3.596v19.75c0 13.2 10.8 24 24 24 13.2-.05 24-10.85 24-24.05V55.98c0-13.26-10.7-24-24.9-24zM119.4 464 64 432l83.1-144H221L119.4 464zM288 217.8c-12 14-29.5 22.1-48 22.2H112c-35.38 0-64-28.63-64-64.01s28.62-64.01 64-64.01h128c18.5 0 36 8.126 48 22.13v83.69zm267-99.7-75 25h-64V87.98c0-13.26-10.75-24-24-24-13.2 0-24 10.8-24 24v176c0 13.2 10.8 24 24 24 13.2.02 24-10.78 24-23.98v-56.9h64.13l74.75 25c4.875 1.625 10.25.75 14.5-2.25 4.12-2.05 6.62-6.95 6.62-12.05v-83.6c0-5.251-2.5-10-6.625-13-4.275-3-9.475-3.8-14.375-3.1z" />
    </svg>
);

export default SvgRaygun;
