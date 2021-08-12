//ARRAY
const paises = [
    {paisN: "Afganistán" , propin: "Si te gustó el servicio, un 15% del total sería perfecto"},
    {paisN: "Alandia" , propin: "No tenemos información sobre esta provincia :( ¡Animate a preguntarle a quien te sirvio!"},
    {paisN: "Albania" , propin: "Si te gustó el servicio, un 15% del total sería perfecto"},
    {paisN: "Argelia" , propin: "El 10% sobre el total de la cuenta es un porcentaje apropiado :)"},
    {paisN: "Samoa Americana" , propin: "Si te gustó el servicio, un 15% del total sería perfecto"},
    {paisN: "Andorra" , propin: "¡Es totalmente opcional! Si te gustó, un 15% está perfecto"},
    {paisN: "Angola" , propin: "Si te gustó el servicio, un 15% del total sería perfecto"},
    {paisN: "Anguilla" , propin: "Si te gustó el servicio, un 15% del total sería perfecto"},
    {paisN: "Antártida" , propin: "Si te gustó el servicio podes dejar 10 dólares :)"},
    {paisN: "Antigua y Barbuda" , propin: "Por lo general está incluida en la cuenta, si te gustó el servicio redondea el total de la cuenta :)"},
    {paisN: "Argentina" , propin: "El 10% del total de la cuenta es muy bien recibido"},
    {paisN: "Armenia" , propin: "El 10% del total de la cuenta es muy bien recibido"},
    {paisN: "Aruba" , propin: "Por lo general está incluida en la cuenta, si te gustó el servicio redondea el total de la cuenta :)"},
    {paisN: "Australia" , propin: "No es común recibir propina por lo que si te parece bien redondear la cuenta, sería genial :)"},
    {paisN: "Austria" , propin: "El 10% del total de la cuenta es muy bien recibido"},
    {paisN: "Azerbaiyán" , propin: "Entre un 10% y 15% del total es muy bien recibido"},
    {paisN: "Bahamas" , propin: "Por lo general está incluida en la cuenta, si te gustó el servicio redondea el total de la cuenta :)"},
    {paisN: "Bahrein" , propin: "Entre un 10% y 15% del total es muy bien recibido"},
    {paisN: "Bangladesh" , propin: "Por lo general está incluida en la cuenta, si te gustó el servicio redondea el total de la cuenta :)"},
    {paisN: "Barbados" , propin: "Por lo general está incluida en la cuenta, si te gustó el servicio redondea el total de la cuenta :)"},
    {paisN: "Bielorrusia" , propin: "Con el 5% del total de la cuenta está perfecto :)"},
    {paisN: "Bélgica" , propin: "No es común dejar propina, suele venir incluido en la cuenta "},
    {paisN: "Belice" , propin: "Entre un 10% y 15% del total es muy bien recibido"},
    {paisN: "Benín" , propin: "Entre un 10% y 15% del total es muy bien recibido"},
    {paisN: "Bermudas" , propin: "Entre un 10% y 15% del total es muy bien recibido"},
    {paisN: "Bután" , propin: "No es común dejar propina, suele venir incluido en la cuenta"},
    {paisN: "Bolivia" , propin: "Con el 5% del total de la cuenta está perfecto :)"},
    {paisN: "Bonaire, Sint Eustatius and Saba" , propin: "Entre un 10% y 15% del total es muy bien recibido"},
    {paisN: "Bosnia y Herzegovina" , propin: "Entre un 10% y 15% del total es muy bien recibido"},
    {paisN: "Botswana" , propin: "Entre un 10% y 15% del total es muy bien recibido"},
    {paisN: "Isla Bouvet" , propin: "No tenemos información sobre esta región :( ¡Animate a preguntarle a quien te sirvio!"},
    {paisN: "Brasil" , propin: "Por lo general está incluida en la cuenta, si te gustó el servicio redondea el total de la cuenta :)"},
    {paisN: "Territorio Británico del Océano Índico" , propin: "No tenemos información sobre esta región :( ¡Animate a preguntarle a quien te sirvio!"},
    {paisN: "Islas Vírgenes del Reino Unido" , propin: "No tenemos información sobre esta región :( ¡Animate a preguntarle a quien te sirvio!"},
    {paisN: "Islas Vírgenes de los Estados Unidos" , propin: "No tenemos información sobre esta región :( ¡Animate a preguntarle a quien te sirvio!"},
    {paisN: "Brunei" , propin: "Entre un 10% y 15% del total es muy bien recibido"},
    {paisN: "Bulgaria" , propin: "El 10% del total de la cuenta es muy bien recibido"},
    {paisN: "Burkina Faso" , propin: "Entre un 10% y 15% del total es muy bien recibido"},
    {paisN: "Burundi" , propin: "El 10% del total de la cuenta es muy bien recibido"},
    {paisN: "Camboya" , propin: "El 10% del total de la cuenta es muy bien recibido"},
    {paisN: "Camerún" , propin: "Entre un 10% y 15% del total es muy bien recibido"},
    {paisN: "Canadá" , propin: "Entre un 10% y 15% del total es muy bien recibido"},
    {paisN: "Cabo Verde" , propin: "Entre un 10% y 15% del total es muy bien recibido"},
    {paisN: "Islas Caimán" , propin: "Entre un 10% y 15% del total es muy bien recibido"},
    {paisN: "República Centroafricana" , propin: "Entre un 10% y 15% del total es muy bien recibido"},
    {paisN: "Chad" , propin: "Entre un 10% y 15% del total es muy bien recibido"},
    {paisN: "Chile" , propin: "Por lo general está incluida en la cuenta, si te gustó el servicio redondea el total de la cuenta :)"},
    {paisN: "China" , propin: "No es común dejar propina ¡Animate a preguntarle a quien te sirvio!"},
    {paisN: "Isla de Navidad" , propin: "No tenemos información sobre esta región :( ¡Animate a preguntarle a quien te sirvio!"},
    {paisN: "Islas Cocos o Islas Keeling" , propin: "No tenemos información sobre esta región :( ¡Animate a preguntarle a quien te sirvio!"},
    {paisN: "Colombia" , propin: "Seguramente te pregunten si queres incluirla en la cuenta. Si aceptas se agregará un 10%"},
    {paisN: "Comoras" , propin: "No tenemos información sobre esta región :( ¡Animate a preguntarle a quien te sirvio!"},
    {paisN: "Congo" , propin: "El 10% del total de la cuenta es muy bien recibido"},
    {paisN: "República Democrática del Congo" , propin: "El 10% del total de la cuenta es muy bien recibido"},
    {paisN: "Islas Cook" , propin: "El 10% del total de la cuenta es muy bien recibido"},
    {paisN: "Costa Rica" , propin: "Por lo general está incluida en la cuenta, si te gustó el servicio redondea el total de la cuenta :)"},
    {paisN: "Croacia" , propin: "El 10% del total de la cuenta es muy bien recibido"},
    {paisN: "Cuba" , propin: "El 10% del total de la cuenta es muy bien recibido"},
    {paisN: "Curaçao" , propin: "Entre un 10% y 15% del total es muy bien recibido"},
    {paisN: "Chipre" , propin: "Con el 5% del total de la cuenta está perfecto :)"},
    {paisN: "República Checa" , propin: "Por lo general está incluida en la cuenta, si te gustó el servicio redondea el total de la cuenta :)"},
    {paisN: "Yibuti" , propin: "No tenemos información sobre esta región :( ¡Animate a preguntarle a quien te sirvio!"},
    {paisN: "Dominica" , propin: "El 10% del total de la cuenta es muy bien recibido"},
    {paisN: "República Dominicana" , propin: "El 10% del total de la cuenta es muy bien recibido"},
    {paisN: "Ecuador" , propin: "Por lo general está incluida en la cuenta, si te gustó el servicio redondea el total de la cuenta :)"},
    {paisN: "Egipto" , propin: "Por lo general está incluida en la cuenta, si te gustó el servicio redondea el total de la cuenta :)"},
    {paisN: "El Salvador" , propin: "Entre un 10% y 15% del total es muy bien recibido"},
    {paisN: "Guinea Ecuatorial" , propin: "Entre un 10% y 15% del total es muy bien recibido"},
    {paisN: "Eritrea" , propin: "El 10% del total de la cuenta es muy bien recibido"},
    {paisN: "Estonia" , propin: "El 10% del total de la cuenta es muy bien recibido"},
    {paisN: "Etiopía" , propin: "Entre un 10% y 15% del total es muy bien recibido"},
    {paisN: "Islas Malvinas" , propin: "Entre un 10% y 15% del total es muy bien recibido"},
    {paisN: "Islas Faroe" , propin: "Por lo general está incluida en la cuenta, si te gustó el servicio redondea el total de la cuenta :)"},
    {paisN: "Fiyi" , propin: "No es común dejar propina ¡Animate a preguntarle a quien te sirvio!"},
    {paisN: "Finlandia" , propin: "Por lo general está incluida en la cuenta, si te gustó el servicio redondea el total de la cuenta :)"},
    {paisN: "Francia" , propin: "Por lo general está incluida en la cuenta, si te gustó el servicio redondea el total de la cuenta :)"},
    {paisN: "Guayana Francesa" , propin: "El 10% del total de la cuenta es muy bien recibido"},
    {paisN: "Polinesia Francesa" , propin: "Por lo general está incluida en la cuenta, si te gustó el servicio redondea el total de la cuenta :)"},
    {paisN: "Tierras Australes y Antárticas Francesas" , propin: "No tenemos información sobre esta región :( ¡Animate a preguntarle a quien te sirvio!"},
    {paisN: "Gabón" , propin: "Entre un 10% y 15% del total es muy bien recibido"},
    {paisN: "Gambia" , propin: "El 10% del total de la cuenta es muy bien recibido"},
    {paisN: "Georgia" , propin: "Entre un 10% y 15% del total es muy bien recibido"},
    {paisN: "Alemania" , propin: "El 10% del total de la cuenta es muy bien recibido"},
    {paisN: "Ghana" , propin: "Con el 5% del total de la cuenta está perfecto :)"},
    {paisN: "Gibraltar" , propin: "El 10% del total de la cuenta es muy bien recibido"},
    {paisN: "Grecia" , propin: "El 10% del total de la cuenta es muy bien recibido"},
    {paisN: "Groenlandia" , propin: "Entre un 10% y 15% del total es muy bien recibido"},
    {paisN: "Grenada" , propin: "Por lo general está incluida en la cuenta, si te gustó el servicio redondea el total de la cuenta :)"},
    {paisN: "Guadalupe" , propin: "No tenemos información sobre esta región :( ¡Animate a preguntarle a quien te sirvio!"},
    {paisN: "Guam" , propin: "Entre un 10% y 15% del total es muy bien recibido"},
    {paisN: "Guatemala" , propin: "Por lo general está incluida en la cuenta, si te gustó el servicio redondea el total de la cuenta :)"},
    {paisN: "Guernsey" , propin: "Entre un 10% y 15% del total es muy bien recibido"},
    {paisN: "Guinea" , propin: "Entre un 10% y 15% del total es muy bien recibido"},
    {paisN: "Guinea-Bisáu" , propin: "Entre un 10% y 15% del total es muy bien recibido"},
    {paisN: "Guyana" , propin: "Entre un 10% y 15% del total es muy bien recibido"},
    {paisN: "Haiti" , propin: "Entre un 10% y 15% del total es muy bien recibido"},
    {paisN: "Islas Heard y McDonald" , propin: "No tenemos información sobre esta región :( ¡Animate a preguntarle a quien te sirvio!"},
    {paisN: "Santa Sede" , propin: "No tenemos información sobre esta región :( ¡Animate a preguntarle a quien te sirvio!"},
    {paisN: "Honduras" , propin: "Entre un 10% y 15% del total es muy bien recibido"},
    {paisN: "Hong Kong" , propin: "Por lo general está incluida en la cuenta, si te gustó el servicio redondea el total de la cuenta :)"},
    {paisN: "Hungría" , propin: "El 10% del total de la cuenta es muy bien recibido"},
    {paisN: "Islandia" , propin: "¡Es totalmente opcional! Si te gustó, un 15% está perfecto"},
    {paisN: "India" , propin: "El 10% del total de la cuenta es muy bien recibido"},
    {paisN: "Indonesia" , propin: "El 10% del total de la cuenta es muy bien recibido"},
    {paisN: "Costa de Marfil" , propin: "Entre un 10% y 15% del total es muy bien recibido"},
    {paisN: "Iran" , propin: "¡Es totalmente opcional! Si te gustó, un 10% está perfecto"},
    {paisN: "Irak" , propin: "El 10% del total de la cuenta es muy bien recibido"},
    {paisN: "Irlanda" , propin: "Entre un 10% y 15% del total es muy bien recibido"},
    {paisN: "Isla de Man" , propin: "No tenemos información sobre esta región :( ¡Animate a preguntarle a quien te sirvio!"},
    {paisN: "Israel" , propin: "El 10% del total de la cuenta es muy bien recibido"},
    {paisN: "Italia" , propin: "Por lo general está incluida en la cuenta, si te gustó el servicio redondea el total de la cuenta :)"},
    {paisN: "Jamaica" , propin: "Entre un 10% y 15% del total es muy bien recibido"},
    {paisN: "Japón" , propin: "Te aconsejamos no dejar propina, puede ser visto como algo malo"},
    {paisN: "Jersey" , propin: "Entre un 10% y 15% del total es muy bien recibido"},
    {paisN: "Jordania" , propin: "El 10% del total de la cuenta es muy bien recibido"},
    {paisN: "Kazajistán" , propin: "Entre un 10% y 15% del total es muy bien recibido"},
    {paisN: "Kenia" , propin: "Entre un 10% y 15% del total es muy bien recibido"},
    {paisN: "Kiribati" , propin: "Entre un 10% y 15% del total es muy bien recibido"},
    {paisN: "Kuwait" , propin: "Por lo general está incluida en la cuenta, si te gustó el servicio redondea el total de la cuenta :)"},
    {paisN: "Kirguizistán" , propin: "No tenemos información sobre esta región :( ¡Animate a preguntarle a quien te sirvio!"},
    {paisN: "Laos" , propin: "No es común recibir propina por lo que si te parece bien redondear la cuenta, sería genial :)"},
    {paisN: "Letonia" , propin: "El 10% del total de la cuenta es muy bien recibido"},
    {paisN: "Líbano" , propin: "Entre un 10% y 15% del total es muy bien recibido"},
    {paisN: "Lesotho" , propin: "Entre un 10% y 15% del total es muy bien recibido"},
    {paisN: "Liberia" , propin: "Por lo general está incluida en la cuenta, si te gustó el servicio redondea el total de la cuenta :)"},
    {paisN: "Libia" , propin: "Entre un 10% y 15% del total es muy bien recibido"},
    {paisN: "Liechtenstein" , propin: "Entre un 10% y 15% del total es muy bien recibido"},
    {paisN: "Lituania" , propin: "Entre un 10% y 15% del total es muy bien recibido"},
    {paisN: "Luxemburgo" , propin: "Entre un 10% y 15% del total es muy bien recibido"},
    {paisN: "Macao" , propin: "Por lo general está incluida en la cuenta, si te gustó el servicio redondea el total de la cuenta :)"},
    {paisN: "Macedonia" , propin: "Por lo general está incluida en la cuenta, no es común dejar propina"},
    {paisN: "Madagascar" , propin: "Por lo general está incluida en la cuenta, si te gustó el servicio redondea el total de la cuenta :)"},
    {paisN: "Malawi" , propin: "Entre un 10% y 15% del total es muy bien recibido"},
    {paisN: "Malasia" , propin: "No es común dejar propina, podes redondear la cuenta y será bien recibido :)"},
    {paisN: "Maldivas" , propin: "Por lo general está incluida en la cuenta, si te gustó el servicio redondea el total de la cuenta :)"},
    {paisN: "Mali" , propin: "Entre un 10% y 15% del total es muy bien recibido"},
    {paisN: "Malta" , propin: "El 10% del total de la cuenta es muy bien recibido"},
    {paisN: "Islas Marshall" , propin: "Entre un 10% y 15% del total es muy bien recibido"},
    {paisN: "Martinica" , propin: "Entre un 10% y 15% del total es muy bien recibido"},
    {paisN: "Mauritania" , propin: "No tenemos información sobre esta región :( ¡Animate a preguntarle a quien te sirvio!"},
    {paisN: "Mauricio" , propin: "Entre un 10% y 15% del total es muy bien recibido"},
    {paisN: "Mayotte" , propin: "Entre un 10% y 15% del total es muy bien recibido"},
    {paisN: "México" , propin: "Entre un 10% y 20% del total es muy bien recibido"},
    {paisN: "Micronesia" , propin: "Entre un 10% y 15% del total es muy bien recibido"},
    {paisN: "Moldavia" , propin: "El 10% del total de la cuenta es muy bien recibido"},
    {paisN: "Mónaco" , propin: "Por lo general está incluida en la cuenta, si te gustó el servicio redondea el total de la cuenta :)"},
    {paisN: "Mongolia" , propin: "El 10% del total de la cuenta es muy bien recibido"},
    {paisN: "Montenegro" , propin: "El 10% del total de la cuenta es muy bien recibido"},
    {paisN: "Montserrat" , propin: "No tenemos información sobre esta región :( ¡Animate a preguntarle a quien te sirvio!"},
    {paisN: "Marruecos" , propin: "¡Es totalmente opcional! Si te gustó, redondear la cuenta sería perfecto"},
    {paisN: "Mozambique" , propin: "El 10% del total de la cuenta es muy bien recibido"},
    {paisN: "Myanmar" , propin: "No es común recibir propina por lo que si te parece bien redondear la cuenta, sería genial :)"},
    {paisN: "Namibia" , propin: "Entre un 10% y 20% del total es muy bien recibido"},
    {paisN: "Nauru" , propin: "Entre un 10% y 20% del total es muy bien recibido"},
    {paisN: "Nepal" , propin: "El 10% del total de la cuenta es muy bien recibido"},
    {paisN: "Países Bajos" , propin: "Redondear la cuenta es lo ideal :)"},
    {paisN: "Nueva Caledonia" , propin: "Redondear la cuenta es lo ideal :)"},
    {paisN: "Nueva Zelanda" , propin: "Redondear la cuenta es lo ideal :)"},
    {paisN: "Nicaragua" , propin: "Por lo general está incluida en la cuenta, si te gustó el servicio redondea el total de la cuenta :)"},
    {paisN: "Níger" , propin: "Entre un 10% y 20% del total es muy bien recibido"},
    {paisN: "Nigeria" , propin: "Entre un 10% y 20% del total es muy bien recibido"},
    {paisN: "Niue" , propin: "Entre un 10% y 20% del total es muy bien recibido"},
    {paisN: "Isla de Norfolk" , propin: "Por lo general no se espera propina :)"},
    {paisN: "Corea del Norte" , propin: "Por lo general no se espera propina :)"},
    {paisN: "Islas Marianas del Norte" , propin: "No tenemos información sobre esta región :( ¡Animate a preguntarle a quien te sirvio!"},
    {paisN: "Noruega" , propin: "¡Es totalmente opcional! Si te gustó, el 15% sería perfecto"},
    {paisN: "Omán" , propin: "El 10% del total de la cuenta es muy bien recibido"},
    {paisN: "Pakistán" , propin: "Por lo general está incluida en la cuenta, si te gustó el servicio redondea el total de la cuenta :)"},
    {paisN: "Palau" , propin: "Entre un 10% y 15% del total es muy bien recibido"},
    {paisN: "Palestina" , propin: "Los locales no suelen dejar propina por lo que si sos turista, el 10% será muy bien recibido"},
    {paisN: "Panamá" , propin: "El 10% del total de la cuenta es muy bien recibido"},
    {paisN: "Papúa Nueva Guinea" , propin: "No es común recibir propina por lo que si te parece bien redondear la cuenta, sería genial :)"},
    {paisN: "Paraguay" , propin: "Por lo general está incluida en la cuenta, si te gustó el servicio redondea el total de la cuenta :)"},
    {paisN: "Perú" , propin: "El 10% del total de la cuenta es muy bien recibido"},
    {paisN: "Filipinas" , propin: "Entre un 10% y 20% del total es muy bien recibido"},
    {paisN: "Islas Pitcairn" , propin: "No tenemos información sobre esta región :( ¡Animate a preguntarle a quien te sirvio!"},
    {paisN: "Polonia" , propin: "El 10% del total de la cuenta es muy bien recibido"},
    {paisN: "Portugal" , propin: "No es común recibir propina por lo que si te parece bien redondear la cuenta, sería genial :)"},
    {paisN: "Puerto Rico" , propin: "Entre un 10% y 15% del total es muy bien recibido"},
    {paisN: "Catar" , propin: "Por lo general está incluida en la cuenta, si te gustó el servicio, el 10% es muy bien recibido :)"},
    {paisN: "Kosovo" , propin: "El 10% del total de la cuenta es muy bien recibido"},
    {paisN: "Reunión" , propin: "Por lo general está incluida en la cuenta, si no, el 10% es muy bien recibido :)"},
    {paisN: "Rumania" , propin: "Entre un 10% y 15% del total es muy bien recibido"},
    {paisN: "Rusia" , propin: "Entre un 10% y 15% del total es muy bien recibido"},
    {paisN: "Ruanda" , propin: "El 10% del total de la cuenta es muy bien recibido"},
    {paisN: "San Bartolomé" , propin: "Por lo general está incluida en la cuenta, si no, el 10% es muy bien recibido :)"},
    {paisN: "Santa Helena" , propin: "Redondear el total de la cuenta está perfecto"},
    {paisN: "San Cristóbal y Nieves" , propin: "Entre un 10% y 15% del total es muy bien recibido"},
    {paisN: "Santa Lucía" , propin: "Por lo general está incluida en la cuenta, si no, el 10% es muy bien recibido :)"},
    {paisN: "Saint Martin" , propin: "El 10% del total de la cuenta es muy bien recibido"},
    {paisN: "San Pedro y Miquelón" , propin: "Entre un 10% y 15% del total es muy bien recibido"},
    {paisN: "San Vicente y Granadinas" , propin: "Entre un 10% y 15% del total es muy bien recibido"},
    {paisN: "Samoa" , propin: "Entre un 10% y 15% del total es muy bien recibido"},
    {paisN: "San Marino" , propin: "El 10% del total de la cuenta es muy bien recibido"},
    {paisN: "Santo Tomé y Príncipe" , propin: "Entre un 10% y 15% del total es muy bien recibido"},
    {paisN: "Arabia Saudí" , propin: "Por lo general está incluida en la cuenta, si no, el 10% es muy bien recibido :)"},
    {paisN: "Senegal" , propin: "Entre un 10% y 15% del total es muy bien recibido"},
    {paisN: "Serbia" , propin: "Entre un 10% y 15% del total es muy bien recibido"},
    {paisN: "Seychelles" , propin: "Por lo general está incluida en la cuenta, si no, el 10% es muy bien recibido :)"},
    {paisN: "Sierra Leone" , propin: "Entre un 10% y 15% del total es muy bien recibido"},
    {paisN: "Singapur" , propin: "Por lo general está incluida en la cuenta, si te gustó el servicio redondea el total de la cuenta :)"},
    {paisN: "República Eslovaca" , propin: "El 10% del total de la cuenta es muy bien recibido"},
    {paisN: "Eslovenia" , propin: "Los locales no suelen dejar propina por lo que si sos turista, el 10% será muy bien recibido"},
    {paisN: "Islas Salomón" , propin: "No tenemos información sobre esta región :( ¡Animate a preguntarle a quien te sirvio!"},
    {paisN: "Somalia" , propin: "Entre un 10% y 15% del total es muy bien recibido"},
    {paisN: "República de Sudáfrica" , propin: "Entre un 10% y 15% del total es muy bien recibido"},
    {paisN: "Islas Georgias del Sur y Sandwich del Sur" , propin: "No tenemos información sobre esta región :( ¡Animate a preguntarle a quien te sirvio!"},
    {paisN: "Corea del Sur" , propin: "No es común recibir propinas :)"},
    {paisN: "Sudán del Sur" , propin: "Entre un 10% y 15% del total es muy bien recibido"},
    {paisN: "España" , propin: "Los locales no suelen dejar propina por lo que si sos turista, redondear la cuenta sería perfecto"},
    {paisN: "Sri Lanka" , propin: "Los locales no suelen dejar propina por lo que si sos turista, redondear la cuenta sería perfecto"},
    {paisN: "Sudán" , propin: "Entre un 10% y 15% del total es muy bien recibido"},
    {paisN: "Surinam" , propin: "Entre un 10% y 15% del total es muy bien recibido"},
    {paisN: "Islas Svalbard y Jan Mayen" , propin: "Entre un 10% y 15% del total es muy bien recibido"},
    {paisN: "Suazilandia" , propin: "Entre un 10% y 15% del total es muy bien recibido"},
    {paisN: "Suecia" , propin: "Por lo general está incluida en la cuenta, si no, el 10% es muy bien recibido :)"},
    {paisN: "Suiza" , propin: "Con redondear la cuenta alcanza :)"},
    {paisN: "Siria" , propin: "Entre un 10% y 15% del total es muy bien recibido"},
    {paisN: "Taiwán" , propin: "Por lo general está incluida en la cuenta, si no, el 10% es muy bien recibido :)"},
    {paisN: "Tayikistán" , propin: "Entre un 10% y 20% del total es muy bien recibido"},
    {paisN: "Tanzania" , propin: "El 5% del total está perfecto o podes simplemente redondear la cuenta"},
    {paisN: "Tailandia" , propin: "¡Es totalmente opcional! Si te gustó, un 10% está perfecto"},
    {paisN: "Timor Oriental" , propin: "Entre un 10% y 15% del total es muy bien recibido"},
    {paisN: "Togo" , propin: "Entre un 5% y 10% del total es muy bien recibido"},
    {paisN: "Islas Tokelau" , propin: "Entre un 5% y 10% del total es muy bien recibido"},
    {paisN: "Tonga" , propin: "Entre un 10% y 15% del total es muy bien recibido"},
    {paisN: "Trinidad y Tobago" , propin: "No es común recibir propina por lo que si te parece bien redondear la cuenta, sería genial :)"},
    {paisN: "Túnez" , propin: "Entre un 5% y 10% del total es muy bien recibido"},
    {paisN: "Turquía" , propin: "Entre un 5% y 10% del total es muy bien recibido"},
    {paisN: "Turkmenistán" , propin: "Entre un 10% y 15% del total es muy bien recibido"},
    {paisN: "Islas Turks y Caicos" , propin: "Entre un 10% y 20% del total es muy bien recibido"},
    {paisN: "Tuvalu" , propin: "Entre un 10% y 15% del total es muy bien recibido"},
    {paisN: "Uganda" , propin: "Los locales no suelen dejar propina por lo que si sos turista, redondear la cuenta sería perfecto"},
    {paisN: "Ucrania" , propin: "Los locales no suelen dejar propina por lo que si sos turista, el 10% está perfecto"},
    {paisN: "Emiratos Árabes Unidos" , propin: "Por lo general está incluida en la cuenta, si te gustó el servicio redondea el total de la cuenta :)"},
    {paisN: "Reino Unido" , propin: "Por lo general está incluida en la cuenta, si no el 10% de la cuenta está perfecto"},
    {paisN: "Estados Unidos" , propin: "Entre un 10% y 15% del total es muy bien recibido"},
    {paisN: "Uruguay" , propin: "El 10% del total de la cuenta es muy bien recibido"},
    {paisN: "Uzbekistán" , propin: "Por lo general está incluida en la cuenta, si te gustó el servicio redondea el total de la cuenta :)"},
    {paisN: "Vanuatu" , propin: "No es común dejar propina, si queres agradecerle a quien te sirvio preguntale como podes hacerlo :)"},
    {paisN: "Venezuela" , propin: "Entre un 10% y 15% del total es muy bien recibido"},
    {paisN: "Vietnam" , propin: "Por lo general está incluida en la cuenta, si no el 10% de la cuenta está perfecto"},
    {paisN: "Wallis y Futuna" , propin: "No tenemos información sobre esta región :( ¡Animate a preguntarle a quien te sirvio!"},
    {paisN: "Sahara Occidental" , propin: "Entre un 10% y 15% del total es muy bien recibido"},
    {paisN: "Yemen" , propin: "El 10% del total de la cuenta es muy bien recibido"},
    {paisN: "Zambia" , propin: "Entre un 5% y 10% del total es muy bien recibido"},
    {paisN: "Zimbabue" , propin: "Entre un 10% y 15% del total es muy bien recibido"},
];

