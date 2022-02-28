function t() { console.log("hello world") };

async function x() { await new Promise(r => setTimeout(r, 100)); }
x();
t();