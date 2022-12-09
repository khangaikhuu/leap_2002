console.log('Day-19: Object and Methods')


let teacher = {
    firstName: 'Dolgor',
    lastName: 'Dondog',
    age: 35,
    experience: 10,
    children: [],
    isMarried: true,
    address: {
        district: 'BGD',
        khoroolol: '2-r',
        khoroo: '1-r',
        houseNumber: '016',
        doorNumber: '4'
    },
    GPA: 94.5,

    introduction: function(){
        console.log(`Миний нэрийг ${this.lastName}-ийн ${this.firstName} гэдэг.
        Би ${this.age} настай. Би ${this.experience} жилийн ажлын туршлагатай.
        Би ${this.address.district}-т амьдардаг.`);
    }
}

teacher.introduction()