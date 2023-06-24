import React,{useEffect}  from 'react'
import'./footer.css'
import video from '../../Assets/vdo4.mp4'
import {FiChevronRight, FiSend} from 'react-icons/fi'
import {MdOutlineTravelExplore} from 'react-icons/md'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {FaTripadvisor} from 'react-icons/fa'

import Aos from 'aos'
import  'aos/dist/aos.css'


const Footer = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
  },[])


  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video} loop autoPlay muted type="video"></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up"className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>

          <div className="inputDiv flex">
            <input data-aos="fade-up" type="text" placeholder='Enter email Address'/>
            <button data-aos="fade-up" className="btn flex" type='submit'>
              SEND <FiSend className='icon'/>
            </button>
          </div>
        </div>
        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className="pogo flex">
                  <MdOutlineTravelExplore className='icon'/>Travel.
              </a>
            </div>

            <div data-aos="fade-up" className="footerParagraph">
              Lorem ipsum dolor sit amet consectetur 
              adipisicing elit. Iste laboriosam, porro 
              itaque optio labore quo velit voluptates 
              alias ab eaque unde asperiores ipsam eius 
              placeat accusantium, blanditiis doloremque 
              iure doloribus?
            </div>

            <div data-aos="fade-up" className="footerSocials flex">
              <AiOutlineTwitter className='icon'/>
              <AiFillYoutube className='icon'/>
              <AiFillInstagram className='icon'/>
              <FaTripadvisor className='icon'/>
            </div>
          </div>
          <div className="footerLinks grid">
            {/* {Group one} */}
            <div data-aos="fade-up" data-aos-duration="3000" className="linkGroup">
              <span className="groupTitle">
                OUR AGENCY
              </span>

              <li className="footerList flex">
                <FiChevronRight className='icor'/>
                Services
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icor'/>
                Insurance
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icor'/>
                Agency
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icor'/>
                Tourism
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icor'/>
                Payment
              </li>
            </div>
            {/* {Group two} */}
            <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
              <span className="groupTitle">
                PARTENERS
              </span>

              <li className="footerList flex">
                <FiChevronRight className='icor'/>
                Booking
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icor'/>
                Rentcars
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icor'/>
                HostelWorld
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icor'/>
                Trivago
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icor'/>
                TripAdvisor
              </li>
            </div>
            {/* {Group three} */}
            <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
              <span className="groupTitle">
                LAST MINUTE
              </span>

              <li className="footerList flex">
                <FiChevronRight className='icor'/>
                London
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icor'/>
                California
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icor'/>
                Indonesia
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icor'/>
                Europe
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icor'/>
                Oceania
              </li>
            </div>
          </div>

          <div className="footerDiv flex">
            <small>BEST TRAVEL WEBSITE THEME</small>
            <small>COPYRIGHTS RESERVED - CHIRANGEE 2023</small>
          </div>

        </div>
      </div>


    </section>
  )
}

export default Footer

