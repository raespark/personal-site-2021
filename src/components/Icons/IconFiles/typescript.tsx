import React from 'react';

import { SVGProps } from '../index';

const TypeScript: React.FC<SVGProps> = ({
    width = 50,
    height = 50,
    className,
}: SVGProps) => {
    return (
        <svg
            className={className}
            height={height}
            width={width}
            viewBox="0 0 24 24"
        >
            <path d="M3,5v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V5c0-1.105-0.895-2-2-2H5C3.895,3,3,3.895,3,5z M13.666,12.451h-2.118	V19H9.841v-6.549H7.767V11h5.899V12.451z M13.998,18.626v-1.751c0,0,0.956,0.721,2.104,0.721c1.148,0,1.103-0.75,1.103-0.853	c0-1.089-3.251-1.089-3.251-3.501c0-3.281,4.737-1.986,4.737-1.986l-0.059,1.559c0,0-0.794-0.53-1.692-0.53	c-0.897,0-1.221,0.427-1.221,0.883c0,1.177,3.281,1.059,3.281,3.428C19,20.244,13.998,18.626,13.998,18.626z" />
        </svg>
    );
};

export default TypeScript;