//GUARDAR EL ARRAY
const guardarSession = (clave, valor) => { sessionStorage.setItem(clave, valor) };
const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };

//cada item
for (const pais of paises) {
    guardarLocal(pais.paisN, JSON.stringify(pais.propin));
}
//todo el array
guardarSession("listaPaises", JSON.stringify(paises));

//crea la lista de paises que complen con el nombre que ingresa el usuario

const mostrarPaises = (paises) => {
    const htmlString = paises
        .map((pais) => {
            return `<div class="coun">
                        <h2 class="script" id="pais-n">${pais.paisN}</h2>
                        <h3 class="script">Propina sugerida: ${pais.propin}</h3>
                    </div>`;
        })
        .join('');
        $("#nombresPaises").html(htmlString);
};

//busca según la info que ingrese el usuario en el input
$("#searchBar").keyup( (e) => {
    const busqueda = e.target.value.toLowerCase();
    const paisBuscado = paises.filter(pais =>{
        return pais.paisN.toLowerCase().includes(busqueda);
    })
    console.log(paisBuscado);
    mostrarPaises(paisBuscado);
})

let visibilidad = true;

//AJAX

const URLGET = "https://restcountries.eu/rest/v2/all"

function listar(){
    $.get(URLGET, function (respuesta, estado){
        if(estado === "success"){
            let paisesl = respuesta;
            for (const pais of paisesl){
                $("#mostrar").append(
                    `<li class="lista"> 
                        <img class="foto-p" src="${pais.flag}" widht="100px" height="90px"></img>
                        <h1 class="nombre-p"> ${pais.translations.es || pais.name}</h1> 
                    </li>`) ;
            }
            visibilidad ? $(".volver").css({ display: "inline" }) : $(".volver").css({ display: "none" });
            visibilidad = !visibilidad;
        
        }
    });
    
}

//boton de búsqueda de países
$("#boton").click( () =>{
    listar();
    $(".coun").empty();

})