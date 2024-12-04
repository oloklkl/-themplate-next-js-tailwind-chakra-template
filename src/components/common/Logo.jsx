import classNames from 'classnames';
import Image from 'next/image';
import React from 'react';

const Logo = ({ size = 10 }) => {
    return (
        <Image
            alt='Your Company'
            src='/images/pattern/common/logo.svg'
            // className='mx-auto h-[34px] w-auto'
            className={classNames('mx-auto w-auto', `h-${size}`)}
            width={40}
            height={40}
        />
    );
};

export default Logo;
