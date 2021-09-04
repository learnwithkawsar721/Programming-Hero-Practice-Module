const kalamUddin = {
    id: 1,
    name: 'kalam uddin',
    money: 2000,
    treatDay: function (expance, bokshis, tax) {
        this.money = this.money - expance - bokshis - tax;
        console.log(this);
        return this.money;
    }
}

const balamUddin = {
    id: 2,
    name: 'Balam Uddin',
    money: 3000
}
const salamUddin = {
    id: 2,
    name: 'salam Uddin',
    money: 4000
}
kalamUddin.treatDay.call(salamUddin, 1200, 120, 60);

kalamUddin.treatDay.apply(balamUddin, [500, 100, 20]);