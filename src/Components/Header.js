import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
        <HeaderSection>
            <div className='container '>
                <div className='d-flex justify-content-between'>

                    <CardSide className=' bg-white p-3 h-100 w-50 m-5'>
                        <h2>Need an extra day to shop the sale?</h2>
                        <p>We have got you. Pile on the savings with courses for as little as E£129.99. Ends today.</p>
                    </CardSide>
                    <div className='h-100 w-50' >
                        <img className='h-100 w-100' src='https://snipstock.com/assets/cdn/png/39cb06c010adc99973682651687f72c2.png' alt='hi' />
                    </div>
                </div>
            </div>


        </HeaderSection>

    )
}
const HeaderSection = styled.section`

    background-color: rgba(178, 183, 187, 0.857);
    height: 350px;
`
const CardSide = styled.div`
    box-shadow: 5px 5px 5px rgb(97, 93, 93);
`

export default Header