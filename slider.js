var premium=document.getElementById("premium");


var death_sa_slider = document.getElementById("death_sa_slider");
var death_sa_output = document.getElementById("death_sa_value");
death_sa_output.innerHTML = death_sa_slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
death_sa_slider.oninput = function() {
    death_sa_output.innerHTML = this.value;
    premium.innerHTML = calc_prem();
} 


var death_term_slider = document.getElementById("death_term_slider");
var death_term_output = document.getElementById("death_term_value");
death_term_output.innerHTML = death_term_slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
death_term_slider.oninput = function() {
    death_term_output.innerHTML = this.value;
    premium.innerHTML = calc_prem();
} 


var ci_sa_slider = document.getElementById("ci_sa_slider");
var ci_sa_output = document.getElementById("ci_sa_value");
ci_sa_output.innerHTML = ci_sa_slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
ci_sa_slider.oninput = function() {
    ci_sa_output.innerHTML = this.value;
    premium.innerHTML = calc_prem();
} 


var ci_term_slider = document.getElementById("ci_term_slider");
var ci_term_output = document.getElementById("ci_term_value");
ci_term_output.innerHTML = ci_term_slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
ci_term_slider.oninput = function() {
    ci_term_output.innerHTML = this.value;
    premium.innerHTML = calc_prem();
}

var pa_sa_slider = document.getElementById("pa_sa_slider");
var pa_sa_output = document.getElementById("pa_sa_value");
pa_sa_output.innerHTML = pa_sa_slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
pa_sa_slider.oninput = function() {
    pa_sa_output.innerHTML = this.value;
    premium.innerHTML = calc_prem();
} 


var disa_sa_slider = document.getElementById("disa_sa_slider");
var disa_sa_output = document.getElementById("disa_sa_value");
disa_sa_output.innerHTML = disa_sa_slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
disa_sa_slider.oninput = function() {
    disa_sa_output.innerHTML = this.value;
    premium.innerHTML = calc_prem();
} 


var disa_term_slider = document.getElementById("disa_term_slider");
var disa_term_output = document.getElementById("disa_term_value");
disa_term_output.innerHTML = disa_term_slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
disa_term_slider.oninput = function() {
    disa_term_output.innerHTML = this.value;
    premium.innerHTML = calc_prem();
}

premium.innerHTML = calc_prem();

function calc_prem() {
    prem = (0.1 * death_sa_slider.value
    + 5.0 * ci_sa_slider.value
    + 4.0 * pa_sa_slider.value
    + 3.2 * disa_sa_slider.value) * 1.1 + 300;
    //console.log("Prem: " +  prem);
    return prem.toFixed(2);
}
