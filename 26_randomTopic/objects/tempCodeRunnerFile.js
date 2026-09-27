const student = {
    name: "Rahul",
    marks: [80, 90, 95],

    showMarks: function() {
        this.marks.map(function(mark) {
            console.log(this.name, mark);
        });
    }
};

student.showMarks();