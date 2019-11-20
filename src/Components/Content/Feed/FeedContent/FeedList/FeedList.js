import React from "react"
import { Aux } from "../../../../Hocs/Auxil"
import { Link } from "react-router-dom"
import classes from "./FeedList.css"

export const FeedList = (props) => {
    return (
        <Aux>
            <Link to={``}>
            <div className={classes.feed_list}>
                <div>

                </div>
                <div>
                    <h2>The periodic table turns 150</h2>
                    <img className={classes.feed_image} src={props.FeedImage.src.original} alt="myimage"/>
                </div>
                <div>
                    <button style={{outline: "none", border: "none", backgroundColor: "transparent"}} type="button">
                        <svg role="img" width="18" height="18" viewBox="0 0 14 18">
                        <title id="share-icon-title">
                            Share
                        </title>
                        <g id="share" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" transform="translate(-2.000000, 0)">
                            <g id="bottom" transform="translate(2.000000, 7.000000)" fill="#999">
                            <rect id="Rectangle-14" x="0" y="0" width="1" height="11"></rect>
                            <rect id="Rectangle-14" x="13" y="0" width="1" height="11"></rect>
                            <rect id="Rectangle" x="0" y="10" width="14" height="1"></rect>
                            </g>
                            <g id="arrow" transform="translate(5.500000, 0.000000)">
                            <rect id="Rectangle-2" fill="#999" x="3" y="1" width="1" height="11"></rect>
                            <path d="M3.5,0.5 L6.5,3.5" id="Line-3" stroke="#999" strokeLinecap="square"></path>
                            <path d="M3.5,0.5 L0.5,3.5" id="Line" stroke="#999" strokeLinecap="square"></path>
                            </g>
                        </g>
                        </svg>
                    </button>

                    <button style={{outline: "none", border: "none", backgroundColor: "transparent"}} type="button">
                        <svg role="img" aria-labelledby="like-icon-title" className="like-icon " width="18" height="16" viewBox="0 0 18 16">
                            <title id="like-icon-title">Like</title>
                            <g id="iPhone-8-Copy-70" transform="translate(-290.000000, -601.000000)" stroke="#999" fill="none">
                                <path d="M302.614426,602 C301.093115,602 299.764153,602.849719 299.001749,604.082163 C298.235847,602.849719 296.882404,602 295.36459,602 C292.989945,602 291,604.001404 291,606.448736 C291,607.54073 291.465137,608.608146 292.185574,609.429775 L298.994754,617 L305.817923,609.429775 C306.534863,608.608146 307,607.56882 307,606.476826 C307,604.033006 304.985574,602 302.614426,602 Z" id="Heart"></path>
                            </g>
                        </svg>
                    </button>

                    <button style={{outline: "none", border: "none", backgroundColor: "transparent"}} type="button">
                        <svg role="img" aria-labelledby="flip-icon-title" className="flip-icon " width="18" height="18" viewBox="0 0 18 18">
                            <title id="flip-icon-title">Flip</title>
                            <g id="logged-out" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                <g id="iPhone-8-Copy-70" transform="translate(-338.000000, -600.000000)" fill="#999">
                                    <path d="M347.5,608.5 L356,608.5 L356,609.5 L347.5,609.5 L347.5,618 L346.5,618 L346.5,609.5 L338,609.5 L338,608.5 L346.5,608.5 L346.5,600 L347.5,600 L347.5,608.5 Z" id="Plus"></path>
                                </g>
                            </g>
                        </svg>
                    </button>
                </div>
                <div className={classes.overlay}></div>
            </div>
            </Link>
        </Aux>
    )
}