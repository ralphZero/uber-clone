import React from 'react';
import tw from 'tailwind-styled-components';

const ActionLabel = () => {
    return (
        <Wrapper>
            <ActionButton></ActionButton>
            <Labels>
                <LabelTitle>Where are you going?</LabelTitle>
            </Labels>
        </Wrapper>
    );
}

export default ActionLabel;



const Wrapper = tw.div`
  flex justify-start items-center gap-5 bg-black w-full rounded-lg p-4 mb-3
`

const Labels = tw.div`
    flex-grow-1
`

const ActionButton = tw.i`
    las la-search text-xl text-white
`

const LabelTitle = tw.h3`
  text-gray-200 text-lg
`