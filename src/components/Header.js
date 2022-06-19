// Kalian bisa menambahkan CSS di src/components/Header.css
import React from 'react';

const Header = ({title, subtitle}) => {
    return (
        <>
            <h2>{title}</h2>
            <h4>{subtitle}</h4>
        </>
    )
}

export default Header;