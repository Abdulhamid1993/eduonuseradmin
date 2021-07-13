import React, { Component } from 'react';
import folder_icon from '../../img/Folder_icon.svg'
import profile_icon from '../../img/Profile_icon.svg'
import wallet_icon from '../../img/Wallet_icon.svg'
import chat_icon from '../../img/Chat_icon.svg'
import download_icon from '../../img/Download_icon.svg'
import i_icon from '../../img/i.svg'

// import component
import UserAdmin_1 from '../UserAdmin_1/UserAdmin_1'
import UserAdmin_id from '../UserAdmin_id/UserAdmin_id'
import UserAdminHisob from '../UserAdminHisob/UserAdminHisob'
import UserProfil from '../UserProfil/UserProfil'
import UserAdmin_profile from '../UserAdmin_Profil/UserAdmin_Profile'

// import css
import "./UserAdmin.css"


import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
  } from "react-router-dom";


class UserAdmin extends Component {
    state = {
        modal:false
      }

      handleModalOpen = () =>{
          this.setState({
              modal:true
          })
      }
      handleModalClose = () =>{
        this.setState({
            modal:false
        })
    }

    render() { 
        return ( 
            <Router>
                <div className="UserAdmin container">
                    {
                        this.state.modal === true ?
                        <div className="UserAdmin_sidebar_modal" onClick={this.handleModalClose}>
                            <div onClick={this.handleModalOpen}>
                                <img src={i_icon} alt="" />
                                <p>Referal linkini do’stlaringizga ulashing va pullik vaucherlarga ega bo’ling.</p>
                            </div>
                        </div>
                        :
                        null
                    }
               
                    <div className="UserAdmin_sidebar">
                        <div className="UserAdmin_sidebar_top">

                            {/* Sidebar Line - 1  ( Kurslarim ) */}
                            <NavLink activeClassName="UserAdmin_sidebar_act" exact to="/">
                                {/* <div className='UserAdmin_sidebar_top_line'> */}
                                <div>
                                        <img src={folder_icon} alt="" />
                                </div>
                                    Kurslarim
                            </NavLink>

                            {/* Sidebar Line - 2  ( Hisobim )  */}
                            <NavLink activeClassName="UserAdmin_sidebar_act" to='/Hisobim'>
                                {/* <div className='UserAdmin_sidebar_top_line'> */}
                                <div>
                                        <img src={wallet_icon} alt="" />
                                        </div>
                                    Hisobim

                            </NavLink>

                            {/* Sidebar Line - 3  ( Chat )  */}
                            <NavLink activeClassName="UserAdmin_sidebar_act" to='/Chat'>
                                {/* <div className='UserAdmin_sidebar_top_line'> */}
                                <div>
                                        <img src={chat_icon} alt="" />
                                        </div>
                                    Chat

                            </NavLink>

                            {/* Sidebar Line - 4  ( Profil ) */}
                            <NavLink activeClassName="UserAdmin_sidebar_act" to='/Profil'>
                                {/* <div className='UserAdmin_sidebar_top_line'> */}
                                <div>
                                        <img src={profile_icon} alt="" />
                                </div>
                                    Profil
                            </NavLink>
                            
                            {/* id  */}
                            <NavLink activeClassName="UserAdmin_sidebar_act" to='/id/comment_1'>
                                {/* <div className='UserAdmin_sidebar_top_line'> */}
                                <div>
                                        <img src={profile_icon} alt="" />
                                </div>
                                    id
                            </NavLink>

                            <p>Referal link</p>

                            <div className='UserAdmin_sidebar_link_block'>
                                <input type="text" value='https://eduon...' />
                                <div onClick={this.handleModalOpen} >
                                    <img src={download_icon} alt="" />
                                </div>
                            </div>
                            
                        </div>{/* close => UserAdmin_sidebar_top */}

                        <div className='UserAdmin_sidebar_bottom'>
                            <h3>Hisobim</h3>
                            <h2>12,000,000 <span>so'm</span></h2>
                            <button>Hisobni to'ldirish</button>
                        </div>

                    </div> {/* close => UserAdmin_sidebar */}


                    {/* UserAdmin Main */}
                    <div className='UserAdmin_main'>
                    <Switch>
                        <Route exact path="/">
                           <UserAdmin_1 />
                        </Route>
                        <Route path="/Hisobim">
                           <UserAdminHisob />
                        </Route>
                        <Route path="/Chat">
                           <h1>3- page</h1>
                        </Route>
                        <Route path="/Profil">
                            <UserAdmin_profile />
                           {/* <UserProfil /> */}
                        </Route>
                        <Route path="/id/comment_1">
                           <UserAdmin_id />
                        </Route>
                    </Switch>
                    </div>
                </div>
                
               
            </Router>
         );
    }
}
 
export default UserAdmin;