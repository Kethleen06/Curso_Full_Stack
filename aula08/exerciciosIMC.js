const nome = "Kethleen";
const sobrenome = "Gonçalves"
const idade = 19;
const peso= 59;
const alturaEmM = 1.61;
let indiceMassaCorporal; // peso / (altura * altura)
let anoNascimento = 2006;
indiceMassaCorporal = peso / (alturaEmM * alturaEmM)
anoNascimento = 2025 - idade
console.log(` ${nome} ${sobrenome} tem  ${idade} anos, pesa ${peso}KG`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}`);
console.log(`nome nasceu em ${anoNascimento}.`);
