import { AppBar, Avatar, IconButton, Stack, Toolbar, InputBase, InputAdornment } from '@mui/material'
import React from 'react'
import AutorenewIcon from '@mui/icons-material/Autorenew';
import { Box } from '@mui/system';
import AddCommentIcon from '@mui/icons-material/AddComment';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { makeStyles } from '@mui/styles';
import SearchIcon from '@mui/icons-material/Search';

const useStyles = makeStyles((theme) => ({
    button_color: {
        color: '#b1b3b5'
    },
    input_style: {
        height: "30px",
        color: 'white',
        background: "#323739",
        margin: "4px auto",
        width: "95%",
        borderRadius: "10px",
        outline: '0',
        border: '0',
        'input:focus': {
            background: "red",
            outline: '0',
            outline: 'none',
            border: 'none'
        },
    }
}))

function LeftHeader() {
    const classes = useStyles();
    return (
        <Box sx={{ top: 0, position: 'sticky' }}>
            <AppBar sx={{ background: "#2a2f32" }} position='relative'>
                <Toolbar sx={{ background: "#2a2f32" }}>
                    <IconButton>
                        <Avatar src='images/profile.jpg' />
                    </IconButton>
                    <Box sx={{ flexGrow: 1 }} />
                    <Stack direction={'row'} sx={{ color: "white" }} spacing={3}>
                        <IconButton className={classes.button_color} >
                            <AutorenewIcon />
                        </IconButton>
                        <IconButton className={classes.button_color}>
                            <AddCommentIcon />
                        </IconButton>
                        <IconButton className={classes.button_color}>
                            <MoreVertIcon />
                        </IconButton>
                    </Stack>
                </Toolbar>
                {/* <OutlinedInput placeholder='Search contact' className={classes.input_style} /> */}
                <InputBase
                    sx={{px:4}}
                    placeholder='Search contact'
                    className={classes.input_style}
                    startAdornment={
                        <InputAdornment position="start">
                            <SearchIcon sx={{ color: 'white' }} />
                        </InputAdornment>
                    }
                />
            </AppBar>
        </Box>
    )
}

export default LeftHeader
