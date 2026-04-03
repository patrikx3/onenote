import registry from '../../registry.mjs'

const toast = (data) => {
    registry.toast.action({
        message: data.message
    });
};

export default toast;
