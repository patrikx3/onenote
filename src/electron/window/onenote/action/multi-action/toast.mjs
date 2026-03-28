const toast = (data) => {
    global.p3x.onenote.toast.action({
        message: data.message
    });
};

export default toast;
