# Imóveis Web3

Bem-vindo ao Imóveis Web3, um site de aluguel e compra de imóveis baseado em blockchain, inspirado no Zillow.com. Este projeto utiliza tecnologias Web3 para oferecer um sistema transparente e descentralizado para transações imobiliárias.

## Tecnologias Utilizadas

- **Solidity**: Linguagem de programação para contratos inteligentes.
- **JavaScript**: Utilizado para lógica de frontend e backend.
- **Hardhat**: Ferramenta para desenvolvimento e teste de contratos inteligentes.
- **Ethers.js**: Biblioteca para interagir com a blockchain Ethereum.
- **React.js**: Biblioteca de JavaScript para construir interfaces de usuário.

## Funcionalidades

- **Compra de Imóveis**: Permite que os usuários comprem imóveis de forma descentralizada.
- **Aluguel de Imóveis**: Permite que os usuários aluguem imóveis usando contratos inteligentes.
- **Transparência**: Todas as transações são registradas na blockchain, garantindo segurança e transparência.
- **Experiência do Usuário**: Interface amigável e intuitiva, inspirada no design do Zillow.com.

## Instalação

Siga os passos abaixo para configurar o ambiente de desenvolvimento:

1. **Clone o repositório**:
    ```bash
    git clone https://github.com/seu-usuario/imoveis-web3.git
    cd imoveis-web3
    ```

2. **Instale as dependências**:
    ```bash
    npm install
    ```

3. **Compile os contratos inteligentes**:
    ```bash
    npx hardhat compile
    ```

4. **Implante os contratos na blockchain local**:
    ```bash
    npx hardhat node
    npx hardhat run scripts/deploy.js --network localhost
    ```

5. **Inicie o servidor de desenvolvimento do React**:
    ```bash
    npm start
    ```

## Uso

1. Abra o navegador e vá para `http://localhost:3000`.
2. Conecte sua carteira Ethereum (ex: MetaMask).
3. Navegue pelo site para explorar as funcionalidades de compra e aluguel de imóveis.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

1. **Fork o repositório**
2. **Crie uma branch** (`git checkout -b feature/nova-feature`)
3. **Commit suas mudanças** (`git commit -am 'Adiciona nova feature'`)
4. **Push para a branch** (`git push origin feature/nova-feature`)
5. **Abra um Pull Request**

## Entenda o Processo

### Real Estate NFT
Representa a propriedade imobiliária na forma de um NFT. Este NFT simboliza a propriedade digital do imóvel.

### Escrow Contract
Um contrato de escrow (ou contrato de caução) que segura os fundos e a propriedade até que todas as condições da transação sejam atendidas.

### Buyer (Comprador)
O comprador inicia o processo de compra do imóvel.

### Seller (Vendedor)
O vendedor lista a propriedade para venda.

### Appraiser (Avaliador)
Realiza a avaliação do imóvel para determinar seu valor de mercado.

### Inspector (Inspetor)
Inspeciona a propriedade para garantir que está em boas condições e que não há problemas ocultos.

### Lender (Credor)
Fornece o financiamento necessário para a compra do imóvel.

## Fluxo do Processo

1. **Seller lists property (O vendedor lista a propriedade)**
   - O vendedor coloca a propriedade à venda, criando um NFT que representa a propriedade.

2. **Buyer deposits earnest (O comprador deposita o sinal)**
   - O comprador deposita um valor de sinal (earnest money) no contrato de escrow para mostrar sua intenção séria de compra.

3. **Appraisal (Avaliação)**
   - Um avaliador realiza a avaliação do imóvel para determinar seu valor de mercado.

4. **Inspection (Inspeção)**
   - Um inspetor verifica a condição do imóvel para garantir que está em boas condições.

5. **Lender approves (O credor aprova)**
   - O credor revisa e aprova o empréstimo com base na avaliação e inspeção.

6. **Lender funds (O credor financia)**
   - O credor transfere os fundos necessários para o contrato de escrow.

7. **Transfer Ownership (Transferência de propriedade)**
   - O contrato de escrow libera o NFT (representando a propriedade) para o comprador e transfere a propriedade do imóvel.

8. **Seller gets paid (O vendedor recebe o pagamento)**
   - Os fundos do empréstimo são liberados para o vendedor, completando a transação.

## Resumo

O diagrama mostra um processo de compra e venda de imóveis utilizando contratos inteligentes e NFTs para garantir transparência, segurança e eficiência. Todas as partes envolvidas (comprador, vendedor, avaliador, inspetor e credor) interagem com o contrato de escrow para assegurar que todas as condições são atendidas antes da conclusão da transação.

---

Obrigado por utilizar Imóveis Web3!
