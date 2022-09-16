import React from 'react'
import styled from 'styled-components'


function CardHeader(props) {
    return (
        <>
            <CoursePageHeader className='py-4 w-100 text-white pb-5'>
                <div className='container'>
                    <Content>
                        <Path className='fw-bold'> Development <Icon className="text-white fa-solid fa-chevron-right"></Icon> Programming <Icon className="text-white fa-solid fa-chevron-right"></Icon> Language  Python </Path>
                        <h1 className='fw-bold fs-1'>{props.title}</h1>
                        <p className='fs-5'>{props.description}</p>
                        <div>
                            <span className='me-2 text-warning'>{props.rate}</span>
                            <span className='me-2 text-warning'>
                                <Icon className="fa-solid fa-star"></Icon>
                                <Icon className="fa-solid fa-star"></Icon>
                                <Icon className="fa-solid fa-star"></Icon>
                                <Icon className="fa-solid fa-star"></Icon>
                                <Icon className="fa-solid fa-star-half-stroke"></Icon>
                            </span>
                            <HeaderLinks href='#' className='me-2'> {props.peopleReview} rating</HeaderLinks>
                            <span> {props.studentReview} student</span>
                        </div>
                        <div>created by <HeaderLinks href='#'> {props.author} </HeaderLinks> </div>
                        <div className='d-flex'>
                            <div className='me-3'>
                                <span>
                                    <Icon className="me-2 fa-solid fa-square-pen"></Icon>
                                </span>
                                <span>{props.lastUpdate}</span>
                            </div>
                            <div className='me-3'>
                                <span>
                                    <Icon className="me-2 fa-solid fa-globe"></Icon>
                                </span>
                                <span>{props.language}</span>
                            </div>
                            <div className='me-3'>
                                <span>
                                    <Icon className="me-2 fa-solid fa-closed-captioning"></Icon>
                                </span>
                                <span>{props.supTitle}</span>
                            </div>
                        </div>

                    </Content>

                </div>
            </CoursePageHeader>
        </>
    )
}
const CoursePageHeader = styled.header`
    background-color:#212120;
`
const Content = styled.div`
    width:600px
`
const Path = styled.p`
    color:#a56cab;
`
const Icon = styled.i`
    font-size:12px;
`
const HeaderLinks = styled.a`
    color:#a56cab;

`
export default CardHeader