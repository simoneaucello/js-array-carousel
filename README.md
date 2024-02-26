Carosello Mono Array
===
Dato un array contenente una lista di cinque immagini, creare un carosello.

**MILESTONE 1**
Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo un’immagine grande al centro: avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull’aspetto logico.

**MILESTONE 2**
Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell’array fornito e un semplice ciclo for che concatena un template literal.
Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.

**MILESTONE 3**
Al click dell’utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.

**BONUS 1:**
Aggiungere il **ciclo infinito** del carosello. Ovvero se è attiva la prima immagine e l’utente clicca la freccia per andare all’immagine precedente, dovrà comparire l’ultima immagine dell’array e viceversa.

**BONUS 2:**
Aggiungere la visualizzazione di tutte le thumbnails sulla destra dell’immagine grande attiva, come nello screenshot proposto. Tutte le miniature avranno un layer di opacità scura, tranne quella corrispondente all’immagine attiva, che invece avrà un bordo colorato.
Al click delle frecce, oltre al cambio di immagine attiva, gestire il cambio di miniatura attiva.
## Svolgimento
**JavaScript**
1. inserisco tutti i percorsi delle immagini in un array
2. inserisco in .main-wrapper tutti gli elementi html contenenti l'immagine con la classe .hide
    - creo un ciclo dell'array delle immagini e ad ogni ciclo aggiungo il tag con l'immagine ciclata
3. tolgo la classe .hide al primo elemento
4. inizializzo un contatore a 0
5. al click delle frecce incremento o decremento il counter
6. rimetto la classe hide all'elemento con l'indice attuale che si incrementa o decrementa
7. tolgo la classe hide all'elemento a indice contatore (che si è incrementato o decrementato)


