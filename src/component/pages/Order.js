import { TextField } from '@mui/material';
const Order = () => {
    return <>
   
    <h1> Book Your Tickets Here</h1>
    <TextField
       id="EventName"
       label="EventName"
       margin="normal"/><br></br>
    <TextField
       id="TimeSlot"
       label="TimeSlot"
       margin="normal"/><br></br>
    <TextField
       id="Seats"
       label="seats"
       margin="normal"/><br></br>
    <button varient="secondary" size="lg" type="button">Enter</button>
    </>;
};

export default Order;