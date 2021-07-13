import React, { Component } from 'react'
import './UserAdmin_1.css'

import search_logo from '../../img/Search_icon.svg'
import left_logo from '../../img/Arrow-Left.svg'
import right_logo from '../../img/Arrow-Right.svg'

// import Swipper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, { Navigation } from "swiper/core";
SwiperCore.use([Navigation]);


const jsonFile = require("./slayd1.json");



class UserAdmin_1 extends Component {
    state = { 
        jsonFile : jsonFile
     }
    render() { 
        return ( 
            <div className="UserAdm_1">
                <div className="UserAdm_1_top">
                    <div className="UserAdm_1_top_categories">
                    <Swiper 
                        slidesPerView="4"
                        breakpoints={{
                        "10": {
                            "slidesPerView": 1.5,
                            "spaceBetween": 0
                        },
                        "320": {
                            "slidesPerView": 2.8,
                            "spaceBetween": 10
                        },
                        "375": {
                            "slidesPerView": 2,
                            "spaceBetween": 10
                        },
                        "425": {
                            "slidesPerView":2.5,
                            "spaceBetween": 10
                            },
                        "640": {
                        "slidesPerView": 3,
                        "spaceBetween": 10
                        },
                        "768": {
                            "slidesPerView": 4,
                            "spaceBetween": 0
                            }
                    }} 
                        className="mySwiper">
                            <SwiperSlide><p>Barchasi</p></SwiperSlide>
                            <SwiperSlide><p>Progresdagi</p></SwiperSlide>
                            <SwiperSlide><p>Saqlangan</p></SwiperSlide>
                            <SwiperSlide><p>Tugatilgan</p></SwiperSlide>
                        </Swiper>
                    </div>   {/* close => UserAdm_1_top_categories*/}

                    <div className="UserAdm_1_top_search">
                        <input type="text" placeholder='Nima qidiryapsiz...' />
                        <img src={search_logo} alt="" />
                    </div> {/* close => UserAdm_1_top_search */}
                    
                </div> {/* close => UserAdm_1_top */}

                <div className="UserAdm_1_bottom">
                    {
                        this.state.jsonFile.map( (kurs) =>{
                            return(
                                <div className="UserAdm_1_bottom_card">
                                    <div className="UserAdm_1_bottom_card_imgBlock">
                                        <img className='UserAdm_1_bottom_imgBig' src={kurs.imgbig} alt="" />
                                        <div>
                                            <img src={kurs.imgsmall} alt="" />
                                        </div>
                                    </div>
                                    <p>{kurs.title}</p>
                                    <div className='UserAdm_1_bottom_card_progress_title'>
                                        <h4>Progress</h4>
                                        <p>{kurs.progress}</p>
                                    </div>
                                    <div className='UserAdm_1_bottom_card_progress_block'>
                                        <div style={{width:kurs.progress_F}}>

                                        </div>
                                    </div>
                                    <button>Davom ettirish</button>
                                </div>
                            )
                        } )
                    }
                </div> {/* close => StuDash_1_bottom */}
                <div className="UserAdm_1_pages">
                    <img className='UserAdm_1_pages_LeftImg' src={left_logo} alt="" />
                    <a href="#">1</a>
                    <a href="#">2</a>
                    <a href="#">3</a>
                    <a href="#">4</a>
                    <img className='UserAdm_1_pages_RightImg' src={right_logo} alt="" />
                </div>
            </div> 
            
         );
    }
}
 
export default UserAdmin_1;