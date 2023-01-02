export const viaCEPService = {
    getCEP,
};

//api do viaCEP, requisição e tratamento para preenchimento do resto dos inputs
const baseUrl = 'https://viacep.com.br/ws'

async function getCEP(cep: string) {
    const response = await fetch(`${baseUrl}/${cep}/json/`);
    return response;
}