export function hello(gb) {
    let name = 'Foo';
    let greeting = `Hello ${name}`;

    if (gb) {
        return 'Good by';
    }

    if(false) {
        console.log('code highlighted by istanbul coverage report.')
    }

    return greeting;
}
