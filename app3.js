console.log('inicio de script');

setTimeout(() => {
    console.log('Primer Timeout');
}, 5000);

setTimeout(() => {
    console.log('Segundo Timeout');
}, 0);

setTimeout(() => {
    console.log('Tercer Timeout');
}, 0);

console.log('fin de script');