import React, { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';
import Head from 'next/head';
import mapboxgl from 'mapbox-gl';
import Mapbox from '../components/map';
import { useRouter } from 'next/router';
import { carList } from '../assets/carList';
import axios from 'axios';

mapboxgl.accessToken = 'pk.eyJ1IjoicmFscGgtcGxhY2lkZSIsImEiOiJja3ZsbzdydWs2ZnMzMzFxMXR1MDB2Zjl4In0.3INZo_v4GhtfxqjGbAMOEg';

const Ride = () => {
    const router = useRouter();
    const [rideDuration, setRideDuration] = useState(0);

    useEffect(() => {

        //console.log(router.query.coordinates);
        const coordinates = router.query.coordinates.toString();
        const locationArray = coordinates.split(',');
        const token = mapboxgl.accessToken;
        const coord = `${locationArray[1]},${locationArray[0]};${locationArray[3]},${locationArray[2]}`;

        axios.get('https://api.mapbox.com/directions/v5/mapbox/driving/'+coord+'?access_token='+token).then((response) => {
            setRideDuration(response.data.routes[0].duration / 100);
        });

        // if (map.current) return; // initialize map only once
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/ralph-placide/ckvlopksv15zp15p6hz7huwfn',
            center: [-80.191788, 25.761681],
            zoom: 5
        });
        // add pickup marker
        addToMap(map, parseFloat(locationArray[0]), parseFloat(locationArray[1]));
        addToMap(map, parseFloat(locationArray[2]), parseFloat(locationArray[3]));

        map.fitBounds([
            { lon: locationArray[1], lat: locationArray[0] },
            { lon: locationArray[3], lat: locationArray[2] }
        ],{
            padding: 60
        });

    }, [router.query.coordinates]);

    const addToMap = (map, lat, long) => {
        console.log(long, lat);
        if(long && lat) {
            const marker = new mapboxgl.Marker({
                color: "#000000",
                draggable: false
            })
            .setLngLat([long, lat])
            .addTo(map);
        }
        
    }

    const onBackPressed = (e) => {
        router.back();
    }

    const list = carList.map((car, index) => {
        return (
            <Card key={index}>
                <CardContent>
                    <Image src={car.imgUrl}></Image>
                    <Title>{car.service}</Title>
                    <Price>{'$'+ (rideDuration * car.multiplier).toFixed(2)}</Price>
                </CardContent>
            </Card>
        )
    });

    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"/>
            </Head>
            <Wrapper>
                <BackButton onClick={onBackPressed}>
                    <Icon></Icon>
                </BackButton>
                <Mapbox />
                <ActionBox>
                    <GradientBox>
                        <Container>
                            { list }
                        </Container>
                        <ButtonContainer>
                            <ConfirmButton>Confirm ride</ConfirmButton>
                        </ButtonContainer>
                    </GradientBox>
                </ActionBox>
            </Wrapper>
        </>
        
    );
}

export default Ride;

const Wrapper = tw.div`
    w-full h-full relative
`

const BackButton = tw.button`
    absolute top-0 left-0 z-10 mt-3 ml-3
`

const Icon = tw.i`
    las la-arrow-left text-white text-3xl p-3 bg-black rounded-lg
`

const ActionBox = tw.div`
  absolute bottom-0 left-0 w-full z-10 bg-gradient-to-t from-gray-200
`

const GradientBox = tw.div`
  p-px bg-gradient-to-t from-gray-300 via-gray-300
`

const Container = tw.div`
    w-full overflow-x-auto py-3 overflow-x-auto overflow-y-none whitespace-nowrap
`

const Card = tw.div`
    h-56 w-44 bg-white rounded-lg mx-2 inline-block shadow-lg
`
const CardContent = tw.div`
    flex flex-col justify-between items-center h-full p-3
`

const Image = tw.img`
    w-28 h-28
`

const Title = tw.h2`
    text-xl font-bold
`

const Price = tw.h4`
    text-lg text-gray-600
`

const ButtonContainer = tw.div`
    flex justify-center w-full p-3
`

const ConfirmButton = tw.button`
    bg-black rounded-lg py-3 px-12 text-white text-lg font-semibold capitalize w-full shadow-lg
`