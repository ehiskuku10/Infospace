import React, { Component } from "react"
import {HomeFeedList} from "./HomeFeedList/HomeFeedList"
import classes from "./HomeFeedContent.css"
import { connect } from 'react-redux'
import { loadPhotos, hasLoaded } from '../../../../../Reducers/ChangeCategory'
import axios from "axios"
import {css} from '@emotion/core'
import { FadeLoader }  from 'react-spinners'
import jQuery from "jquery"


const override = css`
    display: block;
    margin: 50px auto;
    border-color: red;
`;

class HomeFeedContent extends Component {
    componentDidMount () {
        const axiosInstance = axios.create({
            baseURL: 'https://api.pexels.com/v1',
            headers: {
                "Authorization": `Bearer 563492ad6f917000010000010105a150a3b14b6ca891654288f6f90a`
            }
        })

        axiosInstance({
            method: "get",
            url: `https://api.pexels.com/v1/search?query=featured&per_page=6&page=1`,
            headers: {
                "Authorization": `Bearer 563492ad6f917000010000010105a150a3b14b6ca891654288f6f90a`
            }
        }).then(res => {
               console.log(res.data.photos)
               this.props.loadPhotos(res.data.photos);
               this.props.hasLoaded(true)
        })
    }

    render () {
        let view = ""
        

        view = this.props.loaded ? <div className={classes.home_feed_list}>
                    {this.props.photos.map((homeFeedImage, index) => (
                        <HomeFeedList photos={this.props.photos} key={index}  homeFeedImage={homeFeedImage} />
                    ))}
                </div> : <div>
                            <FadeLoader
                            css={override}
                            sizeUnit={"px"}

                            width={2}
                            height={15}
                            color={'grey'}
                            loading= {true}
                        />
                    </div>

        return (
            view
        )
    }
}

(function($){
    $(window).scroll(() => {
        if($(window).scrollTop() >= 500) {
            $(`.${classes.home_feed_list}`).css({
                marginTop: '100px'
            })
        } else {
            $(`.${classes.home_feed_list}`).css({
                marginTop: '0px'
            })
        }
    })
})(jQuery)

const mapStateToProps = state => ({
    photos: state.ChangeCategory.photos,
    loaded: state.ChangeCategory.loaded
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    loadPhotos: (photos) => dispatch(loadPhotos(photos)),
    hasLoaded: (response) => dispatch(hasLoaded(response))
});


export default connect(mapStateToProps, mapDispatchToProps)(HomeFeedContent);