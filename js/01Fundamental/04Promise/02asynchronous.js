// Asynchronous Promise

let promise = new Promise((res, rej) => {
    let download = ["pic1.jpg", "pic2.png", "pic3.jpg"];
    // let download = [];

    let done = false;
    download.length>0 ? done = true : done = false;

    console.log("downloading...");
    setTimeout(() => {
        if (done) res(download);
        else rej(new Error("download failed!"));
    }, 5000);
});


promise.then(res => {
    console.log(res);
}, rej => {
    if (rej instanceof Error) {
        console.log(rej.name);
        console.log(rej.message);
        // console.log(rej.stack);
    }
    else console.log(rej);
});

