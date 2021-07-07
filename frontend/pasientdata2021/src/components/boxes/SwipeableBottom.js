
import SwipeableBottomSheet from 'react-swipeable-bottom-sheet';

function SwipeableBottom({children, style}) {

    const bodyStyle = {
        backgroundColor: "#7BEFB2",
        borderRadius: "0px 50px 0px 0px",
        boxShadow: "rgb(0 0 0 / 70%) 0px 0px 10px"
    };

    return (
    <SwipeableBottomSheet overflowHeight={40} style={style} bodyStyle={bodyStyle} topShadow={false}>
        <div style={{ height: '350px' }}>
            {children}
        </div>
    </SwipeableBottomSheet>
    )
}

export default SwipeableBottom
