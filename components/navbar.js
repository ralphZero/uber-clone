import React from 'react';
import tw from 'tailwind-styled-components';
import logoImage from '../assets/uber.svg';

const Navbar = ({ children }) => {
    return (
        <Wrapper>
            <Menu></Menu>
            <Logo src={logoImage.src} ></Logo>
            { children }
        </Wrapper>
    );
}

export default Navbar;

const Wrapper = tw.nav`
    absolute top-0 left-0 z-10 w-full flex justify-between items-center p-3 bg-gradient-to-b from-white
`
const Menu = tw.i`
    las la-bars text-3xl
`
const Logo = tw.img`
    h-6 w-auto
`