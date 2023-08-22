class User {
    constructor(name, email, age, sign, city, cell, cpf) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.sign = sign;
        this.city = city;
        this.cell = cell;
        this.cpf = cpf;
    }

    getAge(aniversaryY, aniversaryM, aniversaryD) {
        let today = new Date,
            todayYear = today.getFullYear(),
            todayMonth = today.getMonth() + 1,
            todayDay = today.getDay(),

            age = todayYear - aniversaryY;


        if (todayMonth < aniversaryM || todayMonth == todayMonth && todayDay > aniversaryD) {
            age--;
        }

        return age < 0 ? 0 : age;
    }

    getSign() {
        let birthdate = new Date();
        let day = birthdate.getDate();
        let month = birthdate.getMonth() + 1;
        console.log("Passou pelo getSigno() da class User");

        if ((month == 1 && day <= 20) || (month == 12 && day >= 22)) {
            return "Capricórnio ♑";
        } else if ((month == 1 && day >= 21) || (month == 2 && day <= 18)) {
            return "Aquário ♒";
        } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
            return "Peixes ♓";
        } else if ((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
            return "Áries ♈";
        } else if ((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
            return "Touro ♉";
        } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
            return "Gêmeos ♊";
        } else if ((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
            return "Câncer ♋";
        } else if ((month == 7 && day >= 23) || (month == 8 && day <= 23)) {
            return "Leão ♌";
        } else if ((month == 8 && day >= 24) || (month == 9 && day <= 23)) {
            return "Virgem ♍";
        } else if ((month == 9 && day >= 24) || (month == 10 && day <= 23)) {
            return "Libra ♎";
        } else if ((month == 10 && day >= 24) || (month == 11 && day <= 22)) {
            return "Escorpião ♏";
        } else if ((month == 11 && day >= 23) || (month == 12 && day <= 21)) {
            return "Sagitário ♐";
        }
    }

    getCPF() {
        valida_cpf(cpf);
        if (valida_cpf(cpf) == true) {
            return cpf
        } else {
            return sendErrorMsg("Digite um cpf válido");
        }
    }
}

class AllUser {
    constructor() {
        this.listUsers = [];
    }

    addUser(user) {
        this.listUsers.push(user);
    }
}

const arrayUsers = new AllUser();

function createUser() {
    let name = document.getElementById("name").value;
    let age = document.getElementById("birthdate").value;
    let city = document.getElementById("address").value;
    let cell = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let cpf = document.getElementById("cpf").value;

    const user = new User(name, email, null, null, city, cell, null);
    arrayUsers.addUser(user);

    clearInputs();
}

function valida_cpf(cpf) {
    console.log("Passou pela funcao valida_cpf()");

    var numeros, digitos, soma, i, resultado, digitos_iguais;
    digitos_iguais = 1;
    if (cpf.length < 11)
        return false;
    for (i = 0; i < cpf.length - 1; i++)
        if (cpf.charAt(i) != cpf.charAt(i + 1)) {
            digitos_iguais = 0;
            break;
        }
    if (!digitos_iguais) {
        numeros = cpf.substring(0, 9);
        digitos = cpf.substring(9);
        soma = 0;
        for (i = 10; i > 1; i--)
            soma += numeros.charAt(10 - i) * i;
        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(0))
            return false;
        numeros = cpf.substring(0, 10);
        soma = 0;
        for (i = 11; i > 1; i--)
            soma += numeros.charAt(11 - i) * i;
        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(1))
            return false;
        return true;
    }
    else
        return false;
}

function sendErrorMsg(msg) {
    console.log("Passou pela funcao sendErrorMsg()");

    document.getElementById("error-msg").innerHTML = msg;
    document.getElementById("error-msg").classList.remove("hidden");
    setTimeout(function () {
        document.getElementById("error-msg").classList.add("hidden");
    }, 4000);
}

function sendSuccessMsg(msg) {
    console.log("Passou pela funcao sendErrorMsg()");

    document.getElementById("success-msg").innerHTML = msg;
    document.getElementById("success-msg").classList.remove("hidden");
    setTimeout(function () {
        document.getElementById("success-msg").classList.add("hidden");
    }, 4000);
}

function isAnyInputEmpty() {
    if(document.getElementById("name").value == "" || document.getElementById("birthdate").value == "" || document.getElementById("address").value == "" || document.getElementById("phone") == "" || document.getElementById("email").value == "" || document.getElementById("cpf").value == "") {
        return true
    } else {
        return false
    }
}

function isUserAlreadyRegistered(cpf) {
    arrayUsers.forEach(cpf => {
        
    });
}

function clearInputs() {
    document.getElementById("name").value == ""
    document.getElementById("birthdate").value == ""
    document.getElementById("address").value == ""
    document.getElementById("phone") == ""
    document.getElementById("email").value == ""
    document.getElementById("cpf").value == ""   
}

function showUsers() {
    document.getElementById("sub-div").classList.remove("hidden");
    document.getElementById("main-div").classList.add("hidden");
}

function showRegister() {
    document.getElementById("sub-div").classList.add("hidden");
    document.getElementById("main-div").classList.remove("hidden");
}




// how many functions are there? 12
// how many classes are there? 2

// Boa sorte!