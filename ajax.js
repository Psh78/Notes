
// --------------------- WITHOUT USING FETCH ---------------------
// const req = new XMLHttpRequest();


// req.onload = function() {
//     console.log("Loaded");

//     const result = JSON.parse(this.responseText);
//     console.log(result );
// }

// req.onerror = function() {

//     console.log("error");
//     console.log(this);
// }

// req.open("GET", "https://swapi.dev/api/people/1");

// req.send();

// ----------------- USING Fetch ----------------------


// fetch("http://swapi.dev/api/people/1/")
// .then((res)=>{
//     console.log("resolved");
//     console.log(res); // By default the fetch ges resolved when we receive headers but not the actual data. SO we need to use another method called json()
    
//     // res.json()
//     // .then((data)=>{
//     //     console.log("Json done", data);
//     // })

//     // --------------- or --------------
//     return res.json();
// })
// .then((data)=>{
//     console.log(data)
//     return fetch("http://swapi.dev/api/people/2/");
// })
// .then((dtat)=>{
//     return dtat.json();
// })
// .then((val=>{
//     console.log(val);
// }))
// .catch((e)=>{
//     console.log("Error");
//     console.log(e);
// })


// ---------------------- BY using AYSNC -----------------

const loadStarWars = async () =>{
    try{
        const res = await fetch("http://swapi.dev/api/people/11");
        const data = await res.json();
        console.log(data);
    
        const res2 = await fetch("http://swapi.dev/api/pe234ople/2a23");
        const data2 = await res2.json();
        console.log(data2);
        } catch(e){
            console.log(e)
        }

}

loadStarWars();;