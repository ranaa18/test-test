import React from 'react'
import styled from 'styled-components'

const PopupCard = styled.div`
    width: 350px;
`;
const Updated = styled.p`
    font-size: 13px;
    color: green;
`;
const Details = styled.p`
    font-size: 13px;

`;
const PopupButton = styled.button`
    background-color: purple;
`
const TriangleLeft = styled.span`
    &:before{
        content: "";
        box-sizing: border-box;
        display: block;
        background: red;
        height: 1.5rem;
        width: 1.5rem;
        background-color: #fff;
        border: 1px solid #d1d7dc;
        box-shadow: 0 2px 4px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 8%);
        position: absolute;
        transform: translateX(5rem) translateY(-1.2rem) scaleY(.5) rotate(45deg);
        top: 50%;
        left: -84px;
        z-index: 1;
    }
    &:after{
        content: "";
        position: absolute;
        width: 1rem;
        height: 2rem;
        background: #fff;
        top: 43%;
        left: 9px;
        
        z-index: 2;
    }
	
`

function PopupSection(props, key) {
    return (
        <>
            <PopupCard className="bg-white border py-3 px-4 m-2" key={props.popup.id} >
                <TriangleLeft></TriangleLeft>

                <h5 className='fw-bold'>{props.popup.title} </h5>
                <Updated className=' pt-0'>{props.popup.updated}</Updated>
                <Details className='text-muted '>{props.popup.details}</Details>
                <p className='ps-6'>{props.popup.description}</p>
                <div>
                    {
                        props.popup.benefits.map((benefit, key) => {

                            return (
                                <div key={key}>
                                    <div className='row '>
                                        {benefit.benefit ? <p className='col-1'><i className="fa-solid fa-check"></i></p> : ""}
                                        <p className='col-10'>{benefit.benefit}</p>
                                    </div>
                                </div>
                            )

                        }
                        )

                    }
                </div>
                <div className='row align-items-center'>
                    <div className='col-9'>
                        <PopupButton className='text-white fw-bold border-0 w-100 p-2'> add to cart</PopupButton>
                    </div>
                    <div className='col-3'>
                        <i className=" fa-regular fa-heart fs-2 "></i>
                    </div>
                </div>
            </PopupCard>

        </>
    )
}

export default PopupSection
