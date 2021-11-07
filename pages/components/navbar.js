import React from 'react';
import tw from 'tailwind-styled-components';
import logoImage from '../../assets/uber.svg';

const Navbar = () => {
    return (
        <Wrapper>
            <Menu></Menu>
            <Logo src={logoImage.src} ></Logo>
            <Avatar>
                <AvatarImage src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MXx8cGVyc29ufHwwfHx8fDE2MzYwNjA0Nzg&ixlib=rb-1.2.1&dpr=1&auto=format&fit=crop&w=120&h=200&q=60'></AvatarImage>
            </Avatar>
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

const Avatar = tw.button`
    h-8 w-8 rounded-full border-2 border-black
`
const AvatarImage = tw.img`
    w-full h-full object-cover rounded-full
`