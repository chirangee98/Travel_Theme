import React,{useEffect}  from 'react'
import './main.css'
import img from'../../Assets/img1.jpg'
import Aos from 'aos'
import  'aos/dist/aos.css'

import{HiOutlineClipboard, HiOutlineLocationMarker} from 'react-icons/hi'

const Data=[
  {
    id:1,
    imgSrc:img,
    destTitle:'Bora Bora',
    location:'New Zealand',
    grade:'CULTURAL RELAX',
    fees:'$700',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis repellendus at sint. Molestiae, quod voluptas hic modi numquam exc.'
  },
  {
    id:2,
    imgSrc:img,
    destTitle:'Goa',
    location:'India',
    grade:'CULTURAL RELAX',
    fees:'$500',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis repellendus at sint. Molestiae, quod voluptas hic modi numquam exc.'
  },
  {
    id:3,
    imgSrc:img,
    destTitle:'Kerela',
    location:'India',
    grade:'CULTURAL RELAX',
    fees:'$400',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis repellendus at sint. Molestiae, quod voluptas hic modi numquam exc.'
  },
  {
    id:4,
    imgSrc:img,
    destTitle:'Kerela',
    location:'India',
    grade:'CULTURAL RELAX',
    fees:'$400',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis repellendus at sint. Molestiae, quod voluptas hic modi numquam exc.'
  },
  {
    id:5,
    imgSrc:img,
    destTitle:'Kerela',
    location:'India',
    grade:'CULTURAL RELAX',
    fees:'$400',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis repellendus at sint. Molestiae, quod voluptas hic modi numquam exc.'
  },
  {
    id:6,
    imgSrc:img,
    destTitle:'Kerela',
    location:'India',
    grade:'CULTURAL RELAX',
    fees:'$400',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis repellendus at sint. Molestiae, quod voluptas hic modi numquam exc.'
  },
  
]
const Main = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])

  return (
   <section className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-up" className="title">
          Most visited destinations
        </h3>
      </div>

      <div className="secContent grid">
         {
              Data.map(({id,imgSrc,destTitle,location,grade,fees,description})=>{
                return (
                    <div key={id} data-aos="fade-up" className="singleDestination">
                        <div className="imageDiv">
                          <img src={imgSrc} alt="" />
                        </div>

                        <div className="cardInfo">
                            <h4 className="destTitle">{destTitle}</h4>

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

                            <button className="btn flex">
                              DETAILS <HiOutlineClipboard className="icon"/>
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