import * as React from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

export default function Dialoge() {

    let navigate = useNavigate()

    const [open, setOpen] = React.useState(true);

    const handleClose = () => {
        setOpen(false);
        navigate('/tasks')
    };

    return (
        <Dialog className='dialog' open={open}>
            <DialogTitle >Your details have been successfully saved in the system </DialogTitle>
            <Button color='warning' onClick={() => handleClose()}>continue</Button>
        </Dialog>
    );
}
