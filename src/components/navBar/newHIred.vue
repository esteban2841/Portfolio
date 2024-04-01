
const oportunities = [
{
    company : 'Globant',
    interview: new Date('22-02-2024'),
},
{
    company : 'Globant',
    interview: new Date('24-02-2024'),
},
// let's pretend this periodicity of a new interview would be monthly//

]


function* estebanNewHiredByGlobant(oportunities){
    //as we see below we would go iterating as many times as must be necessary//
    for(let wouldThisTimeBe = 0; wouldThisTimeBe < oportunities.length; wouldThisTimeBe++){
        yield oportunities[wouldThisTimeBe]
    }
    //until the value returned by this generator function
     would be value: hired and done: true//
}


const isEstebanHiredThisTime = estebanNewHiredByGlobant()

isEstebanHiredThisTime.next()
isEstebanHiredThisTime.next()
isEstebanHiredThisTime.next()
isEstebanHiredThisTime.next()
isEstebanHiredThisTime.next()
isEstebanHiredThisTime.next()
isEstebanHiredThisTime.next()
