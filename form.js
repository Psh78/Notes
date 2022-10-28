

// const tForm = document.querySelector('#tweetForm');
// const tweetsInput = document.querySelector('input');

// tForm.addEventListener('submit', function(evt){

//     evt.preventDefault();

//     const uname = tForm.elements.userName;
//     const tweet = tForm.elements.tweets;
    
//     uname.autocomplete = off;
//     tweet.autocomplete = "off";

//     //fnewTweet(uname.value, tweet.value);
//     console.log(uname);
//     uname.value = "";
//     tweet.value = "";
// })

// const newTweet = (uname, tweet) =>{
//     const list = document.querySelector("#tweetBlock");
//     const elmt = document.createElement('li');
//     const bTag = document.createElement('b');

//     bTag.append(uname);
//     elmt.append(bTag);
//     elmt.append(`-${tweet}`);
//     list.append(elmt);
// }

const forms = document.querySelector('form');

forms.addEventListener('submit', function(evt){

    evt.preventDefault();

    //console.log(forms.elements.product);
    const product = forms.elements.product;
    const quantity = forms.elements.qty;

    output(quantity.value, product.value);

    product.value = "";
    quantity.value = "";
});

// forms.addEventListener('on', function(evt){

//     evt.preventDefault();

//     //console.log(forms.elements.product);
//     const product = forms.elements.product;
//     const quantity = forms.elements.qty;

//     output(quantity.value, product.value);

//     product.value = "";
//     quantity.value = "";
// });

const output = (qty, prod) =>{

    const list = document.querySelector("#list");
    const ele = document.createElement('li');

    ele.appendChild(document.createTextNode(qty));
    ele.appendChild(document.createTextNode(prod) );

    list.append(ele);
};