var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} Horas`)
if (hora <= 5 ){
console.log('Boa Madrudada')}

else if( hora <= 12){
  console.log('Bom Dia')
}

else if ( hora <= 18 ){
  console.log('Boa tarde')
}
else{
  console.log('Boa noite')
}
