/*--Bán hàng---*/

function hang(obj) {
    var x = document.getElementsByClassName('hang1');
    var y = document.getElementsByClassName('hang2');
    var z = document.getElementsByClassName('hang3');
    var value = obj.value;
    if (value == '') {
        alert("Bạn chưa chọn mức giá")
    } else if (value == '0') {
        for (var i = 0; i < x.length; i++) {
            x[i].removeAttribute("hidden");
        }
        for (var i = 0; i < y.length; i++) {
            y[i].setAttribute("hidden", "");
        }
        for (var i = 0; i < z.length; i++) {
            z[i].setAttribute("hidden", "");
        }
    } else if (value == '250') {
        for (var i = 0; i < y.length; i++) {
            y[i].removeAttribute("hidden");
        }
        for (var i = 0; i < x.length; i++) {
            x[i].setAttribute("hidden", "");
        }
        for (var i = 0; i < z.length; i++) {
            z[i].setAttribute("hidden", "");
        }
    } else if (value == '500') {
        for (var i = 0; i < z.length; i++) {
            z[i].removeAttribute("hidden");
        }
        for (var i = 0; i < x.length; i++) {
            x[i].setAttribute("hidden", "");
        }
        for (var i = 0; i < y.length; i++) {
            y[i].setAttribute("hidden", "");
        }
    } else {
        for (var i = 0; i < z.length; i++) {
            z[i].removeAttribute("hidden");
        }
        for (var i = 0; i < y.length; i++) {
            y[i].removeAttribute("hidden");
        }
        for (var i = 0; i < x.length; i++) {
            x[i].removeAttribute("hidden");
        }
    }
}
function tong() {
    setInterval(function tong() {
        var x = 0, x1, x2, x3, x4, x5, x6, x7;
        if (document.getElementById("soluong1").disabled == false) {
            x1 = Number(document.getElementById("soluong1").value) * 700;
            if (x1 == 0) {
                document.getElementById("tien1").innerText = '';
            } else {
                document.getElementById("tien1").innerText = x1 + "$";
            }
            x += x1;
        }
        if (document.getElementById("soluong2").disabled == false) {
            x2 = Number(document.getElementById("soluong2").value) * 400;
            if (x2 == 0) {
                document.getElementById("tien2").innerText = '';
            } else {
                document.getElementById("tien2").innerText = x2 + "$";
            }
            x += x2;
        }
        if (document.getElementById("soluong3").disabled == false) {
            x3 = Number(document.getElementById("soluong3").value) * 100;
            if (x3 == 0) {
                document.getElementById("tien3").innerText = '';
            } else {
                document.getElementById("tien3").innerText = x3 + "$";
            }
            x += x3;
        }
        if (document.getElementById("soluong4").disabled == false) {
            x4 = Number(document.getElementById("soluong4").value) * 180;
            if (x4 == 0) {
                document.getElementById("tien4").innerText = '';
            } else {
                document.getElementById("tien4").innerText = x4 + "$";
            }
            x += x4;
        }
        if (document.getElementById("soluong5").disabled == false) {
            x5 = Number(document.getElementById("soluong5").value) * 180;
            if (x5 == 0) {
                document.getElementById("tien5").innerText = '';
            } else {
                document.getElementById("tien5").innerText = x5 + "$";
            }
            x += x5;
        }
        if (document.getElementById("soluong6").disabled == false) {
            x6 = Number(document.getElementById("soluong6").value) * 600;
            if (x6 == 0) {
                document.getElementById("tien6").innerText = '';
            } else {
                document.getElementById("tien6").innerText = x6 + "$";
            }
            x += x6;
        }
        if (document.getElementById("soluong7").disabled == false) {
            x7 = Number(document.getElementById("soluong7").value) * 90;
            if (x7 == 0) {
                document.getElementById("tien7").innerText = '';
            } else {
                document.getElementById("tien7").innerText = x7 + "$";
            }
            x += x7;
        }
        document.getElementById("tongne").innerText = x + "$";
        if (document.getElementById("tongne").innerText == 0 + "$") {
            document.getElementById("tongne").innerText = "";
        }
    }, 0);
}
function mo1() {
    document.getElementById("nut1").onclick = function () {
        if (this.checked) {
            document.getElementById("soluong1").disabled = false;
        }
        else {
            document.getElementById("soluong1").disabled = true;
            document.getElementById("tien1").innerText = "";
            document.getElementById("soluong1").value = "";
        }
    };
}
function mo2() {
    document.getElementById("nut2").onclick = function () {
        if (this.checked) {
            document.getElementById("soluong2").disabled = false;
        }
        else {
            document.getElementById("soluong2").disabled = true;
            document.getElementById("tien2").innerText = "";
            document.getElementById("soluong2").value = "";
        }
    };
}
function mo3() {
    document.getElementById("nut3").onclick = function () {
        if (this.checked) {
            document.getElementById("soluong3").disabled = false;

        }
        else {
            document.getElementById("soluong3").disabled = true;
            document.getElementById("tien3").innerText = "";
            document.getElementById("soluong3").value = "";
        }
    };
}
function mo4() {
    document.getElementById("nut4").onclick = function () {
        if (this.checked) {
            document.getElementById("soluong4").disabled = false;

        }
        else {
            document.getElementById("soluong4").disabled = true;
            document.getElementById("tien4").innerText = "";
            document.getElementById("soluong4").value = "";
        }
    };
}
function mo5() {
    document.getElementById("nut5").onclick = function () {
        if (this.checked) {
            document.getElementById("soluong5").disabled = false;

        }
        else {
            document.getElementById("soluong5").disabled = true;
            document.getElementById("tien5").innerText = "";
            document.getElementById("soluong5").value = "";
        }
    };
}
function mo6() {
    document.getElementById("nut6").onclick = function () {
        if (this.checked) {
            document.getElementById("soluong6").disabled = false;

        }
        else {
            document.getElementById("soluong6").disabled = true;
            document.getElementById("tien6").innerText = "";
            document.getElementById("soluong6").value = "";
        }
    };
}
function mo7() {
    document.getElementById("nut7").onclick = function () {
        if (this.checked) {
            document.getElementById("soluong7").disabled = false;

        }
        else {
            document.getElementById("soluong7").disabled = true;
            document.getElementById("tien7").innerText = "";
            document.getElementById("soluong7").value = "";
        }
    };

}
/*---Thư viện ảnh---*/
var index = 0;
var anh = ["img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg", "img/5.jpg", "img/6.jpg", "img/7.jpg", "img/8.jpg", "img/9.jpg", "img/10.jpg"]
function prev() {
    index--;
    if (index == -1) {
        index = anh.length - 1;
    }
    document.getElementById("img").src = anh[index];
    if (index == 0) {
        document.getElementById("doi").innerText = "Ảnh 1/10";
    }
    if (index == 1) {
        document.getElementById("doi").innerText = "Ảnh 2/10";
    }
    if (index == 2) {
        document.getElementById("doi").innerText = "Ảnh 3/10";
    }
    if (index == 3) {
        document.getElementById("doi").innerText = "Ảnh 4/10";
    }
    if (index == 4) {
        document.getElementById("doi").innerText = "Ảnh 5/10";
    }
    if (index == 5) {
        document.getElementById("doi").innerText = "Ảnh 6/10";
    }
    if (index == 6) {
        document.getElementById("doi").innerText = "Ảnh 7/10";
    }
    if (index == 7) {
        document.getElementById("doi").innerText = "Ảnh 8/10";
    }
    if (index == 8) {
        document.getElementById("doi").innerText = "Ảnh 9/10";
    }
    if (index == 9) {
        document.getElementById("doi").innerText = "Ảnh 10/10";
    }
}
function next() {
    index++;
    if (index == 10) {
        index = 0;
    }
    document.getElementById("img").src = anh[index];
    if (index == 0) {
        document.getElementById("doi").innerText = "Ảnh 1/10";
    }
    if (index == 1) {
        document.getElementById("doi").innerText = "Ảnh 2/10";
    }
    if (index == 2) {
        document.getElementById("doi").innerText = "Ảnh 3/10";
    }
    if (index == 3) {
        document.getElementById("doi").innerText = "Ảnh 4/10";
    }
    if (index == 4) {
        document.getElementById("doi").innerText = "Ảnh 5/10";
    }
    if (index == 5) {
        document.getElementById("doi").innerText = "Ảnh 6/10";
    }
    if (index == 6) {
        document.getElementById("doi").innerText = "Ảnh 7/10";
    }
    if (index == 7) {
        document.getElementById("doi").innerText = "Ảnh 8/10";
    }
    if (index == 8) {
        document.getElementById("doi").innerText = "Ảnh 9/10";
    }
    if (index == 9) {
        document.getElementById("doi").innerText = "Ảnh 10/10";
    }
}
/*--Đăng ký--*/
function bochon(x) {
    var value = x.value;
    var loi = document.querySelector('#quoctich')
    var p = document.getElementsByClassName('form-message1')[0];
    if (value == '') {
        p.innerText = "Vui lòng nhập quốc tịch!"
        loi.classList.add('invalid')
    } else {
        loi.classList.remove('invalid');
        p.innerText = '';
    }
}
function select(options) {
    var b = document.getElementById('ipquoctich');
    var a = document.getElementById('qt');
    var value = options.value;
    var add = options.parentElement.querySelector('#quoctich');
    var x = document.querySelector('.form-message1');
    if (value == '') {
        a.innerText = '';
        b.setAttribute("hidden", '');
        add.classList.add('invalid');
        x.innerText = "Vui lòng nhập quốc tịch!";
    } else if (value == 'khac') {
        add.classList.remove('invalid');
        a.innerText = "Nhập vào quốc tịch của bạn ở ô trên!";
        b.removeAttribute('hidden')
    } else {
        b.setAttribute("hidden", '');
        a.innerText = '';
        add.classList.remove('invalid')
    }
}
function Validator(options) {
    var formElement = document.querySelector(options.form);
    if (formElement) {
        options.rules.forEach(function (rule) {
            var inputElement = formElement.querySelector(rule.selector);
            var loiElement = inputElement.parentElement.querySelector('.form-message');
            if (inputElement) {
                inputElement.onblur = function () {
                    var loi = document.getElementById('qt');
                    var loiMassage = rule.test(inputElement.value);
                    if (loiMassage) {
                        loiElement.innerText = loiMassage;
                        inputElement.classList.add('invalid');
                    } else {
                        loi.innerText = '';
                        loiElement.innerText = '';
                        inputElement.classList.remove('invalid');
                    }
                }
            }

        });
    }
}
function check() {
    var dem = 0;
    var flag = true;
    /*--Mã Sinh viên--*/
    var msv = document.getElementById('msv').value
    var loimsv = document.getElementById('loimsv');
    if (msv.trim().length > 0) {
        loimsv.innerText = "";
        document.getElementById('msv').classList.remove('invalid')
    } else {
        loimsv.innerText = "Vui lòng nhập mã sinh viên!";
        document.getElementById('msv').classList.add('invalid')
        flag = false;
    }
    /*---Họ tên---*/
    var hoten = document.getElementById('hoten').value;
    var loihoten = document.getElementById('loihoten');

    if (hoten.trim().length > 0) {
        loihoten.innerText = "";
        document.getElementById('hoten').classList.remove('invalid');
    } else {
        dem++;
        loihoten.innerText = "Vui lòng nhập họ tên!";
        document.getElementById('hoten').classList.add('invalid');
        flag = false;
    }
    /*--Email---*/
    var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var email = document.getElementById('email').value;
    var loiemail = document.getElementById('loiemail');
    if (regex.test(email)) {
        loiemail.innerText = "";
        document.getElementById('email').classList.remove('invalid');
    } else {
        loiemail.innerText = "Vui lòng nhập email đúng định dạng!";
        document.getElementById('email').classList.add('invalid');
        flag = false;

    }
    /*--giới tính---*/
    var gender = '';
    var Elm = document.getElementById('gender');
    var loigt = document.getElementById('gioitinh');
    if (document.getElementById('nam').checked) {
        gender = document.getElementById('nam').value;
        Elm.classList.remove('invalid');
        loigt.innerText = '';
    } else if (document.getElementById('nu').checked) {
        gender = document.getElementById('nu').value;
        Elm.classList.remove('invalid');
        loigt.innerText = '';

    } else {
        Elm.classList.add('invalid');
        loigt.innerText = "Vui lòng chọn giới tính";
        flag = false;
    }
    /*--Sở thích---*/
    var st = document.getElementsByName('st');
    var x1 = null, x2 = null, x3 = null, x4 = null, x5 = null;
    var sothich = document.getElementById('sothich');
    var loist = document.getElementById('loist');
    if (st[0].checked) {
        x1 = 1;
    } else {
        x1 = null;
    }
    if (st[1].checked) {
        x2 = 2;
    } else {
        x2 = null;
    }
    if (st[2].checked) {
        x3 = 3;
    } else {
        x3 = null;
    }
    if (st[3].checked) {
        x4 = 4;
    } else {
        x4 = null;
    }
    if (st[4].checked) {
        x5 = 5;
    } else {
        x5 = null;
    }
    if (x1 == null && x2 == null && x3 == null && x4 == null && x5 == null) {
        loist.innerText = "Vui lòng chọn sở thích!";
        sothich.classList.add('invalid');
        flag = false;
    } else {
        loist.innerText = "";
        sothich.classList.remove('invalid');
    }

    /*--Quốc tịch--*/
    var quoctich = document.getElementById('quoctich').value;
    var loiqt = document.getElementById('qt');
    if (quoctich == '') {
        loiqt.innerText = "Vui lòng chọn quốc tịch!";
        document.getElementById('quoctich').classList.add('invalid');
        flag = false;
    } else {
        loiqt.innerText = "";
        document.getElementById('quoctich').classList.remove('invalid');
    }
    /*---Ghi chú---*/
    var text = document.getElementById('ghichu').value;
    var loighichu = document.getElementById('gcloi');
    if (text.trim().length <= 0) {
        document.getElementById("ghichu").classList.add("invalid");
        loighichu.innerText = "Vui lòng nhập trường này!";
        flag = false;
    } else if (text.trim().length > 200) {
        document.getElementById("ghichu").classList.add("invalid");
        loighichu.innerText = "Vui lòng nhập số kí tự nhỏ hơn 200!"
        flag = false;
    } else {
        document.getElementById("ghichu").classList.remove("invalid");
    }
    if (flag) {
        alert("Bạn đã đăng kí thành công!")
    } else {
        return flag;
    }
}

Validator.isRequired = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            return value.trim() ? undefined : "Vui lòng nhập trường này!"
        }
    };
}

Validator.isEmail = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : "Vui lòng nhập đúng email !";
        }
    };
}
function text() {
    var text = document.getElementById('ghichu').value;
    var ghichu = document.getElementById('gcloi');
    if (text.trim().length <= 0) {
        document.getElementById("ghichu").classList.add("invalid");
        ghichu.innerText = "Vui lòng nhập trường này!";
    } else if (text.trim().length > 200) {
        document.getElementById("ghichu").classList.add("invalid");
        ghichu.innerText = "Vui lòng nhập số kí tự nhỏ hơn 200!"
    } else {
        document.getElementById("ghichu").classList.remove("invalid");
        ghichu.innerText = "";
    }
}
