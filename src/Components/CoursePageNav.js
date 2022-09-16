import React from 'react'
import styled from 'styled-components'

function CoursePageNav(props) {
    return (
        <div className='text-white'>



            <div className='fw-bold'>{props.title}</div>
            <div>
                <span className='me-2 text-warning'>{props.rate}</span>
                <Icon className="me-2 text-warning fa-solid fa-star"></Icon>
                <HeaderLinks href='#' className='me-2'> {props.peopleReview} rating</HeaderLinks>
                <span> {props.studentReview} student</span>

            </div>



        </div>
    )
}
const Icon = styled.i`
    font-size:12px;
`
const HeaderLinks = styled.a`
    color:#a56cab;

`
export default CoursePageNav