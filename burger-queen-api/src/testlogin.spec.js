import {render} from "@testing-library/react"
import '@testing-library/jest-dom';
import {Login} from './Login.jsx';

it('deberia renderizarse correctamente', () => {
   render(<Login/>);
} )