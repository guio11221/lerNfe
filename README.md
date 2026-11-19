# LerNfe

Biblioteca Node.js para consultar dados de Notas Fiscais Eletrônicas (NF-e) a partir do XML.

## Instalação

```bash
npm install lernfe
```

## Exemplo funcional

Os métodos de consulta são disponibilizados pelo objeto retornado por `require('lernfe')`. A API pública utiliza `nrNota()`, `emitente().nome()` e `total().valorNota()`, não `tagValue()`.

```javascript
const NFe = require('lernfe');

const xmlNfe = `
<nfeProc>
  <NFe>
    <infNFe>
      <ide><nNF>123</nNF></ide>
      <emit><xNome>Empresa Exemplo</xNome></emit>
      <total><ICMSTot><vNF>150.00</vNF></ICMSTot></total>
    </infNFe>
  </NFe>
</nfeProc>`;

const nfe = NFe(xmlNfe);

console.log('Número da NF-e:', nfe.nrNota());
console.log('Emitente:', nfe.emitente().nome());
console.log('Valor total:', nfe.total().valorNota());
```

Saída esperada:

```text
Número da NF-e: 123
Emitente: Empresa Exemplo
Valor total: 150.00
```

Para XMLs reais, consulte os métodos de cada objeto retornado, por exemplo `identificacaoNFe()`, `destinatario()`, `item(1)` e `cobranca().duplicata(1)`.
