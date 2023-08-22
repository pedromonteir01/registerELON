class User {
    constructor(name, email, age, city, cell, cpf) {
        this.name = name;
        this.email = email;
        this.age = this.getAge(age);
        this.sign = this.getSign()
        this.city = city;
        this.cell = cell;
        this.cpf = cpf;
        this.possible_Client = this.possible_Client()
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
        let birthdate = new Date(this.age);
        console.log(birthdate);
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

    possible_Client() {
         possibleClient(this.age);
     }
}

class AllUsers {
    constructor() {
        this.listUsers = [];
    }

    addUser(user) {
        this.listUsers.push(user);
    }
}

const arrayUsers = new AllUsers();

function createUser() {
    if (isAnyInputEmpty() == true) {
        sendErrorMsg("Preencha todos os campos");
    } else {
        let name = document.getElementById("name").value;
        let age = document.getElementById("birthdate").value;
        let city = document.getElementById("address").value;
        let cell = document.getElementById("phone").value;
        let email = document.getElementById("email").value;
        let cpf = document.getElementById("cpf").value;

        if (valida_cpf(cpf) == false) {
            sendErrorMsg("Coloque um cpf válido");
        } else {
            const user = new User(name, email, age, city, cell, cpf);
            arrayUsers.addUser(user);
            if (isUserAlreadyRegistered(cpf) == true) {
                sendErrorMsg("Alguém já cadastrou este CPF")
            } else {
                countUsers();
                clearInputs();
            }
        }
    }
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
        if (document.getElementById("name").value == "" || document.getElementById("birthdate").value == "" || document.getElementById("address").value == "" || document.getElementById("phone") == "" || document.getElementById("email").value == "" || document.getElementById("cpf").value == "") {
            return true
        } else {
            return false
        }
    }

    function isUserAlreadyRegistered(cpf) {
        arrayUsers.listUsers.forEach((user) => {
            console.log(user.cpf);
        });
    }

    function clearInputs() {
        document.getElementById("name").value == ""
        document.getElementById("birthdate").value == ""
        document.getElementById("address").value == ""
        document.getElementById("phone") == ""
        document.getElementById("email").value == ""
        document.getElementById("cpf").value == "";
    }

    function showUsers() {
        document.getElementById("sub-div").classList.remove("hidden");
        document.getElementById("main-div").classList.add("hidden");
    }

    function showRegister() {
        document.getElementById("sub-div").classList.add("hidden");
        document.getElementById("main-div").classList.remove("hidden");
    }


    function possibleClient(age) {
        if (age == 18 && age <= 31) {
            return true
        } else {
            return false
        }
    }

    function countUsers() {
        document.getElementById("contador").innerHTML = `Contador: ${arrayUsers.listUsers.length}`
    }

    function showList() {
        arrayUsers.listUsers.forEach(user => {
        document.getElementById("sub-div").innerHTML = `
            Nome: ${user.name}
            Idade: ${user.age}
            Signo: ${user.sign}
            Endereço: ${user.city}
            Celular: ${formatedCellphone(user.cell)}
            CPF: ${formatedCPF(user.cpf)}
        `
        });
    }
    

    function formatedCPF(cpf) {
        console.log("Passou pela funcao formatedCPF()");
    
        let cpfArray = cpf.split("");
        let cpfFormated = cpfArray[0] + cpfArray[1] + cpfArray[2]
            + "." + cpfArray[3] + cpfArray[4] + cpfArray[5] + "."
            + cpfArray[6] + cpfArray[7] + cpfArray[8] + "-" + cpfArray[9] + cpfArray[10];
        return cpfFormated;
    }

    function formatedCellphone(cellphone) {
        console.log("Passou pela funcao formatedCellphone()");
    
        let cellphoneArray = cellphone.split("");
        let cellphoneFormated = "(" + cellphoneArray[0] + cellphoneArray[1] + ")"
            + " " + cellphoneArray[2] + cellphoneArray[3] + cellphoneArray[4]
            + cellphoneArray[5] + cellphoneArray[6] + "-"
            + cellphoneArray[7] + cellphoneArray[8]
            + cellphoneArray[9] + cellphoneArray[10];
        return cellphoneFormated;
    }