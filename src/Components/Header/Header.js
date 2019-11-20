import React from "react"
import { TopBar } from "./TopBar/TopBar"
import { SubHeader } from "./SubHeader/SubHeader"
import { Aux } from "../Hocs/Auxil"

export const Header = () => {
    return (
        <Aux>
            <TopBar />
            <SubHeader />
        </Aux>
    )
}