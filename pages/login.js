import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { signInWithPopup, onAuthStateChanged } from 'firebase/auth';
import { auth, provider } from '../firebase';


import tw from 'tailwind-styled-components';
import logo from '../assets/uber.svg';
import bg from '../assets/bg.jpg';

const Login = () => {
    const router = useRouter();

    useEffect(() => {
        onAuthStateChanged(auth , (user) => {
            if(user) {
                router.push('/');
            }
        })
    }, []);

    return (
        <Wrapper>
            <BackgroundImage src={bg.src}></BackgroundImage>
            <WhiteScreen></WhiteScreen>
            <Content>
                <TitleGroup>
                    <Icon src={logo.src}></Icon>
                    <Subtitle>
                        Always the ride you want
                    </Subtitle>
                </TitleGroup>
                <ButtonContainer>
                    <ConfirmButton onClick={() => signInWithPopup(auth, provider)}>Login</ConfirmButton>
                </ButtonContainer>
            </Content>
        </Wrapper>
    );
}

export default Login;

const Wrapper = tw.div`
    h-full
`

const BackgroundImage = tw.img`
    h-full w-full object-cover filter grayscale
`
const WhiteScreen = tw.div`
    absolute top-0 left-0 w-full h-full z-30 bg-white opacity-80 flex flex-col p-3
`

const Content = tw.div`
    absolute top-0 left-0 w-full h-full z-30 flex flex-col justify-between p-3 pt-32 pb-12
`

const TitleGroup = tw.div`
    flex flex-col items-center gap-4
`

const Icon = tw.img`
    h-16
`

const Subtitle = tw.h3`
    text-xl font-semibold text-gray-800
`

const ButtonContainer = tw.div`
    flex justify-center w-full p-3
`

const ConfirmButton = tw.button`
    bg-black rounded-lg py-3 px-12 text-white text-lg font-semibold capitalize w-full shadow-lg
`