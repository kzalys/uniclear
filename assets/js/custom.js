var loanHidden = false;

$('#loanHide').click(function () {
    console.log("heelo");
    loanHidden = !loanHidden;
    if (!loanHidden) {
        $('#loanDisplayContainer').fadeIn('fast');
    } else {
        $('#loanDisplayContainer').fadeOut('fast');
    }
});

var step = 1;

$('#withdrawBtn').click(function () {
    if (step == 1) {
        step++;
        $('#loanAmount').html('24963.58')
        $('#loanAmount').prop('Counter', 0).animate({
            Counter: $('#loanAmount').text()
        }, {
                duration: 1500,
                easing: 'swing',
                step: function (now) {
                    var number = Math.ceil(now);
                    if (number == 0) {
                        $('#loanAmount').text(number);
                    } else {
                        var start = Math.floor(number / 1000);
                        if (start >= 10)
                            start = 2;
                        else
                            start = 1;
                        $('#loanAmount').text("£" + String(number).slice(0, start) + "," + String(number).slice(start, 10));
                    }
                }
            });

        $('#maintLoanLeft').html('7000')
        $('#maintLoanLeft').prop('Counter', 0).animate({
            Counter: $('#maintLoanLeft').text()
        }, {
                duration: 1500,
                easing: 'swing',
                step: function (now) {
                    var number = Math.ceil(now);
                    if (number == 0) {
                        $('#maintLoanLeft').text(number);
                    } else {
                        var start = Math.floor(number / 1000);
                        if (start >= 10)
                            start = 2;
                        else
                            start = 1;
                        $('#maintLoanLeft').text("£" + String(number).slice(0, start) + "," + String(number).slice(start, 10));
                    }
                }
            });
        doughnutData = [
            {
                value: 23,
                color: "#68dff0"
            },
            {
                value: 77,
                color: "#fdfdfd"
            }
        ];
        myDoughnut = new Chart(document.getElementById("loanStatus").getContext("2d")).Doughnut(doughnutData);
        $('#maintLoanGraphLegend').fadeOut("fast", () => {
            $('#maintLoanGraphLegend').html("23%")
            $('#maintLoanGraphLegend').css({
                top: "123px",
                left: "120px",
                fontSize: "2.5rem",
            });
            $('#loanStatus').css({
                height: "120",
                width: "120"
            });
            $('#maintLoanGraphLegend').fadeIn("fast");
        });
        $('#interestCounter').fadeOut("fast", () => {
            $('#interestCounter').html("4.42%")
            $('#interestCounter').css({
                color: "#e8d100"
            });
            $('#interestCounter').fadeIn("fast");
        });
        $('.withdrawInput').val("");
        withdrawAmount = "";
    } else {
        step = 1;
        $('#loanAmount').html('33810')
        $('#loanAmount').prop('Counter', 0).animate({
            Counter: $('#loanAmount').text()
        }, {
                duration: 1500,
                easing: 'swing',
                step: function (now) {
                    var number = Math.ceil(now);
                    if (number == 0) {
                        $('#loanAmount').text(number);
                    } else {
                        var start = Math.floor(number / 1000);
                        if (start >= 10)
                            start = 2;
                        else
                            start = 1;
                        $('#loanAmount').text("£" + String(number).slice(0, start) + "," + String(number).slice(start, 10));
                    }
                }
            });

        $('#maintLoanLeft').html('0')
        $('#maintLoanLeft').prop('Counter', 0).animate({
            Counter: $('#maintLoanLeft').text()
        }, {
                duration: 1500,
                easing: 'swing',
                step: function (now) {
                    var number = Math.ceil(now);
                    if (number == 0) {
                        $('#maintLoanLeft').text(number);
                    } else {
                        var start = Math.floor(number / 1000);
                        if (start >= 10)
                            start = 2;
                        else
                            start = 1;
                        $('#maintLoanLeft').text("£" + String(number).slice(0, start) + "," + String(number).slice(start, 10));
                    }
                }
            });
        doughnutData = [
            {
                value: 0,
                color: "#68dff0"
            },
            {
                value: 100,
                color: "#fdfdfd"
            }
        ];
        myDoughnut = new Chart(document.getElementById("loanStatus").getContext("2d")).Doughnut(doughnutData);
        $('#maintLoanGraphLegend').fadeOut("fast", () => {
            $('#maintLoanGraphLegend').html("0%")
            $('#maintLoanGraphLegend').css({
                top: "123px",
                left: "128px",
                fontSize: "2.5rem"
            });
            $('#loanStatus').css({
                height: "120",
                width: "120"
            });
            $('#maintLoanGraphLegend').fadeIn("fast");
        });
        $('#interestCounter').fadeOut("fast", () => {
            $('#interestCounter').html("6.1%")
            $('#interestCounter').css({
                color: "#e80000"
            });
            $('#interestCounter').fadeIn("fast");
        });
        $('.withdrawInput').val("");
        withdrawAmount = "";
    }
});

