function oddOrEven(num) {
    evenNum = [];
    oddNum = [];
    // imporve out function and test if forEach will works
    // use forEach instead of for loop
    num.forEach(v => {
        if (v % 2 ==0) {
            evenNum.push(v);
        } else {
            oddNum.push(v);
        }
    });
    // it worked
    // comment and test if for loop does same thing 
    // for (let i=0; i<num.length; i++) {
    //     if (num[i] % 2 ==0) {
    //         evenNum.push(num[i]);
    //     } else {
    //         oddNum.push(num[i]);
    //     }
    // }
    // console.log(evenNum);
    // console.log(oddNum);
}

numAray = [1, 23, 43, 16, 78, 23, 43, 15, 16, 75, 10, 101, 23, 76];
oddOrEven(numAray);