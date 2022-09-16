import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Card } from 'react-bootstrap';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import PopupSection from './PopupSection';
import { SearchContext } from '../App';
import { Link } from 'react-router-dom';



function Courses() {

    const [courses, setCourses] = useState([])

    const searchParams = ["title", "author", "description"]
    console.log('searchParam', searchParams)
    // console.log('data :>> ', courses);

    useEffect(() => {
        getCourses()
    }, [])

    const getCourses = () => {
        axios.get('./data.json')
            .then(res => setCourses(res.data.courses))
            .catch(err => console.log(err))
    }
    return (
        <>
            <section>

                <div className='container'>

                    <div className=' pt-3'>
                        <h2>A broad selection of courses</h2>
                        <p className='fs-5'>Choose from 204,000 online video courses with new additions published every month</p>

                        <ul className='nav fw-bold mb-3 fs-6 text-muted'>
                            <li className="text-dark me-3">Python</li>
                            <li className=" me-3" >Excel</li>
                            <li className=" me-3">Web Development</li>
                            <li className=" me-3">JavaScript</li>
                            <li className=" me-3">Data Science</li>
                            <li className=" me-3">AWS Certification</li>
                            <li className=" me-3">Drawing</li>

                        </ul>
                    </div>
                    <div className='border p-4 '>
                        <h1 className='fs-2s mb-2'>Expand your career opportunities with python</h1>
                        <p className='w-75'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque accusamus illum laudantium recusandae sunt inventore, veritatis, laboriosam alias itaque ab quo, aut dolore? Earum voluptates quo eius, recusandae voluptatibus odit aut dolore? Earum voluptates quo eius, recusandae voluptatibus odit.</p>
                        <Button variant="outline-dark rounded-0 fw-bold">Explore python</Button>


                        <Splide options={
                            {
                                perPage: 5,
                                perMove: 5,
                                rewind: true,
                                rewindSpeed: 1000,
                                speed: 1000,
                                pagination: false,
                                breakpoints: {
                                    768: { perPage: 2, perMove: 2, },
                                    425: { perPage: 1, perMove: 1, },
                                },
                            }

                        } hasTrack={false} aria-label="...">

                            <div className="custom-wrapper">
                                <SplideTrack>
                                    <SearchContext.Consumer>
                                        {
                                            ({ search }) => {
                                                return courses.filter(CourseItem => {
                                                    return searchParams.some((searchParam) => {
                                                        return typeof CourseItem[searchParam] == "string" ? (
                                                            CourseItem[searchParam]
                                                                .toLowerCase().indexOf(search.toLowerCase()) > -1
                                                        ) : false
                                                    }) ?? CourseItem
                                                }
                                                ).map((CourseItem, key) => {
                                                    return (
                                                        <SplideSlide key={key}>
                                                            <OverlayTrigger key={key}
                                                                // const right='right'
                                                                // const left='left'

                                                                // { CourseItem.id === 2 ? placement = right : placement = left}


                                                                placement={'right'}
                                                                // trigger={"click"}
                                                                overlay={
                                                                    <div>
                                                                        <PopupSection popup={CourseItem} key={key} />
                                                                    </div>
                                                                }
                                                            >
                                                                <Link className='text-decoration-none text-dark' to={'/home/' + CourseItem.id}>
                                                                    <Card className='mt-4 me-2 justify-content-center border-0 rounded-0' key={CourseItem.id}>
                                                                        <div>
                                                                            <Card.Img variant="top " src={CourseItem.image} />
                                                                        </div>
                                                                        <Card.Body className='ps-0' >
                                                                            <Card.Title className='fs-6 mb-0 fw-bold'>{CourseItem.title}</Card.Title>
                                                                            <Card.Text className='text-muted mb-0'>{CourseItem.author}</Card.Text>
                                                                            <div className='d-flex mb-0'>
                                                                                <Card.Text className='mb-0 me-2'>{CourseItem.rate}</Card.Text>
                                                                                <Card.Text className='mb-0 me-2 text-warning'>
                                                                                    <i className="fa-solid fa-star"></i>
                                                                                    <i className="fa-solid fa-star"></i>
                                                                                    <i className="fa-solid fa-star"></i>
                                                                                    <i className="fa-solid fa-star-half-stroke"></i>
                                                                                </Card.Text>
                                                                                <Card.Text className='mb-0 text-muted'>{CourseItem.peopleReview}</Card.Text>
                                                                            </div>
                                                                            <div className='d-flex mb-0'>
                                                                                <Card.Text className='me-2 fw-bold mb-0'>{CourseItem.price}</Card.Text>
                                                                                <Card.Text className='text-decoration-line-through mb-0'>{CourseItem.oldPrice}</Card.Text>
                                                                            </div>

                                                                            {
                                                                                CourseItem.onSale ? <div className='d-flex justify-content-center bg-warning fs-6 w-50 mt-2'>Bestseller</div> : ""
                                                                            }

                                                                        </Card.Body>
                                                                    </Card>
                                                                </Link>

                                                            </OverlayTrigger>
                                                        </SplideSlide>
                                                    )

                                                })
                                            }


                                        }
                                    </SearchContext.Consumer>
                                </SplideTrack>
                                <div className="splide__arrows">
                                    <button className="splide__arrow splide__arrow--prev bg-dark ps-0 ms-0" style={{ width: '50px', height: '50px' }}>
                                        <i className="fa-solid fa-angle-left text-white fs-4" ></i>
                                    </button>
                                    <button className="splide__arrow splide__arrow--next bg-dark" style={{ width: '50px', height: '50px' }}>
                                        <i className="fa-solid fa-angle-right text-white fs-4"></i>
                                    </button>
                                </div>
                            </div>
                        </Splide>
                    </div>
                </div>
            </section>

        </>
    )

}
export default Courses

























