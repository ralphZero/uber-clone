import React, { useEffect } from 'react';
import tw from 'tailwind-styled-components'
import mapboxgl from 'mapbox-gl';
import Mapbox from './components/map';
import Head from 'next/head'
import Navbar from './components/navbar';
import ActionLabel from './components/actionlabel';
import LocationSuggestion from './components/LocationSuggestion';

mapboxgl.accessToken = 'pk.eyJ1IjoicmFscGgtcGxhY2lkZSIsImEiOiJja3ZsbzdydWs2ZnMzMzFxMXR1MDB2Zjl4In0.3INZo_v4GhtfxqjGbAMOEg';

export default function Home() {

  useEffect(() => {
    if (map.current) return; // initialize map only once
      map.current = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/ralph-placide/ckvlopksv15zp15p6hz7huwfn',
        center: [-80.191788, 25.761681],
        zoom: 15
      });
    });

  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"/>
      </Head>
      <Wrapper>
        <Navbar />
          <Mapbox />
          <ActionBox>
            <GradientBox>
              <Container>
              <Greeting>Howdy! Ralph</Greeting>
              <ActionLabel />
              <LocationSuggestion />
            </Container>
            </GradientBox>
          </ActionBox>
      </Wrapper>
    </>
    
  )
}

const Wrapper = tw.div`
  w-full h-full relative
`

const ActionBox = tw.div`
  absolute bottom-0 left-0 w-full z-10 px-3 pb-8 bg-gradient-to-t from-gray-200
`

const Container = tw.div`
  bg-white w-full rounded-lg filter drop-shadow-xl p-3
`

const Greeting = tw.div`
  font-semibold text-xl text-black pb-3 pt-5
`

const GradientBox = tw.div`
  p-px rounded-lg bg-gradient-to-b from-gray-300 via-gray-300
`