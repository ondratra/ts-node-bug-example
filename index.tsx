

const sleep = async (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function testingFunc() {
    await sleep(1000);
    return "testDone";
}

Promise.all([testingFunc()]).map((result) => console.log(result));
