import React from 'react'
import { Grid } from '@mui/material'
import Chatuser from './Chatuser';
import Chatcontent from './Chatcontent';

function Container() {
    return (
        <div>
            <Grid sx={{height:"100vh"}} container spacing={0}>
                <Grid sx={{bgcolor:'#131c21',position:'relative'}} item xs={4}>
                    <Chatuser/>
                </Grid>
                <Grid sx={{bgcolor:'#262d31'}}  item xs={8}>
                    <Chatcontent/>
                </Grid>
            </Grid>
        </div>
    )
}

export default Container
