import React, { Component } from "react"
import {HomeFeedList} from "./HomeFeedList/HomeFeedList"
import classes from "./HomeFeedContent.css"

class HomeFeedContent extends Component {
    constructor (props) {
        super(props)
        this.state = {
            homeFeedImages: [
                `${process.env.PUBLIC_URL}/assets/images/1.jpg`,
                `${process.env.PUBLIC_URL}/assets/images/2.jpg`,
                `${process.env.PUBLIC_URL}/assets/images/3.jpg`,
                `${process.env.PUBLIC_URL}/assets/images/4.jpg`,
                `${process.env.PUBLIC_URL}/assets/images/5.jpg`,
                `${process.env.PUBLIC_URL}/assets/images/6.jpg`
            ]
        }
    }
    render () {
        return (
            <div className={classes.home_feed_list}>
                {this.state.homeFeedImages.map((homeFeedImage, index) => (
                    <HomeFeedList key={index}  homeFeedImage={homeFeedImage} />
                ))}
            </div>
        )
    }
}

export default HomeFeedContent