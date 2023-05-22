console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for (let i = 1; i <= 100; i++)
{
    if ((i % 2 == 0) != true)
    {
        console.log(i);
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for (let i = 1; i <= 100; i++)
{
    if ((i % 3 == 0) == true && (i % 5 == 0) == true) {
        console.log("FIZZBUZZ");
        continue;
    }
    else if ((i % 3 == 0) == true)
    {
        console.log("FIZZ");
        continue;
    }
    else if ((i % 5 == 0) == true)
    {
        console.log("BUZZ")
        
    }
}

// Exercise 3
console.log("EXERCISE 3:\n==========\n");
var i = 1;
console.log("while");
while (i <= 100)
{
    if ((i % 2 == 0) != true)
    {
        console.log(i);
    }
    i++;
}
i = 1;
console.log("do/while");
do {
    if ((i % 2 == 0) != true) {
        console.log(i);
    }
    i++;
} while (i <= 100);
console.log("while");
i = 1;
while (i <= 100)
{
    if ((i % 3 == 0) == true && (i % 5 == 0) == true) {
        console.log("FIZZBUZZ");
        i++
        continue;
    }
    else if ((i % 3 == 0) == true) {
        console.log("FIZZ");
        i++
        continue;
    }
    else if ((i % 5 == 0) == true)
    {
        console.log("BUZZ")
    }
            i++
}
i = 1;
console.log("do/while");
do {

    if ((i % 3 == 0) == true && (i % 5 == 0) == true) {
        console.log("FIZZBUZZ");
        i++
        continue;
    }
    else if ((i % 3 == 0) == true) {
        console.log("FIZZ");
        i++
        continue;
    }
    else if ((i % 5 == 0) == true) {
        console.log("BUZZ")
    }
    i++
} while (i <= 100);

// Exercise 4
console.log("EXERCISE 4:\n==========\n");
let value = Math.round((Math.random() * 500));
let n = Math.round(Math.random() * (500 - 100) + 100);
for (let x = 0; x <= n; x++)
{
    if (x == value)
    {
        console.log("Found value!");
        break;
    }
    else if (x == n)
    {
        console.log("Did not find value");
    }
    //Exercise 5
    console.log("EXERCISE 5:\n==========\n");
}
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);
let end = Math.round(Math.random() * (1000 - 100) + 100);
console.log(fizzDivisor);
console.log(buzzDivisor);
for (let y = start; y <= end; y++)
{
    if ((y % fizzDivisor == 0) == true && (y % buzzDivisor == 0) == true)
    {
        console.log("FIZZBUZZ");
        console.log(y);
        continue;
    }
    else if ((y % fizzDivisor == 0) == true)
    {
        console.log("FIZZ");
        console.log(y);
        continue;
    }
    else if ((y % buzzDivisor == 0) == true)
    {
        console.log("BUZZ")
        console.log(y);

    }
}




