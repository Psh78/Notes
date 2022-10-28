

// --------- Lexical Scope -------- //

/* An inner function nesed inside a parent funciton has access to the variables 
   defined in he scope of parent or outer function.
   
   But it won't work from child to parent
*/

/*    
    let mainVar = "Prashanh";

    function parent()
    {
        let parVar = "Parent";

        function child()
        {
            let childVar = "CHild";
            console.log(childVar);
            console.log(parVar);
            console.log(mainVar);
        }
        child();
    }

    parent();

*/

// ----- Function Expressions ----- //

/*
    They operate on or with functions. 
    They can: 1. Accept oher functions as arguments.
              2. Return a function

    Note: While passing a function as an argument do not use () for the argument.
*/

/*
    function rollDie()
    {
        let roll = Math.floor(Math.random() * 9) + 1;
        console.log(roll);
    }

    function func(fun)
    {
        console.log("First TIme");
        fun();
        console.log("Second time");
        fun();
    }

    case - 1: func(rollDie)                     case - 2: func(rollDie())
    output: First time                          output: 7
            9                                           error: fun is not a function
            Second time
            1
    
*/

// ---- Returning Functions ----- //

/*    function makeBetweenFunction(min, max)
    {
        return function(num)
        {
            return num >= min && num <= max;
        }
    }

    const isChild = makeBetweenFunction(0, 18);
    console.log(isChild(2));

    const isAdult = makeBetweenFunction(18, 40);

    Here the min and max values for isAdult and isChild is set when calling the function consructor or parent functino.
*/

// ----- Methods vs Functions ----- //
/*
    A function defined as a property of an object is called a method.

    const myMath  =
    {
        square(x)
        {
            return x * x;
        },
        cube(x)
        {
            return x ** 3;
        }
    }

    console.log(myMath.square(4)) => output is 16.

*/


// ----- this ----- //

/*
    Use keyword this to access other properties on the same object.

    1. this inside an object refers to that object.
    2. this alone refers to the global window object. 

    const obj = 
    {
        main: "This is obj",
        func()
        {
            console.log(this.main);
        }
    }

    const obj1 = obj.func;

    obj.func();
    obj1();
*/


// ----- IMPORTANT METHODS ----- //

/*
    1. forEach: 

        Accepts a callback function, calls the function once per element in the array.

        we can use a function which is already defined or we can creat a labmda function.

        const num = [1, 2, 3, 4, 5];

        num.forEach(function (x){
            console.log(x);
        });

        (or)

        num.forEach(func)

        function func(x)
        {
            console.log(x);
        }
*/

/*
        2. Map:

            Map accepts a callback function and applices that function to every element 
            and gives a new array.

            const movies = [
                {
                    title : "amadeus",
                    score: 99
                }
                ,
                {
                    title: "stand by me",
                    score: 85
                },
                {
                    title: "parasie",
                    score: 95
                }
            ]

            const titles = movies.map(function (x)
                            {
                                console.log(x.title);
                            });
*/                            

/*

        3. setTimout and setInterval: 

            setTimeout: 
                It is used to pause the code for some time (or) executing a callback function 
                after sometime.

                console.log("Hello");
                
                setTimeout(() => {
                    console.log("are you still there?")
                }, 3000);

                console.log("Goodbye");

                output: Hello
                        Goodbye
                        <afer 3 seconds> are you still there?

                
            setInterval: 
                It is used to run a callback function for every interval of specified time.

                console.log("hello");

                setInterval(()=>{
                    console.log("are you still there?")
                }, 3000);
                console.log("Goodbye");

                output: hello
                        Goodbye
                        <for every three seconds> are you still there?

                TO STOP THE PROGRAM EXCUTION WE HAVE TO CALL THE: clearInterval(Id) function. or close the window
            
                for every setInteravl declaration it returns a Id. We can save the Id in a variable 
                and use the variable to stop the execution of the functoin.

*/

/*

        4. Filter method: 
                
            The filer method takes a callback function which should return either true or false.
            It returns an array of elements which pass the callback function test. i.e, which are true
            for he callback function. 

            const nums = [1, 2, 3, 4, 5];

            const passed = nums.filter((x)=> x % 2 == 1);

            console.log(passed);

            output: [1, 3, 5]

*/


/*  
        5. Every and Some:

        a) every:
            
                Tests whether all elements in an array pass the provided function. 
                It returns a resultant boolean value of all elements.

                const nums1 = [1, 2, 3, 4, 5];

                console.log(nums1.every((x)=> x % 2 == 0));
                console.log(nums1.every((x)=> x >= 1 && x <= 5));

                output: false
                        true

        b) some: 
                Tests whether some elements in an array pass he provided function.
                It returns a boolean value. 

                const nums1 = [1, 2, 3, 4, 5];

                console.log(nums1.some((x)=> x % 2 == 0));
                console.log(nums1.some((x) => x <= 0);

                output: true
                        false

*/


/* 
        6. Reduce

                It exectures a reducer function on each element of he array, resulting
                in a single value. 


                synta:   array.reduce((accumulator, currentvalue) => {
                    return (some logic)
                });

                a) To find some of elements: 
                    const arr = [1, 2, 3, 4, 5];

                    console.log(arr.reduce((accumulator, currentvalue) =>
                    {
                        return accumulator + currentvalue;
                    }))
                    
                    output: 15;

                b) To find the minimum element: 

                    const arr = [1, 2, 3, 4, 5];

                    console.log(arr.reduce((accumulator, currentvalue) => 
                    {
                        if(accumulator < currentvalue)
                            return accumulator;
                        else
                            return currentvalue;
                    }));

                    output: 1

                c) To find the maximum element: 

                    const arr = [1, 2, 3, 4, 5];

                    console.log(arr.reduce((x, y) =>
                    {
                        if(x > y)
                            return x;
                        else 
                            return y;
                    }));

                    output: 5;

            WE CAN ALSO PROVIDE A SECOND ARGUMENT FOR THE REDUCE FUNCTION. wHICH ACTS LIKE THE
            INITIAL VALUE FOR THE ACCUMULATOR.

            const arr = [1, 2, 3, 4, 5];

            console.log(arr.reduce((x, y) => x + y, 10));

            output: 25
            i.e., 10 + 1 = 11
                  11 + 2 = 13
                  13 + 3 = 16
                  16 + 4 = 20
                  20 + 5 = 25
            
            Here 10 acts as the initlal value of the accumulator.
*/


