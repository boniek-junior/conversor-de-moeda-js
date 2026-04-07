//Cotação de moeda do dia
const USD = 4.87
const EUR = 5.25
const GBP = 6.15

// Obtendo elementos do DOM
const form = document.querySelector("form")
const amount = document.getElementById('amount')
const currency = document.getElementById('currency')
const footer = document.querySelector('main footer')
const description = document.getElementById('description')
const result = document.getElementById('result')

// Manipulando o input
amount.addEventListener('input', () => {
  const hasCaracterRegex = /\D+/g
  amount.value = amount.value.replace(hasCaracterRegex, '')
  console.log(amount.value)
})

// Manipulando o submit
form.addEventListener("submit", (event) => {
  event.preventDefault()
  console.log(currency.value)

  switch (currency.value) {
    
    case 'USD':
      convertCurrency(amount.value, USD, 'US$')
      break
    case 'EUR':
      convertCurrency(amount.value, EUR, '€')
      break
    case 'GBP':
      convertCurrency(amount.value, GBP, '£')
      break
    default:
      console.log('Moeda não suportada')
  }
})

// Função
function convertCurrency(amount, price, symbol) {
  console.log(amount, price, symbol)

  try {
    // Atualizando a cotação da moeda
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`
    console.log(description.textContent)  
    
    //Calcula o total
    let total = String(amount * price).replace('.', ',')

    // Verifica se o total é um número válido
    if (isNaN(total)) {
      return alert('Valor inválido, digite o valor corretamente.')
    }

    //Exibe o resultado total 
    result.textContent = `R$ ${total} Reais`
    
    // Aplica a classe que exibe o footer
    footer.classList.add('show-result')
  } catch (error) {
    // Remove a classe do footer removendo ele da tela
    console.error(error)
    footer.classList.remove('show-result')
    alert('Erro ao converter moeda, tente novamente.')
  }
}

// Formata a moeda em real brasileiro
function formatCurrencyBRL(value) {
  return Number(value).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
})}