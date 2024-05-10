/*
1. Sukurkite funkciją, kuri paverstų eurus į dolerius.
Sugeneruokite atsitiktinį skaičių (eurų sumą) nuo 1 iki 1000.
Pritaikykite savo sukurtą funkciją ir išspausdinkite atitikmenį
doleriais.
*/
function convertEurosToDollars(euros, exchangeRate = 1.10) {
    return euros * exchangeRate;
  }
  const randomEuros = Math.floor(Math.random() * 1000) + 1;
  const equivalentDollars = convertEurosToDollars(randomEuros);
  console.log(`Random amount in euros: ${randomEuros}`);
  console.log(`Equivalent in dollars: ${equivalentDollars.toFixed(2)}`);

/*
2. Sukurkite funkciją, kuri paverstų dolerius į eurus.
Sugeneruokite atsitiktinį skaičių (dolerių sumą) nuo 1 iki 1000.
Pritaikykite savo sukurtą funkciją ir išspausdinkite atitikmenį
eurais.
*/

function convertDollarsToEuros(dollars, exchangeRate = 0.91) {
    return dollars * exchangeRate;
  }
  const randomDollars = Math.floor(Math.random() * 1000) + 1;
  const equivalentEuros = convertDollarsToEuros(randomDollars);
  console.log(`Random dollar amount: ${randomDollars}`);
  console.log(`Equivalent in euros: ${equivalentEuros.toFixed(2)}`);

/*
3. Parašykite programą, kuri suskaičiuotų žmogaus BMI (body
mass index), kai yra žinomas žmogaus ūgis ir svoris. 
BMI formulė: žmogaus svoris (kg) padalintas iš ūgio metrais kvadratu. 
Pvz. svoris = 80kg, ūgis = 1.8 m. 
BMI = 80 / 1.8**2 = 24.69
Viršsvoris = BMI > 25
Normalu = 18.5 <= BMI < 25
Per mažas svoris = BMI < 18.5
*/
function calculateBMI(weight, height) {
    const bmi = weight / (height * height);
    let category;
    if (bmi < 18.5) {
      category = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 25) {
      category = 'Normal weight';
    } else {
      category = 'Overweight';
    }
    return { bmi: bmi.toFixed(2), category: category };
  }
  const weight = 80; /*kilogramai*/
  const height = 1.8;/*metrai*/
  const result = calculateBMI(weight, height);
  console.log(`BMI: ${result.bmi}`);
  console.log(`Category: ${result.category}`);
/*
4. Parašykite programą, kuri iš duoto žmogaus amžiaus metais
pasakytų kiek tai yra sekundėmis, minutėmis, valandomis,
dienomis.
*/
function ageConversion(ageInYears) {
    const daysPerYear = 365;
    const hoursPerDay = 24;
    const minutesPerHour = 60;
    const secondsPerMinute = 60;
    const ageInDays = ageInYears * daysPerYear;
    const ageInHours = ageInDays * hoursPerDay;
    const ageInMinutes = ageInHours * minutesPerHour;
    const ageInSeconds = ageInMinutes * secondsPerMinute;
  
    return {
      days: ageInDays,
      hours: ageInHours,
      minutes: ageInMinutes,
      seconds: ageInSeconds,
    };
  }
  const ageInYears = 30;
  const ageDetails = ageConversion(ageInYears);
  console.log(`Age in days: ${ageDetails.days}`);
  console.log(`Age in hours: ${ageDetails.hours}`);
  console.log(`Age in minutes: ${ageDetails.minutes}`);
  console.log(`Age in seconds: ${ageDetails.seconds}`);
  
/*
5. Parašykite programą, kuri konvertuos termometro
duomenis iš Farenheito į Celsijų, ir atvirkščiai.
*/

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) / 1.8;
  }
  function celsiusToFahrenheit(celsius) {
    return (celsius * 1.8) + 32;
  }
  const fahrenheitTemperature = 100;
  const celsiusTemperature = 37.8;
  const convertedToCelsius = fahrenheitToCelsius(fahrenheitTemperature);
  console.log(`${fahrenheitTemperature} °F is ${convertedToCelsius.toFixed(2)} °C`); 
  const convertedToFahrenheit = celsiusToFahrenheit(celsiusTemperature);
  console.log(`${celsiusTemperature} °C is ${convertedToFahrenheit.toFixed(2)} °F`); 
/*
6. Sukurkite kodą, kuris išspausdins į konsolę
1-2-3-4-5-6-7-8-9-10 vienoje eilutėje. Prieš vienetą ir po
dešimties neturėtų būti brūkšniuko.
*/
const numbers = Array.from({ length: 10 }, (_, i) => i + 1);
const output = numbers.join('-');
console.log(output); // Rezultatas: 1-2-3-4-5-6-7-8-9-10
/*
7. Panaudokite for ciklus, kad sukurtumėte tokį vaizdą konsolėje.
*
**
***
****
*****
*/
const numberOfLines = 5;
for (let i = 1; i <= numberOfLines; i++) {
  let stars = '';
  for (let j = 0; j < i; j++) {
    stars += '*';
  }
  console.log(stars);
}

/*
8. Parašykite kodą, kuris apskaičiuos kiek liko dienų iki Kalėdų.
*/
const today = new Date();
const currentYear = today.getFullYear();
let christmas = new Date(currentYear, 11, 25);
if (today > christmas) {
  christmas = new Date(currentYear + 1, 11, 25);
}

const millisecondsPerDay = 24 * 60 * 60 * 1000;
const daysUntilChristmas = Math.round((christmas - today) / millisecondsPerDay);
console.log(`Dienų iki Kalėdų liko: ${daysUntilChristmas}`); 
/*
9. Parašykite kodą, kuris apjungia masyvo duomenis į vieną
tekstinę eilutę. Turėtumėte gauti tokį rezultatą:
Tomas,Dainius,Paulius,Jonas
Tomas+Dainius+Paulius+Jonas
*/
const names = ["Tomas", "Dainius", "Paulius", "Jonas"];
const commaSeparated = names.join(",");
console.log(commaSeparated); // Rezultatas: Tomas,Dainius,Paulius,Jonas
const plusSeparated = names.join("+");
console.log(plusSeparated); // Rezultatas: Tomas+Dainius+Paulius+Jonas

/*
10. Parašykite kodą, kuris sugeneruos dvylikos simbolių
slaptažodį. Slaptažodyje privalo būti bent po vieną: didžioji raidė,
mažoji raidė, skaičius, specialusis simbolis. Visi slaptažodžio
simboliai privalo būti atsitiktiniai ir atsitiktine tvarka.
*/
const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercase = 'abcdefghijklmnopqrstuvwxyz';
const specialCharacters = '!@#$%^&*()-_=+[]{}|;:,.<>?';
function getRandomCharacter(charset) {
  const randomIndex = Math.floor(Math.random() * charset.length);
  return charset[randomIndex];
}
function generatePassword(length = 12) {
  let password = '';
  password += getRandomCharacter(uppercase);
  password += getRandomCharacter(lowercase);
  password += getRandomCharacter(numbers);
  password += getRandomCharacter(specialCharacters);
  const allCharacters = uppercase + lowercase + numbers + specialCharacters;
  while (password.length < length) {
    password += getRandomCharacter(allCharacters);
  }
  const shuffledPassword = password.split('').sort(() => Math.random() - 0.5).join('');
  return shuffledPassword;
}
const password = generatePassword();
console.log(`Sugeneruotas slaptažodis: ${password}`);
