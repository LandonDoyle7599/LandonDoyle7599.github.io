import React , { FC } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Quote } from "../models"
import { Typography } from '@mui/material'
interface QuoteCardProps {
    quote: Quote;
}

const QuoteCard = (props: QuoteCardProps) => {

    const { quote } = props;


    return (
        <div style={{padding:"10"}}>
            <Card style={{border: "2px solid grey", marginTop:"30px", marginBottom:"30px"}}>
                <CardContent>
                    <Typography variant="h5">
                        {quote.content}
                    </Typography>
                    <Typography variant="h6">
                        {quote.author}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
};


export default QuoteCard;