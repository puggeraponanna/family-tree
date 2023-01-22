import { Card, CardContent, Typography } from '@mui/material';
import React from 'react';


interface NodeProps {
    name: string
    spouses?: string[]
}

const Node = ({ name, spouses }: NodeProps) => {
    const sp = spouses?.map((s) => <Typography>{s}</Typography>)
    return (
        <Card sx={{ minWidth: 275, width: 50 }} >
            <CardContent>
                <Typography variant='h5'>
                    {name}
                </Typography>
                {sp}
            </CardContent>
        </Card >

    )
}

export default Node;
