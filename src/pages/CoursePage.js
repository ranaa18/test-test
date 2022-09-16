import React, { useEffect, useState } from 'react'
import data from '../assets/data/data.json'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import CardHeader from '../Components/CardHeader'
import CoursesContent from './../Components/CoursesContent';
import Requirement from '../Components/Requirement'
import Description from '../Components/Description'
import CoursePageNav from '../Components/CoursePageNav'
import CoursesCard from '../Components/CoursesCard'

function CoursePage() {

    let { id } = useParams();

    let [course, setCourse] = useState([])

    useEffect(() => {
        setCourse(data.courses[id])

    }, [id])

    return (
        <>
            <div className='d-flex overflow-hidden'>
                <div className='rightSide w-100' >
                    <CoursePageNavStyle>
                        <CoursePageNav
                            title={course.title}
                            rate={course.rate}
                            peopleReview={course.peopleReview}
                            studentReview={course.studentReview}
                        />
                    </CoursePageNavStyle>
                    <CardHeader
                        title={course.title}
                        description={course.description}
                        rate={course.rate}
                        peopleReview={course.peopleReview}
                        studentReview={course.studentReview}
                        author={course.author}
                        lastUpdate={course.lastUpdate}
                        language={course.language}
                        supTitle={course.supTitle}
                    />
                    <div className='container'>
                        <CoursePageContent >
                            <CoursesContent />
                            <Requirement />
                            <Description />
                        </CoursePageContent>
                    </div>
                </div>

                <RightSide className='position-absolute mt-5'>
                    <CoursesCard
                        image={course.image}
                        price={course.price}
                        oldPrice={course.oldPrice} />
                </RightSide>

            </div>
        </>
    )
}
const RightSide = styled.div`
    right:140px;
    width:350px;
`
const CoursePageContent = styled.div`
    width:700px
`
const CoursePageNavStyle = styled.div`

    top: 0;
    bottom: auto;
    position: fixed;
    background-color: #1c1d1f;
    box-shadow: 0 -2px 4px rgb(0 0 0 / 8%), 0 -4px 12px rgb(0 0 0 / 16%);
    padding:20px;
    width:100%;
    z-index:2;


`
export default CoursePage