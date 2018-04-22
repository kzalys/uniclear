var loanHidden = false;

$('#loanHide').click(function() {
    console.log("heelo");
    loanHidden = !loanHidden;
    if (!loanHidden) {
        $('#loanDisplayContainer').css('display', 'flex');
    } else {
        $('#loanDisplayContainer').css('display', 'none');
    }
});