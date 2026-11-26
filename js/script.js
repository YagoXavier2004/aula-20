// =============================================================================
// SENAI MG • PROGRAMAÇÃO FRONT-END
// AULA 20: OPERADORES, LÓGICA E ESTRUTURAS CONDICIONAIS
// ATIVIDADE PRÁTICA: 4 DESAFIOS DE REGRAS DE NEGÓCIO
// =============================================================================

console.log("=== INÍCIO DA ATIVIDADE 20: OPERADORES E CONDICIONAIS ===");


// =============================================================================
// ATIVIDADE 1: CALCULADORA DE DESCONTO PROGRESSIVO (IF / ELSE IF / ELSE)
// =============================================================================
// Contexto: Um e-commerce aplica descontos progressivos baseados no total da compra:
// - Compras até R$ 100,00: 0% de desconto (sem desconto).
// - Compras de R$ 100,01 a R$ 300,00: 10% de desconto (0.10).
// - Compras acima de R$ 300,00: 15% de desconto (0.15).
//
// Instruções:
// 1. Declare uma constante 'valorCompra' com o valor 250.00.
// 2. Declare uma variável com let chamada 'porcentagemDesconto' iniciando com 0.
// 3. Utilize uma estrutura if / else if / else para definir a porcentagem correta.
// 4. Calcule o 'valorDesconto' (valorCompra * porcentagemDesconto).
// 5. Calcule o 'valorFinal' (valorCompra - valorDesconto).
// 6. Exiba no console uma mensagem formatada usando Template Literals:
//    "Compra: R$ 250.00 | Desconto: R$ 25.00 (10%) | Total a Pagar: R$ 225.00"
//    (Dica: utilize .toFixed(2) para formatar duas casas decimais).

console.log("--- Atividade 1: Desconto Progressivo ---");

// TODO: Escreva seu código da Atividade 1 abaixo:
const valorCompra = 250.00;
let porcentagemDesconto = 0;

if (valorCompra <= 100) {
    porcentagemDesconto = 0;
} else if (valorCompra <=300) {
    porcentagemDesconto = 0.10;
} else {
    porcentagemDesconto = 0.15;
}
const valorDesconto = valorCompra * porcentagemDesconto;
const valorFinal = valorCompra - valorDesconto;
console.log(
`Compra: R$ ${valorCompra.toFixed(2)}  Desconto: R$ ${valorDesconto.toFixed(2)} (${porcentagemDesconto * 100}%)  Total a Pagar: R$ ${valorFinal.toFixed(2)}`
);

// crase permiti que eu insira informações na linha mesmo que não seja um texto  ${ Algo }
// .toFixed formata um número utilizando notação de ponto fixo




// =============================================================================
// ATIVIDADE 2: VALIDADOR DE ACESSO AO PAINEL (&&, || E ===)
// =============================================================================
// Contexto: Para acessar a área de administração do sistema, o usuário deve:
// 1. Estar com o login ativo (usuarioLogado === true).
// 2. Ter idade igual ou superior a 18 anos (idadeUsuario >= 18).
// 3. Ter perfil de "ADMIN" OU "GERENTE" (perfilUsuario === "ADMIN" || perfilUsuario === "GERENTE").
//
// Instruções:
// 1. Declare as variáveis:
//    - const usuarioLogado = true;
//    - const idadeUsuario = 20;
//    - const perfilUsuario = "ADMIN";
// 2. Crie uma variável 'temPermissao' que avalia se o perfil é "ADMIN" ou "GERENTE" usando ||.
// 3. Em um if / else, combine todas as regras usando o operador &&:
//    - Se todas forem verdadeiras: imprima "🔓 Acesso Autorizado ao Painel Administrativo!".
//    - Caso contrário: imprima "🔒 Acesso Negado: Credenciais ou idade insuficientes.".
// 4. Teste de Segurança: Declare 'tokenDigitado = "123"' (string) e 'tokenValido = 123' (number).
//    Teste com '===' se eles são iguais e imprima o resultado booleano no console.

console.log("--- Atividade 2: Validador de Acesso ---");

// TODO: Escreva seu código da Atividade 2 abaixo:

