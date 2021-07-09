import { Fab } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'

import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';


const FloatButtonContainer = styled.div`

`


const useStyles = makeStyles((theme) => ({
    color: {
        color: "#7BEFB2",
        backgroundColor:"#7BEFB2",
    },
}));

function FloatingButton({className, onClick}){
    const classes = useStyles();
    
    return(
    <FloatButtonContainer className={className}>
    <Fab className={classes.color} aria-label="add" size="large">
            <AddIcon style ={{ fontSize: 40, color: "black" }} onClick={onClick}/>
    </Fab>
    </FloatButtonContainer>
    )
}

export default FloatingButton