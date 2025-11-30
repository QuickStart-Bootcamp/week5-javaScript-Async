
const timedPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`5 seconds later... ${new Date().getTime()}`);
    }, 5000);
});
console.log(`now ${new Date().getTime()}`);

timedPromise.then(value => console.log(value));