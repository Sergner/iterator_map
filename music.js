//Создайте объект musicCollection, который содержит массив альбомов
const musicCollection = [
    {
        title: "Nevermind",
        artist: "Nirvana",
        year: "1991"
    },
    {
        title: "Metallica",
        artist: "Metallica",
        year: "1991"
    },
    {
        title: "1",
        artist: "The Beatles",
        year: "2000"
    },
    {
        title: "The Dark Side of the Moon",
        artist: "Pink Floyd",
        year: "1973"
    },
    {
        title: "Back in Black",
        artist: "AC/DC",
        year: "1980"
    }
];

console.log(musicCollection);

//Реализуйте кастомный итератор для объекта musicCollection. Итератор должен перебирать альбомы по порядку.

musicCollection[Symbol.iterator] = function () {
    return {
        current: 0,
        last: this.length,
        next() {
            return this.current <= this.last
                ? { done: false, value: musicCollection[this.current++] }
                : { done: true };
        }
    }
}

for (let music of musicCollection) {
    console.log(`${music.title} - ${music.artist} (${music.year})`);
}
