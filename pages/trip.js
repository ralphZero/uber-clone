import React from 'react';
import tw from 'tailwind-styled-components';
import DestinationForm from './components/destinationform';
import Head from 'next/head';
import LocationSuggestion from './components/LocationSuggestion';
import {  useRouter } from 'next/router'

const Trip = () => {
    const router = useRouter()

    const onBackPressed = (e) => {
        router.back();
    }

    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"/>
            </Head>
            <Wrapper>
                <TopContainer>
                    <Navbar>
                        <BackButton onClick={onBackPressed}>
                            <Icon></Icon>
                        </BackButton>
                        <Title>Trip</Title>
                        <WhiteSpace></WhiteSpace>
                    </Navbar>
                    <DestinationForm />
                </TopContainer>
                <MainContainer>
                    <LocationSuggestion />
                </MainContainer>
            </Wrapper>
            <ButtonContainer>
                <ConfirmButton>Confirm trip</ConfirmButton>
            </ButtonContainer>
            
        </>
        
    );
}

export default Trip;

const Wrapper = tw.div`
    w-full h-full bg-black flex flex-col
`

const Navbar = tw.div`
    flex justify-between
`

const BackButton = tw.button`

`

const Icon = tw.i`
    las la-arrow-left text-white text-3xl pb-5
`

const Title = tw.span`
    text-xl font-semibold text-white
`

const TopContainer = tw.div`
    bg-black p-5
`

const WhiteSpace = tw.div`
    h-8 w-8
` 

const MainContainer = tw.main`
   flex-grow-1 bg-white h-full rounded-t-3xl mt-5 p-5
`
const ButtonContainer = tw.div`
    flex justify-center absolute bottom-0 left-0 w-full p-5
`

const ConfirmButton = tw.button`
    bg-black rounded-lg py-3 px-12 text-white text-lg font-semibold capitalize w-full shadow-lg
`