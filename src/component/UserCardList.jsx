import { Box } from '@mui/material'
import React, { useState } from 'react'
import UserCard from './UserCard'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(()=>({
    scroll_content : {
        overflowY: "scroll",
    }
}))

const name_image_list = [
    {
        contact_image:"images/u1.jpg",
        contact_name:"Rohan",
        last_msg:'hii',
    },
    {
        contact_image:"images/u2.webp",
        contact_name:"Sohan",
        last_msg:'you',
    },
    {
        contact_image:"images/u3.jpg",
        contact_name:"Mohan",
        last_msg:'Where ?',
    },
    {
        contact_image:"images/u2.webp",
        contact_name:"Sohan",
        last_msg:'How ',
    },
    {
        contact_image:"images/u2.webp",
        contact_name:"Sohan",
        last_msg:'Hello',
    },
    {
        contact_image:"images/u3.jpg",
        contact_name:"Mohan",
        last_msg:'Where ?',
    },
    {
        contact_image:"images/u2.webp",
        contact_name:"Sohan",
        last_msg:'hii',
    },
    {
        contact_image:"images/u3.jpg",
        contact_name:"Mohan",
        last_msg:'hii',
    },
    {
        contact_image:"images/u2.webp",
        contact_name:"Sohan",
        last_msg:'How a',
    },
    {
        contact_image:"images/u2.webp",
        contact_name:"Sohan",
        last_msg:'hii',
    },
    {
        contact_image:"images/u3.jpg",
        contact_name:"Mohan",
        last_msg:'hii',
    },
    {
        contact_image:"images/u4.jpg",
        contact_name:"Rahul",
        last_msg:'hii',
    },
]

const data = name_image_list.map((item)=>{
    console.log(item.contact_image)
    return <UserCard last_msg={item.last_msg} contact_image={item.contact_image} contact_name={item.contact_name} />
})

function UserCardList() {
    const classes = useStyles();

    return (
        <Box >
            {data}
        </Box>
    )
}

export default UserCardList
