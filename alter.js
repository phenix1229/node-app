function separateDate(birthDate) {
    birthDay = Number(birthDate.substring(2, 4));
    birthMonth = Number(birthDate.substring(0, 2))
    birthYear = Number(birthDate.substring(4));

    return birthDay, birthMonth, birthYear;
}

function age(birthDate){
  separateDate(birthDate);
  today = new Date();

  if (today.getMonth() +1 < birthMonth || (today.getMonth() + 1 === birthMonth && today.getDate() < birthDay)) { age =    today.getFullYear() - birthYear - 1;
  } else{
    age = (today.getFullYear() - birthYear);
  }
  return age;
}

function zodiacSign(birthDate) {
  separateDate(birthDate);
  if (birthMonth === 3 && birthDay >= 21 || birthMonth === 4 && birthDay <= 20) {
    return 'Aries';
  } else if (birthMonth === 4 && birthDay >= 21 || birthMonth === 5 && birthDay <= 20) {
    return 'Taurus';
  } else if (birthMonth === 5 && birthDay >= 21 || birthMonth === 6 && birthDay <= 20) {
    return 'Gemini';
  } else if (birthMonth === 6 && birthDay >= 21 || birthMonth === 7 && birthDay <= 22) {
    return 'Cancer';
  } else if (birthMonth === 7 && birthDay >= 23 || birthMonth === 8 && birthDay <= 22) {
    return 'Leo';
  } else if (birthMonth === 8 && birthDay >= 23 || birthMonth === 9 && birthDay <= 22) {
    return 'Virgo';
  } else if (birthMonth === 9 && birthDay >= 23 || birthMonth === 10 && birthDay <= 22) {
    return 'Libra';
  } else if (birthMonth === 10 && birthDay >= 23 || birthMonth === 11 && birthDay <= 22) {
    return 'Scorpio';
  } else if (birthMonth === 11 && birthDay >= 23 || birthMonth === 12 && birthDay <= 21) {
    return 'Sagittarius';
  } else if (birthMonth === 12 && birthDay >= 22 || birthMonth === 1 && birthDay <= 19) {
    return 'Capricorn';
  } else if (birthMonth === 1 && birthDay >= 20 || birthMonth === 2 && birthDay <= 19) {
    return 'Aquarius';
  } else {
    return 'Pisces';
  }
}

function birthStone(birthDate) {
  separateDate(birthDate);
  if (birthMonth === 1) {
    return 'Garnet';
  } else if (birthMonth === 2) {
    return 'Amethyst';
  } else if (birthMonth === 3) {
    return 'Aquamarine';
  } else if (birthMonth === 4) {
    return 'Diamond';
  } else if (birthMonth === 5) {
    return 'Emerald';
  } else if (birthMonth === 6) {
    return 'Alexandrite';
  } else if (birthMonth === 7) {
    return 'Ruby';
  } else if (birthMonth === 8) {
    return 'Peridot';
  } else if (birthMonth === 9) {
    return 'Sapphire';
  } else if (birthMonth === 10) {
    return 'Pink Tourmaline';
  } else if (birthMonth === 11) {
    return 'Citrine';
  } else {
    return 'Blue Topaz';
  }
}



console.log(separateDate('12291978'))

console.log(age('02011977'))

console.log(zodiacSign('08081977'))

console.log(birthStone('11011999'))