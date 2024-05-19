const $ = document
const wrapper = $.querySelector('.wrapper')
const toast = $.querySelector('.toast')
const title = $.querySelector('span')
const subtitle = $.querySelector('p')
const icon = $.querySelector('.icon')
const closeIcon = $.querySelector('.close-icon')

window.addEventListener('load', () => {
    function ajaxRequest () {
        fetch('	https://jsonplaceholder.org/posts')
            .then(res => {
                console.log('response',res);
                if (res.status < 300 || res.status === 200){
                    toast.classList.remove('offline')
                    title.innerHTML = 'you\'re online now'
                    subtitle.innerHTML = 'Hurray! Internet is connected'
                    icon.innerHTML = '<i class="uil uil-wifi"></i>'
                    closeIcon.addEventListener('click', () => {
                    })
                    setTimeout(() => {
                        wrapper.classList.add('hide')
                    }, 5000);
                }else {
                    offline()
                }
            })
            .catch(err => {
                console.log('Error',err);
                offline()
            })
    }

    function offline() {
        wrapper.classList.remove('hide')
        toast.classList.remove('online')
        title.innerHTML = 'you\'re offline now'
        subtitle.innerHTML = 'Oops! Internet is disconnected :('
        icon.innerHTML = '<i class="uil uil-wifi-slash"></i>'
    }

    setInterval(() => {
        ajaxRequest()
    }, 100);
})

