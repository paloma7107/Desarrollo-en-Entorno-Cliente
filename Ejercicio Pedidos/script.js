const input = document.getElementById("numComensales");
const error = document.getElementById("error");
const info = document.getElementById("info");
const form = document.getElementById("form");
const form2 = document.getElementById("form2");
const button1 = document.getElementById("button1");

// Se ejecuta cuando ya hemos pulsado el primer botón y guardado el valor
 const comprobarNumComensales = (numComensales) => {
    // Comprueba que el valor está entre 1 y 5
    if (numComensales >= 1 && numComensales <= 5) {
        // Se ejecuta tantas veces como comensales
        for (let i = 1; i <= numComensales; i++) {
            // Crea los elementos de un nuevo form
            let newLabel = document.createElement('label');
            let newInput = document.createElement('input');
            let br = document.createElement('br');

            // Introduce el texto y los atributos en los nuevos elementos
            newLabel.innerText = `Introduce el menú del comensal ${i}`;
            newLabel.setAttribute('for', `comensal${i}`);

            newInput.setAttribute('id', `comensal${i}`);

            // Quita la clase oculto para que aparezca el segundo form
            form2.classList.remove('oculto');

            // Mete los nuevos elementos en el HTML
            form2.appendChild(newLabel);
            form2.appendChild(newInput);
            form2.appendChild(br);
        };
        // Crea un segundo botón para el segundo form
        let button2 = document.createElement('button');
        // Introduce el texto y los atributos del segundo botón
        button2.innerText = 'Enviar';
        button2.setAttribute('id', 'button2');
        // Mete el nuevo botón en el HTML
        form2.appendChild(button2);

        // Desabilita el primer botón para no poder mandar un nuevo número de comensales
        button1.disabled = true;

        // Resetea el valor error
        error.innerHTML = '';

        // Inicializa el valor a vacío para quitarlo del input de la pantalla
        input.value = '';

    // Se ejecuta si el valor introducido no está entr2 1 y 5
    } else {
        // Introduce el error en el HTML
        error.innerText = 'El número de comensales debe estar entre 1 y 5';
        // Inicializa el valor a vacío para quitarlo del input de la pantalla
        input.value = '';
    };
}; 

// Se ejecuta cuando ya hemos pulsado el segundo botón y guardado los valores
const comprobarMenus = (menus, button2) => {
    // Cambia si uno de los valores en inválido
    let esValido = true;

    // Recorre los menús introducidos
    for (let i = 0; i < menus.length; i++) {
        // Comprueba si son menús válidos
        if (menus[i] < 1 || menus[i] > 3) {
            // Si no lo son cambia la variable a false
            esValido = false;
            break;
        };
    };

    // Se ejecuta si los menús introducidos son todos válidos
    if (esValido) {
        // Recorre los menús
        for (let i = 0; i < menus.length; i++) {
            // Crea un párrafo por cada comensal
            let newP = document.createElement('p');
            // Le introduce el texto oportuno
            newP.innerText = `→ El comensal ${i+1} ha pedido el menú ${menus[i]}`;
            // Lo introduce en el HTML
            info.appendChild(newP);
        };

        // Desabilita el segundo botón para no poder mandar un nuevo número de menú
        button2.disabled = true;

        // Resetea el valor error
        error.innerHTML = '';
    // Se ejecuta sin los menús introducidos no son válidos
    } else {
        // Cambia el texto del error para mostrarlo por pantalla.
        error.innerText = 'Los menús deben estar entre el 1 y el 3';
    };
};

// Se ejecuta al pulsar el primer botón
form.addEventListener('submit', event => {
    event.preventDefault();

    // Guarda el número de comensales introducidos
    const numComensales = input.value;
    // Llama a la función y le pasa el número de comensales
    comprobarNumComensales(numComensales);
});

// Se ejecuta al pulsar el segundo botón
form2.addEventListener('submit', event => {
    event.preventDefault();

    // Guardará los menús de cada comensal
    const menus = [];

    // Recorre los elementos que hay dentro del segundo form
    for (let i = 1; i < form2.children.length; i+=3) {
        // Guarda en el array los valores de los input
        menus.push(form2.children[i].value);
        // Resetea el valor de los input
        form2.children[i].value = '';
    };

    // Guarda el elemento del botón
    const button2 = form2.children[form2.children.length - 1];

    // Le pasa el array de los menús y el elemento del segundo botón
    comprobarMenus(menus, button2);
});