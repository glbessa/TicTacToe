// Load nickname from cookie
function loadNickname() {
    var nickname = document.cookie
    .split("; ")
    .find(row => row.startsWith("nickname="))
    .split("=")[1];

    document.getElementById("nicknameTxt").value = nickname;
}

function setNickname() {
    var nickname = document.getElementById("nicknameTxt").value;
    document.cookie = `nickname=${nickname}`;
}