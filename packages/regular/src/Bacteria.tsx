import * as React from 'react';
import { SVGProps } from 'react';

const SvgBacteria = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
        <path d="M191.1 128c-8.836 0-16 7.162-16 16 0 8.836 7.164 16 16 16s16-7.164 16-16c0-8.8-6.3-16-16-16zm-80 96c-8.836 0-15.1 7.163-15.1 15.1s7.2 16.9 15.1 16.9c8.838 0 16-7.164 16-16s-6.3-16-16-16zm288 160c-8.836 0-15.1 7.163-15.1 15.1s7.162 16 15.1 16c8.838 0 16-7.164 16-16s-6.3-15.1-16-15.1zm214.7-152.7 13.46-3.98c9.439-2.781 14.81-12.65 12-22.04-3.039-10.21-13.57-14.52-22.14-11.95l-13.59 4.02c-7.914-14.22-19.88-25.9-34.76-33.47l3.58-13.71c2.469-9.477-3.248-19.15-12.77-21.62-10.36-2.639-19.46 4.046-21.72 12.71l-3.517 13.47c-2.512-.102-23.41-2.252-46.96 12.3l-9.783-9.93c-3.777-3.873-15.44-9.781-25.19-.37-7.063 6.823-7.225 18.04-.371 25.07l9.82 10.07c-6.216 9.376-10.83 19.99-12.8 31.79-.817 4.884-2.368 9.47-3.76 14.13l-9.099-4.29c-8.8-4.1-19.4-.4-23.6 8.5-4.186 8.854-.36 19.42 8.546 23.58l9.27 4.336c-9.199 13.67-21.15 25.2-35.11 34.03l-4.11-9.279c-3.922-8.822-14.33-13.05-23.49-9.074-9 3.959-13.08 14.42-9.115 23.39l4.041 9.127c-3.791 1.021-7.46 2.33-11.39 2.982-12.86 2.131-24.33 7.33-34.29 14.38l-10.47-9.436C299.5 319.7 288.1 319.7 281.3 327.3c-6.611 7.262-6.055 18.47 1.24 25.04l10.51 9.479c-8.004 13.9-11.92 30.04-10.67 46.93l-13.63 4.035c-9.428 2.793-14.8 12.66-11.99 22.05 2.783 9.385 12.69 14.71 22.15 11.94l13.57-4.019c8.117 14.52 20.26 26.11 34.85 33.52l-3.549 13.56c-2.48 9.479 3.224 19.16 12.75 21.62 9.566 2.482 19.25-3.221 21.72-12.69l3.484-13.31c7.436.272 19.21-.066 48.59-8.465l3.97 11.11c3.305 9.223 13.5 14.11 22.75 10.76 9.266-3.277 14.1-13.41 10.81-22.65l-3.908-10.94c15.31-6.527 29.83-14.45 43.61-23.41l7.063 9.42c5.891 7.838 17.05 9.443 24.93 3.602 7.885-5.863 9.496-16.97 3.617-24.82l-6.992-9.324c12.62-10.66 24.22-22.44 34.81-35.12l9.504 6.912c7.932 5.795 19.08 4.076 24.89-3.855 5.811-7.906 4.07-19-3.874-24.77l-9.482-6.898c8.859-13.8 16.59-28.38 22.99-43.68l11.07 3.795c9.334 3.188 19.44-1.719 22.64-10.99 3.213-9.258-1.739-19.35-11.04-22.53l-11.18-3.832c2.625-9.467 4.951-19.06 6.6-28.91 1.097-6.66 1.097-13.16.697-19.56zm-244 208.2a35.99 35.99 0 0 1-5.963.502c-17.31 0-32.52-12.94-35.38-30.11-1.58-9.484.627-19.02 6.215-26.84 5.586-7.82 13.88-12.1 23.38-14.58 70.95-11.83 126.6-67.45 138.4-138.4 2.904-17.44 17.79-30.09 35.4-30.09 1.99 0 3.996.168 6.029.508 9.48 1.578 17.78 6.756 23.37 14.58 5.588 7.824 7.795 17.35 6.213 26.84C550.6 343.2 471.2 422.6 369.8 439.5zm-97.5-213.1c9-3.957 13.08-14.42 9.115-23.39l-4.015-9.11c3.791-1.021 7.46-2.329 11.39-2.983 12.86-2.131 24.33-7.328 34.29-14.38l10.47 9.435c6.969 6.301 18.28 6.326 25.15-1.236 6.609-7.26 6.053-18.47-1.24-25.04l-10.51-9.478c8.004-13.9 11.92-30.04 10.67-46.93l13.63-4.038c9.428-2.793 14.8-12.66 11.99-22.05-2.781-9.385-12.69-14.71-22.15-11.94l-13.57 4.02c-8.115-14.52-20.26-26.11-34.85-33.52l3.547-13.56C318.7 12.73 313 3.04 303.5.581c-9.566-2.482-19.25 3.22-21.72 12.69L278.3 26.58c-7.5-.27-19.2.07-48.6 8.47l-4-11.12c-3.3-9.22-13.5-14.103-23.6-10.76-8.4 3.28-13.2 13.42-9.9 22.65l3.908 10.94c-15.31 6.525-29.84 14.45-43.61 23.41l-7.098-9.41c-5.9-7.84-17.1-9.44-24.9-3.6-7.9 5.86-10.4 16.97-3.7 24.82l6.992 9.325c-12.62 10.66-24.22 22.44-34.81 35.12L79.52 119.5c-7.932-5.795-19.08-4.074-24.89 3.855-5.81 7.945-4.07 19.045 3.88 24.745l9.482 6.899C59.13 168.8 51.4 183.4 45 198.7l-11.07-3.8c-9.33-3.2-19.43 1.7-22.63 11-3.214 9.3 1.74 19.4 11.04 22.5l11.18 3.9c-2.63 9.4-4.95 19-6.6 28.9-1.107 6.609-1.166 13.11-.705 19.51L12.75 284.7c-9.441 2.7-14.811 12.6-12.006 22 3.04 10.21 13.57 14.52 22.14 11.95l13.59-4.019c7.914 14.22 19.88 25.9 34.76 33.47l-3.578 13.71c-1.865 7.158 1.902 22.19 17.26 22.19 7.92 0 15.14-5.287 17.23-13.28l3.516-13.47c2.512.102 23.42 2.248 46.96-12.3l9.734 9.982c3.777 3.873 15.44 9.781 25.19.37 7.062-6.823 7.225-18.04.371-25.07l-9.82-10.07c6.216-9.376 10.83-19.99 12.8-31.79.816-4.884 2.366-9.472 3.76-14.13l9.143 4.257c8.8 4.1 19.4.4 23.6-9.4 4.2-8 .4-18.5-8.5-22.7l-9.3-4.3c9.2-13.7 21.2-25.2 35.1-34.1l4.11 9.278c3.99 8.922 14.49 13.022 23.49 9.122zm-128.8 55.5c-1.1 6.5-11.1 34.7-41.4 29.6-9.51-1.6-17.81-6.8-23.39-14.6-5.588-7.824-7.795-17.36-6.213-26.84C89.37 168.8 168.8 89.38 270.2 72.48c29.75-4.994 40.21 22.8 41.34 29.61 3.258 19.52-9.859 38.13-29.6 41.42C210.1 155.3 155.3 210.1 143.5 281.9z" />
    </svg>
);

export default SvgBacteria;
