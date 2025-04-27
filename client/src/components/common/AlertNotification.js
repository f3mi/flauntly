import React, { useContext } from 'react';
import { AlertContext } from '../../context/AlertContext';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import Stack from '@mui/material/Stack';

const AlertNotification = () => {
    const { alerts, removeAlert } = useContext(AlertContext);

    const handleClose = (id) => {
        removeAlert(id);
    };

    return (
        <Stack sx={{ width: '100%', position: 'fixed', zIndex: 9999, top: 70 }}>
            {alerts.map((alert) => (
                <Snackbar
                    key={alert.id}
                    open={true}
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                    autoHideDuration={5000}
                    onClose={() => handleClose(alert.id)}
                >
                    <Alert
                        onClose={() => handleClose(alert.id)}
                        severity={alert.severity}
                        variant="filled"
                        sx={{ width: '100%', mb: 1 }}
                    >
                        {alert.message}
                    </Alert>
                </Snackbar>
            ))}
        </Stack>
    );
};

export default AlertNotification; 