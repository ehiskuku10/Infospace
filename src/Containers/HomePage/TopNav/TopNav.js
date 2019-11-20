import React from "react"
import { Link } from "react-router-dom"
import classes from "./TopNav.css"
import { connect } from "react-redux"
import { showSearchBlock } from "../../../Reducers/Actions"
import { showCreateMagModal } from "../../../Reducers/Actions"

let categories = ['Architecture', 'Autos', 'Celebrity', 'News', 'Design', 'DIY', 'Education', 'Exercise', 'Food & Dining', 'Gaming', 'Personal Finance', '#MagsWeLove', 'MLB', 'Photography', 'Recipes', 'SocialMedia', 'Space', 'Soccer', 'Technology', 'Travel']

const TopNav = ({
    showSearchBlock,
    showSearch,
    showCreateMagModal,
    showMagModal
}) => {
    return (
        <nav className={classes.top_nav}>
            <div>
                <Link to="/" className={classes.logo}>
                    <img src={process.env.PUBLIC_URL + "/assets/images/infospace.png"} alt={"logo"} />
                </Link>
                <Link><h3>FOR YOU</h3></Link>
                <Link><h3>TECHNOLOGY</h3></Link>
                <Link><h3>WHAT'S YOUR PASSION?</h3></Link>
            </div>
            <div>
                <div onClick={() => showSearchBlock(true)}>
                    <label htmlFor="search">
                        <svg width="24" height="24" viewBox="0 0 24 24" data-reactid=".0.0.0.2.0.0.0.0">
                            <g fill="none" stroke="#999" stroke-width="2" transform="translate(5 4)" data-reactid=".0.0.0.2.0.0.0.0.0">
                                <circle cx="6.5" cy="6.5" r="6.5" data-reactid=".0.0.0.2.0.0.0.0.0.0"></circle>
                                <path d="M10.5555556,11.6315789 L14.9552889,16.0974737" data-reactid=".0.0.0.2.0.0.0.0.0.1"></path>
                            </g>
                        </svg>
                   
                        <div className={classes.search_block} style={{display: showSearch ? 'block' : 'none'}}>
                            <div className={classes.input_cover}>
                                <svg width="24" height="24" viewBox="0 0 24 24" data-reactid=".0.0.0.2.0.0.0.0">
                                    <g fill="none" stroke="#999" stroke-width="2" transform="translate(5 4)" data-reactid=".0.0.0.2.0.0.0.0.0">
                                        <circle cx="6.5" cy="6.5" r="6.5" data-reactid=".0.0.0.2.0.0.0.0.0.0"></circle>
                                        <path d="M10.5555556,11.6315789 L14.9552889,16.0974737" data-reactid=".0.0.0.2.0.0.0.0.0.1"></path>
                                    </g>
                                </svg>
                                <input id="search" placeholder="Search Infospace" type="text" focus={true} />
                            </div>
                            <div>
                                <h3>FEATURED</h3>
                                <h3>THE DAILY EDITION<hr /></h3>
                                <h3>EXPLORE<hr /></h3>
                            </div>
                            <div>
                                {categories.map((category, index) => (
                                    <Link key={index}><h3>{category}</h3></Link>
                                ))}
                            </div>
                            <div>
                                <Link><h3>ABOUT</h3></Link>
                                <Link><h3>BLOG</h3></Link>
                                <Link><h3>TOOLS</h3></Link>
                                <Link><h3>PUBLISHERS</h3></Link>
                                <Link><h3>HELP</h3></Link>
                            </div>
                        </div>
                    </label>
                </div>

                <div onClick={() => showCreateMagModal(true)}>
                    <svg width="24" height="24" viewBox="0 0 24 24" data-reactid=".0.0.0.2.1.0">
                        <g fill="none" data-reactid=".0.0.0.2.1.0.0">
                            <polygon points="0 0 24 0 24 24 0 24" data-reactid=".0.0.0.2.1.0.0.0"></polygon>
                            <polygon fill="#999" points="3 17.25 3 21 6.75 21 20.874 6.888 17.124 3.138" data-reactid=".0.0.0.2.1.0.0.1"></polygon>
                        </g>
                    </svg>
                    <div className={classes.backdropMakeMag}>
                        <div>
                            <div><h1>MAKE MAGAZINE</h1></div>
                            <div><p>Start your first magazine by adding this story. Find it later in your profile.</p></div>
                            <div>
                                <div>
                                    <h3>MAGAZINES</h3><br/>
                                    <div>
                                        <div className={classes.magazine_image}>+</div>
                                        <span>Create Magazine</span>
                                    </div>
                                </div>
                                <div>
                                    <textarea></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div>
                    <svg width="24" height="24" viewBox="0 0 24 24" data-reactid=".0.0.0.2.2.0">
                        <g fill="none" data-reactid=".0.0.0.2.2.0.0">
                            <polygon points="0 0 24 0 24 24 0 24" data-reactid=".0.0.0.2.2.0.0.0"></polygon>
                            <polygon points="0 0 24 0 24 24 0 24" data-reactid=".0.0.0.2.2.0.0.1"></polygon>
                            <path fill="#999" d="M18,16 L18,11 C18,7.93 16.37,5.36 13.5,4.68 L13.5,4 C13.5,3.17 12.83,2.5 12,2.5 C11.17,2.5 10.5,3.17 10.5,4 L10.5,4.68 C7.64,5.36 6,7.92 6,11 L6,16 L4,18 L4,19 L20,19 L20,18 L18,16 Z" data-reactid=".0.0.0.2.2.0.0.2"></path>
                            <path fill="#999" d="M10,19 C10,20.1 10.9,21 12,21 C13.1,21 14,20.1 14,19" data-reactid=".0.0.0.2.2.0.0.3"></path>
                        </g>
                    </svg>
                </div>

                <div>
                    <Link>
                        <img src={process.env.PUBLIC_URL + "/assets/images/myimage.jpg"} alt={"profile_pic"} />
                    </Link>
                </div>
                
            </div>
        </nav>
    )
}

const mapDispatchToProps = (dispatch) => ({
    showSearchBlock: (option) => dispatch(showSearchBlock(option)),
    showCreateMagModal: (option) => dispatch(showCreateMagModal(option))
})

const mapStateToProps = (state) => ({
    showSearch: state.Core.showSearch,
    showMagModal: state.Core.showMagModal
})

export default connect(mapStateToProps, mapDispatchToProps)(TopNav)