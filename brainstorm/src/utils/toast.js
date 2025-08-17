import { toast } from 'react-toastify';

export const showToast = {
    success: (message) => {
        toast.success(message, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            style: {
                background: '#1a1a1a',
                color: '#4ade80',
                borderRadius: '0.75rem',
                border: '1px solid #374151'
            },
        });
    },
    error: (message) => {
        toast.error(message, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            style: {
                background: '#1a1a1a',
                color: '#ef4444',
                borderRadius: '0.75rem',
                border: '1px solid #374151'
            },
        });
    }
};
