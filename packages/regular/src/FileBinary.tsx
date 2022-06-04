import * as React from 'react';
import { SVGProps } from 'react';

const SvgFileBinary = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
        <path d="m365.3 93.38-74.63-74.64C278.6 6.742 262.3 0 245.4 0H64C28.65 0 0 28.65 0 64l.006 384c0 35.34 28.65 64 64 64H320c35.2 0 64-28.8 64-64V138.6c0-16.9-6.7-33.2-18.7-45.22zM336 448c0 8.836-7.164 16-16 16H64.02c-8.838 0-16-7.164-16-16L48 64.13c0-8.836 7.164-16 16-16h160V128c0 17.67 14.33 32 32 32h79.1v288zM216 264c0 13.3 10.8 24 24 24v80c-13.25 0-24 10.75-24 24s10.8 24 24 24h48c13.25 0 24-10.75 24-24s-10.7-24-24-24V264c0-13.25-10.75-24-24-24h-24c-13.2 0-24 10.8-24 24zm-72-24h-16c-30.88 0-56 25.12-56 56v64c0 30.9 25.13 56 56 56h16c30.88 0 56-25.12 56-56v-64c0-30.9-25.1-56-56-56zm8 120c0 4.406-3.594 8-8 8h-16c-4.406 0-8-3.594-8-8v-64c0-4.4 3.6-8 8-8h16c4.406 0 8 3.594 8 8v64z" />
    </svg>
);

export default SvgFileBinary;
