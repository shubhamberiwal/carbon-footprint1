
$(function() {
    $('body').removeClass('fade-out');
});
console.log("An average Indian Car leaves a carbon footprint of 155.2g/km");

function wonder(){
    
    var choco_qt = document.querySelector("#quantity_choco");
    var chips_qt = document.querySelector("#quantity_chips");
    var biscuits_qt = document.querySelector("#quantity_biscuits");
    var soaps_qt = document.querySelector("#quantity_soaps");

    var choco_sz = document.querySelector("#chocolates_size");
    var chips_sz = document.querySelector("#chips_size");
    var biscuits_sz = document.querySelector("#biscuits_size");
    var soaps_sz = document.querySelector("#soaps_size");
    
    var choco = {
        qt: parseInt(choco_qt.value),
        sz: choco_sz.value,
        cf: 0.0404
    };
    var chips = { 
        qt: parseInt(chips_qt.value),
        sz: chips_sz.value,
        cf: 0.197
    };
    var biscuits = { 
        qt: parseInt(biscuits_qt.value),
        sz: biscuits_sz.value,
        cf: 0.2287
    };
    var soaps = { 
        qt: parseInt(soaps_qt.value),
        sz: soaps_sz.value,
        cf: 22.5
    };
    var carbon_footprint;
    choco.sz = size(choco.sz);
    chips.sz = size(chips.sz);
    biscuits.sz = size(biscuits.sz);
   
    choco.re = choco.qt*choco.sz*choco.cf;
    chips.re = chips.qt*chips.sz*chips.cf;
    biscuits.re = biscuits.qt*biscuits.sz*biscuits.cf;
    soaps.re = soaps.qt*soaps.cf;
    carbon_footprint = choco.re + chips.re + biscuits.re + soaps.re;
    carbon_footprint = Math.round((carbon_footprint) * 1000) / 1000

        // console.log(choco);
        // console.log(chips);
        // console.log(biscuits);
        // console.log(soaps);
        // console.log(carbon_footprint);
        

    var equi = carbon_footprint/155.2;
    equi = Math.round((equi + Number.EPSILON) * 100) / 100
    console.log(equi);
    
    var result = document.querySelector("#result");
    result.textContent = carbon_footprint+" gms of CO2";
    var kms = document.querySelector("#kms");
    kms.textContent = equi+" km";
    // var container2 = document.querySelector("#container2");
    // var container22 = document.querySelector("#container2:hidden");
    // container22.first().fadeIn("slow");
    // container2.style.display = "block";
    $( "#container2" ).first().fadeIn( 1000 );
    
}


function size(param){
    if(param === "small")
    {
        return 1;
    }
    else if(param === "medium")
    {
        return 3;
    }
    else
    {
        return 6;
    }

}

$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(300, function(){
        $(this).remove();
    });
    event.stopPropagation();
});
