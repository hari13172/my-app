import React from 'react'
import Portfolio_data from './Portfolio_data'
import Card from './Card'
import "./Portfolio.css"

const Portfolio = () => {
  return (
    <>
        <section className='portfolio top' id='portfolio'>
            <div className='container'>
                <div className='heading text-center'>
                    <h4>Visit My Portfoli And Keep My Feedback</h4>
                    <h1>My Portfolio</h1>
                </div>

                <div className='contetnt grid'>
                    {Portfolio_data.map((value, index)=>{
                        return <Card key={index} image={value.image} category={value.category} totalLike={value.totalLike} title={value.title}/>
                    })}
                </div>
            </div>
        </section>
    </>
  )
}

export default Portfolio