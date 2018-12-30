const toast = (data) => {
    console.log(data)
    global.p3x.onenote.toast.action({
        message: data.message
    })

}

module.exports = toast