const penyerang = {
    serang() {
        console.log(this.nama + " menyeranng musuh.");
    },
};

const penyembuh = {
    sembuhkan() {
        console.log(this.nama + " menyembuhkan rekan.");
    },
};

const pelindung = {
    bertahan() {
        console.log(this.nama + " mengangkat perisai.");
    },
};

function applyCapabilities(Kelas, ...kemampuan) {
    Object.assign(Kelas.prototype, ...kemampuan);
}

class Ksatria {
    constructor(nama) {
        this.nama = nama;
    }
}

class Penyihir {
    constructor(nama) {
        this.nama = nama;
    }
}

applyCapabilities(Ksatria, penyerang, pelindung);
applyCapabilities(Penyihir, penyembuh);

const ksatria = new Ksatria("Ksatria_2955");
const penyihir = new Penyihir("Penyihir_2955");

ksatria.serang();
ksatria.bertahan();
penyihir.sembuhkan();

console.log(penyihir.nama + " bisa menyerang? " + (typeof penyihir.serang === "function"));
console.log(ksatria.nama + " bisa menyembuhkan? " + (typeof ksatria.sembuhkan === "function"));