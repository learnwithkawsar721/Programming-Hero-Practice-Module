const student = {
    id: 101,
    name: 'kamal',
    major: 'computer',
    subject: ['System', 'NetWork', 'Innovation', 'Cyber'],
    isRice: false,
    bestFriend: {
        id: 102,
        name: 'masud'
    },
    tackExam: function () {
        console.log(this.name, "Taking Exam")
    },
}

student.tackExam();