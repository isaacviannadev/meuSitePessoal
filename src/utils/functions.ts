export function calcularIdade(dia: number, mes: number, ano: number) {
  var d = new Date(),
    ano_atual = d.getFullYear(),
    mes_atual = d.getMonth() + 1,
    dia_atual = d.getDate(),
    ano = ano,
    mes = mes,
    dia = dia,
    quantos_anos = ano_atual - ano;

  if (mes_atual < mes || (mes_atual == mes && dia_atual < dia)) {
    quantos_anos--;
  }

  return quantos_anos < 0 ? 0 : quantos_anos;
}
