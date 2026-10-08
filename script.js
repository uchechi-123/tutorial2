const form = document.getElementById("login-form");
form.addEventListener ("submit", function (event) {
    event.preventDefault();
const firstname = document.getElementById("firstname").value
const password = document.getElementById("password").value

    // console.log("welcome back")
    // console.log(firstname.value)
    // console.log(password.value)

if (firstname === ""){
    alert ("please enter your firstname");
    return;
    }

    if (firstname === ""){
    alert ("please enter your firstname");
    return;
    }
    // alert ("login information submitted");
    console.log("Form Submitted");
    console.log(firstname);
    console.log("password");
});
            // LOCAL STORAGE
            // SET ITEM
localStorage.setItem("name", "John");
                    // GET ITEM
const name = localStorage.getItem("name",);
console.log(name);


// localStorage.setItem("Country", "China");
// localStorage.setItem("course", "web");
// const course = localStorage.getItem("course");
// const country = localStorage.getItem("Country");
// console.log(course);
// console.log(country);

localStorage.setItem("age", "20");
const age = Number(localStorage.getItem("age", "20"));
console.log(age +5);

// console.log(typeof age);

            // remove item

            localStorage.setItem("username", "uche");
            localStorage.removeItem("username");
            const username = localStorage.getItem("username");
            console.log(username);


// localStorage.setItem("Country", "China");
// localStorage.clear("course", "web");
// const course = localStorage.getItem("course");
// const country = localStorage.getItem("Country");
// console.log(course);
// console.log(country);r

        // JASON
// const student = {
//     name: "Uche",
//     age: 20
// };

// const studentData = JSON.stringify(student);
// console.log(studentData);


const student = {
    name: "Uche",
    age: "18",
    country: "China",
    course: "Comp",
}

localStorage.setItem(
    "student",
    JSON.stringify(student)
);
 const studentData = JSON.parse(
 localStorage.getItem("student")
 );
 console.log(studentData.name);
 console.log(studentData.age);
 console.log(studentData.course);
 console.log(studentData.country);

 const fruits =[ 
        "apple", 
        "mango" , 
         "orange",
         "guava"
    ];

 localStorage.setItem(
    "fruits",
    JSON.stringify(fruits)
);

const fruitsData = JSON.parse(
 localStorage.getItem("fruits")
 );

 console.log(fruits);
 






 



            










9










