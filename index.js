(async () => {
    const resp = await fetch('/2sdp/users')
    const users = await resp.json()
    let div = ''
    users.forEach(item => {
        div += `<p><img class="imgPidors" src="${item.photo}"></p> <p class="namePidors">${item.name.first} ${item.name.last}</p>`
    })
    document.getElementById('pidors').innerHTML = div
})()
