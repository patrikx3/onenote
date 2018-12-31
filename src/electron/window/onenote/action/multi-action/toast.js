const toast = (data) => {

    global.p3x.onenote.toast.action({
        message: data.message
    })

}

module.exports = toast