import React from "react"
import { Link } from "react-router-dom"
import { Aux } from "../../../../../../Components/Hocs/Auxil"
import classes from "./HomeFeedList.css"

export const HomeFeedList = (props) => {
    return (
        <Aux>
            <div className={classes.home_feed_list}>
                <div>

                </div>
                <div>
                    <h2>The periodic table turns 150</h2>
                    <img className={classes.home_feed_image} src={props.homeFeedImage} alt="myimage"/>
                </div>
                <div>

                </div>
                <div className={classes.overlay}></div>
            </div>
        </Aux>
    )
}