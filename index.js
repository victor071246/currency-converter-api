// console.log("hello world");
import axios from "axios";

// Acessando valores passados pelo console (linha de comando)
const moeda1 = process.argv[2]; // Primeiro valor após o nome do arquivo
const moeda2 = process.argv[3]; // Segundo valor após o nome do arquivo
const quantidade = process.argv[4];

if (!moeda1 || !moeda2 || !quantidade) {
  console.log("Uso: node index.js <moeda_origem> <moeda_destino> <quantidade>");
  process.exit(1);
}

async function converterMoeda(from, to, amount) {
  try {
    const response = await axios.get(
      `https://v6.exchangerate-api.com/v6/d9d99e97b17de8129ef24459/pair/${from}/${to}/${amount}`
    );

    const taxa_de_conversao = String(response.data.conversion_rate);
    const resultado = String(response.data.conversion_result);

    console.log(
      `A conversão de ${quantidade} ${moeda1} para ${moeda2} é de: ${resultado} ${moeda2}, com taxa de conversão de 1 ${moeda1} para ${taxa_de_conversao} ${moeda2}`
    );
  } catch (error) {
    console.error("Erro na conversão:", error.message);
  }
}

converterMoeda(moeda1, moeda2, quantidade);
