class Media {
    constructor(nama) {
        this.nama = nama;
    }

    info() {
        console.log("Media: " + this.nama);
    }
}

class MediaAudio extends Media {
    putar(menit) {
        console.log(this.nama + " diputar selama " + menit + " menit.");
    }
}

class MediaBaca extends Media {
    baca(halaman) {
        console.log(this.nama + " dibaca sampai halaman " + halaman + ".")
    }
}

class Podcast extends MediaAudio {}

class Ebook extends MediaBaca {}

class LaguMP3 extends MediaAudio {}

function putarSemua(daftar) {
    daftar.forEach((x) => x.putar(10));
}

function bacaSemua(daftar) {
    daftar.forEach((x) => x.baca(25));
}

const podcast = new Podcast("Podcast_2955");
const ebook = new Ebook("Ebook_2955");
const lagu = new LaguMP3("Lagu_2955")

podcast.info();
ebook.info();
lagu.info();

putarSemua([podcast, lagu]);
bacaSemua([ebook]);