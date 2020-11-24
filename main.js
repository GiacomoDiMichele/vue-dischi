//creo il collegamento vue
var app = new Vue ({
    el: '#root',
    current_genre: '',
    album_corrente: 0,
    data: {

    },
    mounted() {
        const self = this;
        axios.get()
            .then(function(risposta) {
                self.lista_album = risposta.data.response;
            });
    }
});
