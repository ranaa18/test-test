import React, { useState } from 'react'
import './CoursesCard.css';


function CoursesCard(props) {

    const [position, setPosition] = useState(false)

    const changePosition = () => {
        if (window.scrollY >= 380) {
            setPosition(true)
        } else {
            setPosition(false)
        }
    }

    window.addEventListener('scroll', changePosition)

    const [display, setDisplay] = useState(false)
    const changeDisplay = () => {
        if (window.scrollY >= 380) {
            setDisplay(true)
        } else {
            setDisplay(false)
        }
    }
    window.addEventListener('scroll', changeDisplay)

    const [courseCard, setCourseCard] = useState(false)

    const changeCourseCard = () => {
        if (window.scrollY >= 395 && window.scrollY <= 400) {
            setCourseCard(true)
        } else {
            setCourseCard(false)
        }
    }

    window.addEventListener('scroll', changeCourseCard)

    return (
        <div className={position ? 'positioning-after' : 'positioning'} >
            <div className={courseCard ? 'courseCardAfter' : 'courseCard'}>
                <img className={display ? 'imgDisplayNone' : 'imgDisplayBlock'} src={props.image} alt="course img" />
                <div className='d-flex'>
                    <p className='price'>{props.price}</p>
                    <p className='price'>{props.oldPrice}</p>
                </div>
                <button className='add fw-bold text-white p-3 m-2 border-0'>Add to cart</button>
                <button className='buy p-3 m-2'>Buy now</button>

                <p className='span1 text-muted '>30-Day Money-Back Guarantee</p>
                <div className='coursesInclude m-3'>
                    <h5 className='fw-bold'>This course includes:</h5>

                    <div className='mb-2 mt-3'>
                        <span className="icon"><i class="fa-regular fa-circle-play"></i></span>
                        <span className='iconDes text-muted'>14 hours on-demand video</span>
                    </div>
                    <div className='mb-2'>
                        <span className="icon"><i class="fa-regular fa-circle-play"></i></span>
                        <span className='iconDes text-muted'>14 hours on-demand video</span>
                    </div>
                    <div className='mb-2'>
                        <span className="icon"><i class="fa-regular fa-circle-play"></i></span>
                        <span className='iconDes text-muted'>14 hours on-demand video</span>
                    </div>
                    <div className='mb-2'>
                        <span className="icon"><i class="fa-regular fa-circle-play"></i></span>
                        <span className='iconDes text-muted'>14 hours on-demand video</span>
                    </div>
                    <div className='mb-2'>
                        <span className="icon"><i class="fa-regular fa-circle-play"></i></span>
                        <span className='iconDes text-muted'>14 hours on-demand video</span>
                    </div>
                    <div className='mb-2'>
                        <span className="icon"><i class="fa-regular fa-circle-play"></i></span>
                        <span className='iconDes text-muted'>14 hours on-demand video</span>
                    </div>
                    <div className='links'>
                        <a href='#'>Share</a>
                        <a href='#'>Gift this course</a>
                        <a href='#'>Apply Coupon</a>


                    </div>
                </div>
            </div>

        </div>
    )
}

export default CoursesCard