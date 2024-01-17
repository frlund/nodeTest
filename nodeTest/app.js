import chalk from 'chalk';

// Funksjon for å endre fargen på tekst
function endreFarge() {
    const tekstElement = document.getElementById('colorText');

    // Bruk av chalk for å fargelegge tekst i konsollen
    console.log(chalk.blue('Dette er blå tekst'));
    console.log(chalk.red('Dette er rød tekst'));
    console.log(chalk.bold.green('Dette er fet grønn tekst'));

    // Endre fargen på HTML-elementet
    tekstElement.style.color = 'green';
}

// Kall funksjonen når siden lastes
window.onload = endreFarge;