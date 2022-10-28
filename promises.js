
console.log("started")

// async function fakeReqest(rgb){

//     const delay = Math.floor(Math.random() * 2000) + 1;

//     setTimeout(()=>{
//         document.body.style.backgroundColor = 'rgb'
//     })
// }

// -------- Color change async functions --------

// const colorChange = (color, delay) =>{
//     return new Promise((resolve, reject)=> {
//         setTimeout(()=>{
//             document.body.style.backgroundColor = color;
//             resolve();
//         }, delay);
//     })
// }

// const colorPicker = () => {
//     let r = Math.floor(Math.random() * 255) + 1;
//     let g = Math.floor(Math.random() * 255) + 1;
//     let b = Math.floor(Math.random() * 255) + 1;

//     return "rgb(" + r + "," + g + "," + b +")";
// }

// async function caller(){
//     const delay = 1000;
//     // const delay = Math.floor(Math.random() * 255) + 1;
//     await colorChange(colorPicker(), delay);
//     await colorChange(colorPicker(), delay);
//     console.log('ended')
// }

// caller();


// ------------------------------------------------------------

const fakeReqest = (url) =>{

    return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 2000) + 1;

    setTimeout(()=>{
        if(delay < 1500)
        {
            resolve('Page found! ' + url);
        }
        else    
            reject('page not found!');
    }, delay)
})
};

// async function fakeReqest(url){

//      const delay = Math.floor(Math.random() * 2000) + 1;

//      setTimeout(()=>{

//         if(delay < 1500)
//         {
//             return ('Page found! ' + url);
//         }
//         else    
//             throw ('page not found!');
//      }, delay)
// };

async function req(){

    try{
        let val1 = await fakeReqest('page');
        console.log(val1, 'working')
        let val2 = await fakeReqest('page2')
        console.log(val2, 'working');
        console.log("ended");
    } catch(e){
        console.log("Error ", e);
    }
}

req();