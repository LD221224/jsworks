// 폼 유효성 검사
function checkMember(){
    let form = document.regForm;
    let id = form.mid.value;
    let pwd = form.passwd.value;
    let name = form.name.value;

    // 비밀번호 정규 표현식
    let pwd_pat = /[0-9A-Za-z]/;
    let pwd_pat2 = /[~!@#$%^&*]/;

    if(id.length != 5){
        alert("아이디는 5자만 가능합니다.");
        form.mid.select();  // select() - 범위 선택
        return false;
    }
    else if(!pwd_pat.test(pwd) || !pwd_pat2.test(pwd) || pwd.length != 8){
        alert("비밀번호는 영문자, 특수문자, 숫자 포함 8자만 가능합니다.");
        form.passwd.select();
        return false;
    }
    else if(name == ""){
        alert("이름은 필수 항목 입니다.");
        form.name.focus();  // focus() - 커서 위치
        return false;
    }
    else{
        form.submit();
    }
}