$('#resetBtn').click(function () {
    $('#loanAmount').html('0')
    $('#loanAmount').prop('Counter', 0).animate({
        Counter: $('#loanAmount').text()
    }, {
            duration: 1500,
            easing: 'swing',
            step: function (now) {
                var number = Math.ceil(now);
                if (number == 0) {
                    $('#loanAmount').text(number);
                } else {
                    var start = Math.floor(number / 1000);
                    if (start >= 10)
                        start = 2;
                    else
                        start = 1;
                    $('#loanAmount').text("£" + String(number).slice(0, start) + "," + String(number).slice(start, 10));
                }
            }
        });

    $('#maintLoanLeft').html('30000')
    $('#maintLoanLeft').prop('Counter', 0).animate({
        Counter: $('#maintLoanLeft').text()
    }, {
            duration: 1500,
            easing: 'swing',
            step: function (now) {
                var number = Math.ceil(now);
                if (number == 0) {
                    $('#maintLoanLeft').text(number);
                } else {
                    var start = Math.floor(number / 1000);
                    if (start >= 10)
                        start = 2;
                    else
                        start = 1;
                    $('#maintLoanLeft').text("£" + String(number).slice(0, start) + "," + String(number).slice(start, 10));
                }
            }
        });
    doughnutData = [
        {
            value: 100,
            color: "#68dff0"
        },
        {
            value: 0,
            color: "#fdfdfd"
        }
    ];
    myDoughnut = new Chart(document.getElementById("loanStatus").getContext("2d")).Doughnut(doughnutData);
    $('#maintLoanGraphLegend').fadeOut("fast", () => {
        $('#maintLoanGraphLegend').html("100%")
        $('#maintLoanGraphLegend').css({
            top: "124px",
            left: "114px",
            fontSize: "2.5rem"
        });
        $('#loanStatus').css({
            height: "120",
            width: "120"
        });
        $('#maintLoanGraphLegend').fadeIn("fast");
    });
    $('#interestCounter').fadeOut("fast", () => {
        $('#interestCounter').html("3%")
        $('#interestCounter').css({
            color: "#7df253"
        });
        $('#interestCounter').fadeIn("fast");
    });
    $('.withdrawInput').val("");
});

$('.count').each(function () {
    $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
    }, {
            duration: 1500,
            easing: 'swing',
            step: function (now) {
                var number = Math.ceil(now);
                if (number == 0) {
                    $(this).text(number);
                } else {
                    var start = Math.floor(number / 1000);
                    if (start >= 10)
                        start = 2;
                    else
                        start = 1;
                    $(this).text("£" + String(number).slice(0, start) + "," + String(number).slice(start, 10));
                }
            }
        });
});

// Withdraw animation controls

setInterval(animateWithdrawDisplay, 1000);

var withdrawAmount = "";
var inAnimation = false;

function animateWithdrawDisplay() {
    if (inAnimation)
        return;
        
    var nullFields = 0;
    if ($('#withdrawAmount1').val() != "")
        withdrawAmount = $('#withdrawAmount1').val();
    else
        nullFields++
    if ($('#withdrawAmount2').val() != "")
        withdrawAmount = $('#withdrawAmount2').val();
    else
        nullFields++
    if ($('#withdrawAmount3').val() != "")
        withdrawAmount = $('#withdrawAmount3').val();
    else
        nullFields++

    if (nullFields == 3)
        withdrawAmount = null

    if (withdrawAmount == null) {
        inAnimation = true;
        $('.repaymentInfo').fadeOut('fast', () => {
            $('#withdrawDisplay').animate({
                height: '480px'
            }, () => {
                $('#interestIncreaseAlert').fadeOut('fast', () => {
                    inAnimation = false;
                });
            });
        });
    } else if (isNaN(withdrawAmount)) {
        inAnimation = true;
        $('#interestIncreaseAlert').html("Invalid amount");
        $('#interestIncreaseAlert').fadeIn('fast', () => {
            inAnimation = false;
        });
    } else if (/\S/.test(withdrawAmount)) {
        inAnimation = true;
        $('#interestIncreaseAlert').html("This will increase your interest rate by 2%");
        $('#interestIncreaseAlert').fadeIn('fast', () => {
            $('#withdrawDisplay').animate({
                height: '600px'
            }, () => {
                $('.repaymentInfo').fadeIn('fast', () => {
                    inAnimation = false;
                });
            });
        });
    }
}

function enterWithdrawAmount(object) {
    // withdrawAmount = object.value;
}