import {Fragment} from 'react'
import RighttHeader from './RifhtHeader';
import { AppBar, Avatar, IconButton, InputAdornment, InputBase, Stack, Toolbar } from '@mui/material'
import React from 'react'
import { Box } from '@mui/system';
import SearchIcon from '@mui/icons-material/Search';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import { makeStyles } from '@mui/styles';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendIcon from '@mui/icons-material/Send';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';

const useStyles = makeStyles(()=>({
    button_color:{
        color:'#b1b3b5'
    },
    input_style: {
        height: "30px",
        color: 'white',
        background: "#323739",
        margin: "4px auto",
        width: "100%",
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
function Chatcontent() {
    const classes = useStyles();

    return (
        <Fragment sx={{ position: "relative" }}>
            <RighttHeader />


        <Box sx={{bottom:0,width:"65%",position:'fixed'}}>
            <AppBar position='relative'>
                <Toolbar sx={{background:"#2a2f32",px:4}}>
                <IconButton className={classes.button_color}>
                    <EmojiEmotionsIcon/>
                </IconButton>
                <IconButton className={classes.button_color}>
                    <AttachFileIcon/>
                </IconButton>
                <InputBase
                    sx={{}}
                    placeholder='Search contact'
                    className={classes.input_style}
                />
                <IconButton className={classes.button_color}>
                    <KeyboardVoiceIcon/>
                </IconButton>
                <IconButton className={classes.button_color}>
                    <SendIcon/>
                </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
        </Fragment>
    )
}

export default Chatcontent
