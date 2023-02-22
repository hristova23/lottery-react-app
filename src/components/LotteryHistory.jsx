import { Link, List, ListItem, ListItemText, Paper, Typography } from '@mui/material'
import React from 'react'

const lotteryHistory = [
    "0xa27b0DEC4DAB0e0129dc7EdeA71635DeC855DfCe",
    "0x17F6AD8Ef982297579C203069C1DbfFE4348c372",
    "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4",
    "0x0A098Eda01Ce92ff4A4CCb7A4fFFb5A43EBC70DC",
    "0x0A098Eda01Ce92ff4s4CCb7A4fFFb5A43EBC70DC",
    "0x0A098Eaa01Ce92ff4A1CCb7A4fFFb5A43EBC70DC",
    "0x0A098Eta01Ce92ff4A4CCb7A4fFFb5A43EBC70DC",
]

function LotteryHistory() {
  return (
    <>
        <Typography 
            variant='h2'
            sx={{mt:4}}>
            Lottery History
        </Typography>
        <List sx={{
            maxHeight: 300,
            overflow: 'auto',
            borderRadius: 'sm',
            }}>
            {
            lotteryHistory.map((lottery) => (
                <ListItem>
                <Paper elevation={3}>
                    <ListItemText
                    sx={{p:2}}
                    primary={`Lottery #${lotteryHistory.indexOf(lottery, 0)} winner`}
                    secondary={<Link href={`https://etherscan.io/address/${lottery}`}>{lottery}</Link>}
                    />
                </Paper>
                </ListItem>
            ))
            }
        </List>
    </>
  )
}

export default LotteryHistory