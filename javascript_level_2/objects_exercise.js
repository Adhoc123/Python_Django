var obj = {
    name: 'john smith',
    job: 'Programmer',
    age: 31,
    nameLength: function()
    {
        console.log(this.name.length);
    },
    report: function()
    {
        alert('Name is '+this.name+', Job is '+this.job+', Age is '+this.age);
    },
    lastName: function()
    {
        alert(this.name.split(' ')[1]);
    }
};

obj.nameLength();
obj.report();
obj.lastName();
