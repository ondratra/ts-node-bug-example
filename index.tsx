

const sleep = async (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function testingFunc() {
    await sleep(1000);
    return "testDone";
}

Promise.all([testingFunc()]).then((result) => console.log(result));

//.map((result) => console.log(result));
