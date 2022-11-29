function greeting() {
    let userName = 'Ana';
    console.log(userName);

    if(userName === 'Ana') {
        console.log(`Hello ${userName}!`)
    }
}

greeting();
console.log(userName); // No la detecta debido a que está dentro de una función