import {toast} from "react-toastify";

export const showToastMessage = (message, type) => {
    if (type === 'error') {
        toast.error(message, {
            position: toast.POSITION.TOP_RIGHT
        });
    } else if (type === 'warning') {
        toast.warn(message, {
            position: toast.POSITION.TOP_RIGHT
        });
    } else if (type === 'info') {
        toast.info(message, {
            position: toast.POSITION.TOP_RIGHT
        });
    } else if (type === 'dark') {
        toast.dark(message, {
            position: toast.POSITION.TOP_RIGHT
        });
    } else if (type === 'default') {
        toast(message, {
            position: toast.POSITION.TOP_RIGHT
        });
    } else if (type === 'success') {
        toast.success(message, {
            position: toast.POSITION.TOP_RIGHT
        });
    }
};