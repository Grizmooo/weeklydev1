function check_pass() {
    if (document.getElementById('pass_1').value ==
        document.getElementById('passrep_1').value) {
        document.getElementById('firstformbtn').disabled = false;
        document.getElementById('notsamepass').style.display="none";
        document.getElementById('firstformbtn').style.cursor="pointer"

    } else {
        document.getElementById('firstformbtn').disabled = true;
        document.getElementById('notsamepass').style.display="block";
        document.getElementById('firstformbtn').style.cursor="not-allowed"
    }
}
