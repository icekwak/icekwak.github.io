function specialCalculator(calc_result) {
    var displayFreight = document.getElementById("freight_output");
    var displayParcel = document.getElementById("parcel_output");

    // switch(true) {
    //     case (0 <= calc_result < 1000):
    //     case (1000 <= calc_result < 2000):
    //         console.log("1:" + calc_result);
    //         displayFreight.value = "화물: 3000원";
    //         displayParcel.value = "택배: 3000원";
    //         break;
    //     case (2000 <= calc_result < 3000):
    //         console.log("2:" + calc_result);
    //         displayFreight.value = "화물: 4000원";
    //         displayParcel.value = "택배: 4000원";
    //         break;
    //     case (3000 <= calc_result < 20000000):
    //         console.log("3:" + calc_result);
    //         displayFreight.value = "화물: 5000원";
    //         displayParcel.value = "택배: 5000원";
    //         break;
    //     default:
    //         displayFreight.value = "화물: 0원";
    //         displayParcel.value = "택배: 0원";
    //         break;
    // }

    if(calc_result > 0 && calc_result < 1000) {
        displayFreight.value = "화물: 3000원";
        displayParcel.value = "택배: 3000원";
    }
    else if(3000 < calc_result) {
        displayFreight.value = "화물: 5000원";
        displayParcel.value = "택배: 5000원";
    }
    else {
        displayFreight.value = "화물: 0원";
        displayParcel.value = "택배: 0원";
    }
}
