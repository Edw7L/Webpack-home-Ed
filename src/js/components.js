import '../css/components.css';
import logo from '../assets/logotest.png';


const image = logo;
export const webpacklogo = () =>{
    const div = document.createElement('div');
    div.insertAdjacentHTML("beforeend",`<img src=${image} alt="logo test" width="300px" >`);

    document.body.append(div);
}

export const saludar = (name) => {
    console.log('Creando etiqueta h1');

    const h1 = document.createElement('h1');
    h1.innerText = `Hello, ${name}`;

    document.body.append(h1);
}