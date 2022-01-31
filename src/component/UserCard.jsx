import { Avatar, Card, CardHeader, IconButton, Typography } from '@mui/material'
import React, { useState } from 'react'
import { makeStyles } from '@mui/styles'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const useStyles = makeStyles(() => ({
    card_border: {
        borderTop: "1px solid #30383c",
        borderBottom: "1px solid #30383c",
        borderRadius: "2px",
    },
    hide_expand_icon: {
        display: 'none',
    }
}))

function UserCard({ contact_image, contact_name, last_msg }) {

    const [hover, setHover] = useState();

    function handleMouseIn() {
        setHover(true);
    }

    function handleMouseOut() {
        setHover(false);
        console.log('hello')
    }

    let c;
    if (hover) {
        c = "red";
    } else {
        c = "green";
    }

    const classes = useStyles()
    return (
        <Card
            sx={{
                background: "#131c21",
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}
            className={classes.card_border}
            onMouseOver={handleMouseIn}
            onMouseOut={handleMouseOut}
        >
            <CardHeader
                avatar={
                    <Avatar sx={{position:'static'}} src={contact_image} />
                }

                title={
                    <Typography sx={{ color: '#d3e0e2',ml:"10%" }} >{contact_name}</Typography>
                }
                subheader={
                    <Typography component="p" variant="p" sx={{ color: "#d3e0e2",ml:"10%",whiteSpace:'nowrap' }} >{last_msg}</Typography>
                }

            />
            <IconButton sx={{ color: "#b1b3b5" }} className={hover ? null : classes.hide_expand_icon}>
                <ExpandMoreIcon />
            </IconButton>
        </Card>
    )
}

export default UserCard
