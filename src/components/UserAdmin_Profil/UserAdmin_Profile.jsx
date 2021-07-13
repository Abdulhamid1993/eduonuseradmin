import React, { Component } from 'react';

// import css 
import './UserAdmin_Profile.css'

// import img
import photo_icon from './img/photo_icon.svg' 

class UserAdmin_Profile extends Component {
    state = { 

     }
    render() { 
        return ( 
            <React.Fragment>
                <div className="UserAdmin_Profile">
                    <div className="UserAdmin_Profile_left">
                        <div className="UserAdmin_Profile_left_photo">
                            <img src="https://images.unsplash.com/photo-1625748542965-8ae95d9d2b79?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="" />
                            <img src={photo_icon} alt="" />
                        </div>

                        <div className='UserAdmin_Profile_left_nameMobile'>
                            <input type="text" placeholder="Ulug'bek" />
                            <input type="text" placeholder="Mamasaidov" />
                        </div>
                    </div> {/* close => UserAdmin_Profile_left */}

                    <div className="UserAdmin_Profile_right">
                        <div>
                            <input type="text" placeholder="Ulug'bek" />
                            <input type="number" placeholder="+998 (94) 627-17-68"/>
                        </div>

                        <div>
                            <input type="text" placeholder='Mamasaidov' />
                            <input type="text" placeholder='Ulugbek.eduon@gmail.com' />
                        </div>

                        <div>
                            <label>
                                <span>Tug'ulgan sana</span>
                                <input type="text" placeholder='16.01.2002' />
                            </label>
                            <label>
                                <span>Kasbingiz</span>
                                <input type="text" placeholder='Marketolog' />
                            </label>
                        </div>

                        <div>
                            <label>
                                <span>Mamlakat</span>
                                <input type="text" placeholder='O’zbekiston' />
                            </label>
                            <label>
                                <span>Viloyat</span>
                                <input type="text" placeholder='Toshkent shahri' />
                            </label>
                        </div>

                        <div className='UserAdmin_Profile_right_jinsi'>
                            <p>Jinsi</p>
                            <div>
                                <label className='custom-checkbox'>
                                    Erkak
                                    <input name='cardTyp' type="radio" name="a1" id="" />  
                                </label>
                               
                                <label className='custom-checkbox'>
                                    Ayol
                                    <input name='cardTyp' type="radio" name="a1" id="" />  
                                </label>
                            </div>
                        </div>

                        <button>Saqlash</button>

                    </div> {/* close => UserAdmin_Profile_right */}
                </div>  {/* close => UserAdmin_Profile */}
            </React.Fragment>
         );
    }
}
 
export default UserAdmin_Profile;