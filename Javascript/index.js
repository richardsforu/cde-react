/*
Two types of function bindings
1. static
2. dynamic
*/
// 3. global object -> window object


//---------------------------------------- 
//1. static binding
//---------------------------------------
var p1={
    name:'Praveen',
    sayName:sayName // static binding
}


var p2={
    name:'James',
    sayName:function(){
        //-------
        console.log('V2:: Your name is '+this.name);
    }
} 


// 2. global
function sayName(){
    // 1. local 
      console.log('V1:: Your name is '+this.name); // who is invoking this function called 'this' keyword
}

//sayName(); // called by global object window ---> blank value
//p1.sayName()  // called by p1 object --> Praveen
//p2.sayName() // called by p2 object ---> James

//----------------------------------
// CTS-Academy module
//----------------------------------

function doTraining(sub,duration,location){
    //console.log('trainer '+this.name+' is teaching '+sub +' for '+duration+' at '+location);
    console.log(`trainer ${this.name} is teaching ${sub} for ${duration} hours at ${location}`);
}

doTraining('Reaxt JS',60,'Chennai');

//---------------
// way - 1
//let trainer={name:'Praveen',doTraining:doTraining}
//trainer.doTraining('Spring',50,'Delhi');

// way - 2
/*let trainer1={name:'Praveen'}
trainer1.doTraining=doTraining
trainer1.doTraining('Mean Stack',80,'Hyderabad')
let trainer2={name:'Divya'}
trainer2.doTraining=doTraining;
trainer2.doTraining('Java',20,'Web EX')
*/

//-------------------------
// 2. Dynamic Binding
//-------------------------

let trainer={name:'Deepa'}
// 1. Eage Invocation

// way - 1 : call
//doTraining.call(trainer,'PHP',40,'Pune');
// way - 2 : apply
//doTraining.apply(trainer,['Dot Net',80,'Chennai']);

// B. Lazy Invocation
// way - 3 : bind
 let newFun=doTraining.bind(trainer);
 newFun('ASP',30,'Delhi')
 newFun('Hibernate',90,'Chennai');

 const person={
     name:'Praveen',
     mobile:2739297
 }

 Object.preventExtensions(person);

 // Q1 : makw peeson object as const
 // Peeson objet must not add any new propeeties
 // Avoid obverriding data ans adding nrew properties

//person.name='James' // avoid
//person.age=87 // avoid











