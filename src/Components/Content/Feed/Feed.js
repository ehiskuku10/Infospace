import React from "react"
import FeedNav from "./FeedNav/FeedNav"
import FeedContent from "./FeedContent/FeedContent"
import { Aux } from "../../../Components/Hocs/Auxil"

export const Feed = () => {
    return (
        <Aux>
            <FeedNav />
            <FeedContent />
        </Aux>
    )
}