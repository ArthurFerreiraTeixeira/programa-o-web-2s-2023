exports.mostrarCalculadora = (req, res) => {
    res.render('calculadora', { result: '', numA: '', numB: '', operacao: '' });
  };
  
  exports.calcular = (req, res) => {
    const numA = parseFloat(req.body.numA);
    const numB = parseFloat(req.body.numB);
    const operacao = req.body.operacao;
  
    let result;
    switch (operacao) {
      case '+':
        result = numA + numB;
        break;
      case '-':
        result = numA - numB;
        break;
      case '*':
        result = numA * numB;
        break;
      case '/':
        result = numA / numB;
        break;
      default:
        result = 'Operação inválida';
    }
  
    res.render('calculadora', { result, numA, numB, operacao });
  };
  