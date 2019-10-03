function age(birthDate) {
    birthDay = Number(birthDate.substring(2, 4));
    birthMonth = Number(birthDate.substring(0, 2))
    birthYear = Number(birthDate.substring(4));

    today = new Date();

    if (today.getMonth() +1 < birthMonth || (today.getMonth() + 1 === birthMonth && today.getDate() < birthDay)) {
      age = today.getFullYear() - birthYear - 1;
    } else{
        age = (today.getFullYear() - birthYear);
    }
    return age;
}
  

console.log(age('02011977'))

