// inside browser the "this" context refers to windows object
// inside standalone node env the "this" context refers to {} "Empty" object
const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// inside function this does not work it gives undefined

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);// gives undefined
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);// gives undefined
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

//{} return keyword is complusory  where as () return keyword not compulsory

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()