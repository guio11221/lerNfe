const test = require('node:test');
const assert = require('node:assert/strict');
const NFe = require('../src');

test('documented NF-e usage exposes number, issuer, and total', () => {
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
  assert.equal(nfe.nrNota(), '123');
  assert.equal(nfe.emitente().nome(), 'Empresa Exemplo');
  assert.equal(nfe.total().valorNota(), '150.00');
});
