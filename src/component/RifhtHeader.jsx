import { AppBar, Avatar, IconButton, Stack, Toolbar } from '@mui/material'
import React from 'react'
import { Box } from '@mui/system';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(()=>({
    button_color:{
        color:'#b1b3b5'
    }
}))

function RifhtHeader() {
    const classes = useStyles();
    return (
        <Box sx={{top:0,position:'sticky'}}>
            <AppBar position='relative'>
                <Toolbar sx={{background:"#2a2f32"}}>
                    <IconButton>
                        <Avatar src='images/u3.jpg' />
                    </IconButton>
                    <Stack spacing={-2} sx={{mb:'auto',ml:"15px"}}>
                        <p>Rishi</p>
                        <small sx={{color:'#b1b3b5'}}>last seen today at 19:57</small>
                    </Stack>
                    <Box sx={{flexGrow:1}}/>
                    <Stack direction={'row'}  spacing={3}>
                        <IconButton className={classes.button_color} >
                            <SearchIcon/>
                        </IconButton>
                        <IconButton className={classes.button_color}>
                            <MoreVertIcon/>
                        </IconButton>
                    </Stack>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default RifhtHeader
