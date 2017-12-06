var premium2=document.getElementById("premium2");


var death_sa_slider2 = document.getElementById("death_sa_slider2");
var death_sa_output2 = document.getElementById("death_sa_value2");
death_sa_output2.innerHTML = death_sa_slider2.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
death_sa_slider2.oninput = function() {
    death_sa_output2.innerHTML = this.value;
    premium.innerHTML2 = calc_prem2();
} 


var death_term_slider2 = document.getElementById("death_term_slider2");
var death_term_output2 = document.getElementById("death_term_value2");
death_term_output2.innerHTML = death_term_slider2.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
death_term_slider2.oninput = function() {
    death_term_output2.innerHTML = this.value;
    premium2.innerHTML = calc_prem2();
} 


var ci_sa_slider2 = document.getElementById("ci_sa_slider2");
var ci_sa_output2 = document.getElementById("ci_sa_value2");
ci_sa_output.innerHTML = ci_sa_slider2.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
ci_sa_slider2.oninput = function() {
    ci_sa_output2.innerHTML = this.value;
    premium2.innerHTML = calc_prem2();
} 


var ci_term_slider2 = document.getElementById("ci_term_slider2");
var ci_term_output2 = document.getElementById("ci_term_value2");
ci_term_output2.innerHTML = ci_term_slider2.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
ci_term_slider2.oninput = function() {
    ci_term_output2.innerHTML = this.value;
    premium2.innerHTML = calc_prem2();
}

var pa_sa_slider2 = document.getElementById("pa_sa_slider2");
var pa_sa_output2 = document.getElementById("pa_sa_value2");
pa_sa_output2.innerHTML = pa_sa_slider2.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
pa_sa_slider2.oninput = function() {
    pa_sa_output2.innerHTML = this.value;
    premium2.innerHTML = calc_prem2();
} 


var disa_sa_slider2 = document.getElementById("disa_sa_slider2");
var disa_sa_output2 = document.getElementById("disa_sa_value2");
disa_sa_output2.innerHTML = disa_sa_slider2.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
disa_sa_slider2.oninput = function() {
    disa_sa_output2.innerHTML = this.value;
    premium2.innerHTML = calc_prem2();
} 


var disa_term_slider2 = document.getElementById("disa_term_slider2");
var disa_term_output2 = document.getElementById("disa_term_value2");
disa_term_output2.innerHTML = disa_term_slider2.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
disa_term_slider2.oninput = function() {
    disa_term_output2.innerHTML = this.value;
    premium2.innerHTML = calc_prem2();
}

premium2.innerHTML = calc_prem2();

function calc_prem2() {
    prem = (0.1 * death_sa_slider2.value
    + 5.0 * ci_sa_slider2.value
    + 4.0 * pa_sa_slider2.value
    + 3.2 * disa_sa_slider2.value) * 1.1 + 300;
    //console.log("Prem: " +  prem);
    return prem.toFixed(2);
}
