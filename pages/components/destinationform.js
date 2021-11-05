import React from 'react';
import tw from 'tailwind-styled-components';

const DestinationForm = () => {
    return (
        <Container>
            <ImageColumn>
                <Image src='https://img.icons8.com/windows/50/000000/square-full.png'></Image>
                <Line src='https://img.icons8.com/ios/50/9CA3AF/vertical-line.png'></Line>
                <Image src='https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png'></Image>
            </ImageColumn>
            <FieldColumn>
                <LocationForm action='' method='get'>
                    <FromLocation type='text' placeholder='Enter current location'></FromLocation>
                    <ToLocation type='text' placeholder='Enter your destination'></ToLocation>
                </LocationForm>
            </FieldColumn>
        </Container>
    );
}

export default DestinationForm;

const Container = tw.div`
    flex py-4 px-3 w-full bg-white rounded-lg
`

const ImageColumn = tw.div`
    flex flex-col items-center
`

const FieldColumn = tw.div`
    flex-grow-1 w-full pr-3
`

const Image = tw.img`
    h-4 w-4 my-3
`

const Line = tw.img`
    h-8 w-auto
`

const LocationForm = tw.form`
    flex flex-col justify-between h-full w-full
`

const FromLocation = tw.input`
    h-10 w-full border-b-2 border-gray-50 pl-2 text-black focus:outline-none focus:ring-2 focus:gray-100
`

const ToLocation = tw.input`
    h-10 w-full border-t-2 border-gray-50 pl-2 text-black focus:outline-none focus:ring-2 focus:gray-100
`

