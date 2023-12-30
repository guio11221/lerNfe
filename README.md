# Ler Nfe-io

O módulo Nfe-io é uma ferramenta simples para ler XML de notas fiscais, permitindo a extração fácil e eficiente de dados desses documentos.
## Instalação

Certifique-se de ter o Node.js instalado em seu ambiente de desenvolvimento.


```bash
  npm install lernfe
```
    
## Uso/Exemplos

Aqui está um exemplo básico de como usar o lernfe para extrair informações de uma nota fiscal em XML:
```javascript
const nfeIo = require('lernfe');

const xmlNfe = `
  <nfe>
    <!-- ... conteúdo da nota fiscal ... -->
  </nfe>
`;

const nfeData = nfeIo(xmlNfe);

console.log('Número da Nota Fiscal:', nfeData.tagValue('nNF'));
console.log('Emitente:', nfeData.tagValue(['emit', 'xNome']));
console.log('Valor Total:', nfeData.tagValue('vNF'));

```