const usuarioLogado = true;
const idadeUsuario = 20;
const perfilUsuario = "ADMIN";

let temPermissao = "ADMIN"  || "GERENTE";

if (usuarioLogado && idadeUsuario === 20 && perfilUsuario === "ADMIN" ){
    console.log("🔓 Acesso Autorizado ao Painel Administrativo!");
} else {
    console.log("🔒 Acesso Negado: Credenciais ou idade insuficientes.");
}

const tokenDigitado = "123";
const tokenValido = 123;
const respostaSeguranca = tokenDigitado === tokenValido;
console.log(respostaSeguranca);





// =============================================================================
// ATIVIDADE 3: RASTREADOR DE STATUS DE PEDIDO (SWITCH / CASE)
// =============================================================================
// Contexto: Um cliente deseja acompanhar o status de entrega do seu produto.
// Os status possíveis são:
// - "CRIADO": "📝 Pedido recebido! Aguardando confirmação de pagamento."
// - "PAGO": "💳 Pagamento confirmado! Produto sendo embalado."
// - "ENVIADO": "🚚 Pedido em transporte! A caminho do seu endereço."
// - "ENTREGUE": "📦 Pedido entregue com sucesso! Aproveite sua compra."
// - Qualquer outro valor: "❓ Status desconhecido. Por favor, contate o suporte."
//
// Instruções:
// 1. Declare uma constante chamada 'statusPedido' com o valor "ENVIADO".
// 2. Crie uma estrutura switch(statusPedido) com os cases acima, lembrando do 'break'!
// 3. Adicione a cláusula 'default' para capturar qualquer status inválido.

console.log("--- Atividade 3: Rastreamento com Switch ---");


const statusPedido = "ENVIADO";
switch (statusPedido) {
    case "CRIADO":
        console.log("📝 Pedido recebido! Aguardando confirmação de pagamento.");
        break;
    case "PAGO":
        console.log("💳 Pagamento confirmado! Produto sendo embalado.");
        break;
    case "ENVIADO":
        console.log("🚚 Pedido em transporte! A caminho do seu endereço.");
        break;
    case "ENTREGUE":
        console.log("📦 Pedido entregue com sucesso! Aproveite sua compra.");
        break;
    default:
    console.log("❓ Status desconhecido. Por favor, contate o suporte.");
        break;
}





// =============================================================================
// ATIVIDADE 4: PAR/ÍMPAR E ESTOQUE COM OPERADOR TERNÁRIO (? :)
// =============================================================================
// Contexto: Aplicação de decisões concisas de uma linha usando o operador ternário.
//
// Instruções:
// Parte A (Par ou Ímpar):
// 1. Declare uma constante 'numero' com o valor 18.
// 2. Use o operador módulo (%) e um operador ternário (? :) para definir a variável 'tipoNumero':
//    Se (numero % 2 === 0) for verdadeiro, 'tipoNumero' recebe "PAR", senão "ÍMPAR".
// 3. Imprima no console usando Template Literals: "O número 18 é classificado como PAR."
//
// Parte B (Disponibilidade de Estoque):
// 4. Declare uma constante 'quantidadeEstoque' com o valor 0.
// 5. Use um operador ternário para criar a variável 'avisoEstoque':
//    Se quantidadeEstoque for maior que 0, recebe "✅ Em Estoque", senão "❌ Esgotado".
// 6. Imprima no console usando Template Literals: "Disponibilidade do Produto: ❌ Esgotado".

console.log("--- Atividade 4: Operador Ternário & Módulo ---");

// TODO: Escreva seu código da Atividade 4 abaixo:

const numero = 18;
const tipoNumero = (numero % 2 === 0) ? "PAR" : "ÍMPAR";
console.log(`O número ${numero} é classificado como ${tipoNumero}.`);

const quantidadeEstoque = 0;
const avisoEstoque = (quantidadeEstoque > 0) ? "✅ Em Estoque" : "❌ Esgotado";
console.log(`Disponibilidade do Produto: ${avisoEstoque}`);



console.log("=== FIM DA ATIVIDADE 20 ===");
