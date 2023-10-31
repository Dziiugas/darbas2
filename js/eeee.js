/**
 * Parasykite programa, kurios pagalba galima atlikti studentu paieska pagal varda
 * issokusia prompt lange ivedamas studento vardas.
 * jeigu studentas surandamas, console isvedamas jo duomenys.
 * jeigu neranda, isvedamas uzrasas: tokio studento nera.
 * paieskai realizuoti galite naudoti Js funkcija includes
 */

let ieska = prompt('Studento vardas')

let students =[

    {
        id:1,
        firstName:"Tadas",
        lastName:"Tadauskas",
        email:"tadasddasd",
        group:"students",
        marks:[
            {
                subject:'Programming',
                mark:8
            },
            {
                subject:'IT',
                mark:6
            },
            {
                subject:'Math',
                mark:7
            }
        ]
    },
    {
        id:2,
        firstName:"nadas",
        lastName:"nadauskas",
        email:"tadasddasd",
        group:"students",
        marks:[
            {
                subject:'Programming',
                mark:6
            },
            {
                subject:'IT',
                mark:4
            },
            {
                subject:'Math',
                mark:8
            }
        ]
        
    },
    {
        id:3,
        firstName:"adas",
        lastName:"adauskas",
        email:"tadasddasd",
        group:"students",
        marks:[
            {
                subject:'Programming',
                mark:9
            },
            {
                subject:'IT',
                mark:9
            },
            {
                subject:'Math',
                mark:6
            }
        ]
    },
    {
        id:4,
        firstName:"radas",
        lastName:"radauskas",
        email:"tadasddasd",
        group:"students",
        marks:[
            {
                subject:'Programming',
                mark:6
            },
            {
                subject:'IT',
                mark:8
            },
            {
                subject:'Math',
                mark:4
            }
        ]
    },
    {
        id:5,
        firstName:"madas",
        lastName:"madauskas",
        email:"tadasddasd",
        group:"students",
        marks:[
            {
                subject:'Programming',
                mark:6
            },
            {
                subject:'IT',
                mark:6
            },
            {
                subject:'Math',
                mark:6
            }
        ]
    },
]
/**
 * isvesti studentu tokiu budu
 * studentai:
 * ----------------
 * rokas
 * rakauskas
 * rokasdasd
 * grupe:student
 * ----------------
 * ....(kitas studentas)
 */
console.log("Studentai:")
for(let student of students){
    console.log('-------------------')
    for(let studentData in student){
        if(studentData==='group'){
            console.log(`grupe:${student[studentData]}`)
        }else{
            if(studentData==='marks'){
                console.log('Ivertinimai: ');
                for(marks of student[studentData]){
                    for(marks of student[studentData]){
                        console.log(`${marks.subject}:${marks.mark}`)
                    }
                }
            }
        }
    console.log(student[studentData]);
    
    }
}