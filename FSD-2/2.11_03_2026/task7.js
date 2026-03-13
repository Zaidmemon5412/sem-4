const person =

    [

        {

            name: "PQR", age: 38

        },

        {

            name: "ABC", age: 35

        },

        {

            name: "XYZ", age: 47

        }

    ]

console.log(person.sort((a, b) => b.age - a.age))

console.log(person.sort((a,b) => b.age-a.age)[0])