import styled from "styled-components";
import GreenBoxRoundedCorner from "../boxes/GreenBoxRoundedCorner";
import MapComponent from "./MapComponent";

const NewMapComponent = styled(MapComponent)`
height: 350px;
`

function TripInfo() {
    return(
        <>
        <NewMapComponent>

        </NewMapComponent>
        <GreenBoxRoundedCorner>

        </GreenBoxRoundedCorner>
        </>
    )
}

export default TripInfo