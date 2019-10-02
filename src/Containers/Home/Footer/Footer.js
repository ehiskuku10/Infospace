import React from "react"
import { FooterLink } from "./FooterLink/FooterLink"
import { Link } from "react-router-dom"
import classes from "./Footer.css"
import { Aux } from '../../../Components/Hocs/Auxil'
import { connect } from 'react-redux'
import { displayBackdrop } from '../../../Reducers/DisplayBackdrop'

const footer_links = [
    'Log In', 'About Us', 'Blog', 'Tools', 'Publishers', 'Help', 'Terms', 'Privacy Policy', 'Sitemap'
]

let styles = []

const Footer = ({
    backdropVisibility,
    hideBackdrop
}) => {

    if(backdropVisibility) {
        console.log('pass')
        styles = [classes.overlay]
    } else {
        styles = [classes.exit]
    }
    return (
        <Aux>
            <footer className={classes.footer}>
                <ul>
                    {footer_links.map((footer_link, index) => (
                        <FooterLink key={index} link={footer_link} />
                    ))}
                </ul>
                <Link>© 2019 Flipboard</Link>
            </footer>
            <div onClick={hideBackdrop} className={styles[0]}>
                <div className={classes.modal_input_search} onClick={(event) => event.stopPropagation()}>
                    <div>
                        <i className="fa fa-search"></i>
                        <input icon="search" placeholder="Search Infospace" tabIndex={-1} />
                        <button onClick={hideBackdrop}>Cancel</button>
                    </div>
                    <p></p>
                </div>
            </div>
        </Aux>
    )
}

const mapStateToProps = state => ({
    backdropVisibility: state.DisplayBackdrop.backdropVisibility
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    hideBackdrop: () => dispatch(displayBackdrop(false))
});  
  
export default connect(mapStateToProps, mapDispatchToProps)(Footer);