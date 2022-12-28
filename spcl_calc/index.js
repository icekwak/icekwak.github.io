function add(num) {
    var display = document.getElementById("calc_input");
    display.value = display.value + num;
}

function del() {
    var display = document.getElementById("calc_input");
    display.value = display.value.substring(0, display.value.length - 1);

    var displayFreight = document.getElementById("freight_output");
    displayFreight.value = "화물: 0원";

    var displayParcel = document.getElementById("parcel_output");
    displayParcel.value = "택배: 0원";
}

function reset() {
    var display = document.getElementById("calc_input");
    display.value = "";

    var displayFreight = document.getElementById("freight_output");
    displayFreight.value = "화물: 0원";

    var displayParcel = document.getElementById("parcel_output");
    displayParcel.value = "택배: 0원";
}

function calculate() {
    var display = document.getElementById("calc_input");
    var result = eval(display.value);
    display.value = result;

    // 여기에 계산식 추가
    specialCalculator(result);
}
