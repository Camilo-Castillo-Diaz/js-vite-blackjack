import { pedirCarta , valorCarta,} from "./"
import { crearCartaHTML } from "./crear-carta-html"
/**
 * turno de la computadora
 * 
 * @param {number} puntosMinimos puntos minimos que la compu necesita para ganar 
 * @param {HTMLElement} puntosHTML html para mostrar los puntos 
 * @param {HTMLElement}divCartasComputadora para mostrar las cartas 
 * 
 * @param {Array <String>} deck
 */

export const turnoComputadora = ( puntosMinimos ,puntosHTML, divCartasComputadora , deck = []) => {
    
    if (!puntosMinimos ) throw new error ("puntos minimos son necesarios ")
    if (!puntosHTML ) throw new error ("argumento puntoshtml son necesarios ")

  
 let puntosComputadora = 0

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;

        const imgCarta = crearCartaHTML(carta)
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}

