//creo il collegamento vue
var app = new Vue ({
    el: '#root',
    current_genre: '',
    album_corrente: 0,
    data: {
        //imposto una lista_album dove tramite api assegnerò tutti i dati di ogni rispettivo album
        lista_album: [

        ]
    },

    //a pagina caricata prendo l'api dove ho i dati da importare
    mounted() {
        const self = this;
        axios.get('https://flynn.boolean.careers/exercises/api/array/music')
            .then(function(risposta) {
                //assegno alla lista_album i dati dell'album che poi ciclerò attraverso un v-for
                self.lista_album = risposta.data.response;
            });
    }
});
