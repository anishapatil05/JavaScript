function checkingIsprime(num) {
    var isPrime = true;
    if (num <= 1) {
        isPrime = false;
    }
    for (var i = 2; i < num; i++) {
        if (num % i == 0) {
            isPrime = false;
        }
    }

    if (isPrime == true) {
        console.log("Number is Prime");
    } else {
        console.log("Number is not Prime");
    }




}
checkingIsprime(23);