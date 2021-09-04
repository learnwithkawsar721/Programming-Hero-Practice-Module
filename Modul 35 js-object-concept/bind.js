const kamalUddin = {
    id: 101,
    name: 'Kamal Uddin',
    balence: 5000,
    treatDay: function (money) {
        this.balence = this.balence - money;
        return this.balence;
    }
}
kamalUddin.treatDay(500);
kamalUddin.treatDay(200);
kamalUddin.treatDay(300);

const jamalUddin = {
    id: 102,
    name: "jamal Uddin",
    balence: 6000,
}
// kamalUddin.treatDay.bind(jamalUddin.bind(100));
// const jamlaTreatDay = kamalUddin.treatDay.bind(jamalUddin);
// jamlaTreatDay(100);
// jamlaTreatDay(1200);
// jamlaTreatDay(300);

const balamUddin = {
    id: 103,
    name: 'balam Uddin',
    balence: 10000,
}
const balamTreatDay = kamalUddin.treatDay.bind(balamUddin);
balamTreatDay(100);
console.log(balamUddin);