var firstname = document.getElementById("firstname").value;
            var lastname = document.getElementById("lastname").value;
            var email = document.getElementById("email").value;
            var mobno = document.getElementById("mobile").value;
            var address = document.getElementById("address").value;
            var user = document.getElementById("user").value;
            var password = document.getElementById("passwrd").value;
            var repassward = document.getElementById("").value;

            
            database.ref("students").push().set({
                firstname: firstname,
                lastname: lastname,
                email: email,
                mobile: mobile,
                address: address,
                user: user,
                password: password,
                repassward: repassward,
            });