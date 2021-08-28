var toggle = document.querySelector('#toggle')
        var header_top = document.querySelector('.header-top')

        toggle.onclick = function () {
            toggle.classList.toggle('active');
            header_top.classList.toggle('active')
        };
        // end nav bar
        var login = document.querySelector('#login-now');
        var btn_login = document.querySelector('#btn-login');
        var register = document.querySelector('#register-now');
        var LoginModal = document.querySelector('#LoginModal');
        var RegisterModal = document.querySelector('#RegisterModal');
        register.onclick = function () {
            LoginModal.style.display = "none";
        }
        login.onclick = function () {
            RegisterModal.style.display = "none";
            LoginModal.style.display = "block";
        }
        btn_login.onclick = function () {
            LoginModal.style.display = "block";
        }