import React from "react"
import { HomeFeedNav } from "./HomeFeedNav/HomeFeedNav"
import HomeFeedContent from "./HomeFeedContent/HomeFeedContent"
import { Aux } from "../../../../Components/Hocs/Auxil"

export const HomeFeed = () => {
    return (
        <Aux>
            <HomeFeedNav />
            <HomeFeedContent />
        </Aux>
    )
}