function processamentoCalc(tipo, valor) {
    console.log(tipo, valor);
    if (tipo === 'acao') {
        switch (valor) {
            case 'c':
                document.getElementById("display").value = '';
                break;
            case '/':
            case 'x':
            case '+':
            case '.':
            case '-':
                document.getElementById("display").value += valor;
                break;
            case '=':
                document.getElementById("display").value = eval(document.getElementById("display").value);
                break;
            default:
                break;
        }
    } else {
        document.getElementById("display").value += valor;
    }
}