import React from 'react'
import { Card } from './Card'
import data from './Features.Api'
import "./Features.css"

const Features = () => {
  return (
    <>
        <section className='features top' id='features'>
            <div className='container'>
                <div className='heading'>
                    <h4>Features</h4>
                    <h1>what i do</h1>
                </div>

                <div className='content grid'>
                    {data.map((val,index)=> {
                        return <Card key={index}  image={val.image} title={val.title} desc={val.desc}/> 
                    })}
                </div>
            </div>
        </section>
    </>
  )
}

export default Features