Vue.config.devtools = true;



var app = new Vue (
    {
        el: '#root',
        data: {
            messaggio : 'Benvenuto in VUE',
            immagine : 'https://picsum.photos/id/1/1000/700' ,
        }
    }
)