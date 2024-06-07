import React from 'react';
import './main.css'
import img from '../../Asset/img.jpg'
import img2 from '../../Asset/img2.jpg'
import img3 from '../../Asset/img3.jpg'
import img4 from '../../Asset/img4.jpg'
import img5 from '../../Asset/img5.jpg'
import img6 from '../../Asset/img6.jpg'
import img7 from '../../Asset/img7.jpg'
import img8 from '../../Asset/img8.jpg'
import img9 from '../../Asset/img9.jpg'
import { HiOutlineLocationMarker } from "react-icons/hi"
import { LuClipboardCheck } from "react-icons/lu";



const Data = [
    {
    id:1,
    imgSrc: img,
    destTitle:'Taj Mahal',
    location:'New Delhi, India',
    grade:'CULTURAL RELAX',
    fees:'$300',
    description:' A UNESCO World Heritage site.'
    },

   {
       id:2,
        imgSrc: img2,
        destTitle:'Yoga Capital of the World',
        location:'Uttarakhand, North India',
        grade:'CULTURAL RELAX',
        fees:'$250',
        description:'Rishikesh is famous for its ashrams, yoga centers, and the sacred Ganges River.'
    },

    {
        id:3,
        imgSrc: img3,
        destTitle:'Panji',
        location:'Goa, India',
        grade:'CULTURAL RELAX',
        fees:'$500',
        description:'Famous for its beautiful beaches, vibrant nightlife, and Portuguese heritage.'
    },

    {
        id:4,
        imgSrc: img4,
        destTitle:'Pink City',
        location:'Rajasthan, India',
        grade:'CULTURAL RELAX',
        fees:'$500',
        description:'Jaipur boasts stunning palaces, forts, and vibrant bazaars.'
    },

    {
        id:5,
        imgSrc: img5,
        destTitle:'Hampi',
        location:'Karnataka, India',
        grade:'CULTURAL RELAX',
        fees:'$250',
        description:' An ancient village with numerous ruined temple complexes from the Vijayanagara Empire.'
    },

    {
        id:6,
        imgSrc: img6,
        destTitle:'Leh-Ladakh',
        location:'Jammu & Kashmir, North India',
        grade:'CULTURAL RELAX',
        fees:'$700',
        description:'Known for its breathtaking landscapes, Buddhist monasteries, and adventure activities.'
    },

    {
        id:7,
        imgSrc: img7,
        destTitle:'Backwaters',
        location:'Kerala, South India',
        grade:'CULTURAL RELAX',
        fees:'$600',
        description:'A network of serene lagoons, lakes, and canals, best experienced on a houseboat.'
    },

    {
        id:8,
        imgSrc: img8,
        destTitle:'Kolkata',
        location:'West Bengal, East India',
        grade:'CULTURAL RELAX',
        fees:'$300',
        description:' Once the capital of British India, Kolkata is known for its colonial architecture, cultural festivals, and vibrant arts scene.'
    },

   {
        id:9,
        imgSrc: img9,
        destTitle:'Golden Temple',
        location:' Punjab, North India',
        grade:'CULTURAL RELAX',
        fees:'$250',
        description:'Home to the Golden Temple, the spiritual and cultural center for Sikhs, Amritsar also offers vibrant bazaars and the historic Jallianwala Bagh.'
    },

]

const Main = () => {
    return (
        <section className="main container section">
            <div className="secTitle">
                <h3 className="title">
                    Most visited destinations
                </h3>
            </div>


              <div className="secContent grid">
                  {

                    Data.map(({id, imgSrc, destTitle, location, grade, fees, description})=>{
                        return(
                            
                            <div key={id} className="singleDestination">
                                
                             
                                <div className="imageDiv">
                                  <img src={imgSrc} alt={destTitle} />
                                </div>

                                <div className="cardInfo">
                                    <h4 className="destTitle">
                                       {destTitle} 
                                    </h4>
                                    <span className="continent flex">
                                       <HiOutlineLocationMarker className='icon'/>
                                       <span className="name">{location}</span>

                                    </span>

                                    <div className="fees flex">
                                        <div className="grade">
                                            <span>{grade}<small>+1</small></span>
                                        </div>

                                        <div className="price">
                                            <h5>{fees}</h5>
                                        </div>
                                    </div>

                                    <div className="desc">
                                        <p>{description}</p>
                                    </div>

                                    <button className='btn flex'>
                                        DETAILS <LuClipboardCheck className="icon" />
                                    </button>
                                </div>
                                

                            </div>
                        )
                    })
                  }
              </div>
        </section>
    )
}

export default Main