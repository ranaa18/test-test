import React from 'react'

function WhatLearn(props) {



    return (
        <section className='container'>


            <h2>What you will learn</h2>
            {
                props.benefits.map((benefit, key) => {

                    return (
                        <div key={key}>
                            <div className='row '>
                                {benefit.benefit ? <p>{benefit.benefit}</p> : ""}

                            </div>
                        </div>
                    )

                }
                )

            }

        </section>
    )
}

export default WhatLearn