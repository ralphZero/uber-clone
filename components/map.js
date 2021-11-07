import React, { useEffect, useRef } from 'react';

import tw from 'tailwind-styled-components'

export default function MapContainer() {

    return (
        <MapArea id='map'>
            
        </MapArea>
    );
}

const MapArea = tw.div`
  absolute top-0 left-0 w-full h-full
`
