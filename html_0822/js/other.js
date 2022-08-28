function other_nbt(){
    if(CPEtest.includes(document.getElementById("id").value)){
        document.getElementById("other_nbt").innerHTML = `
        <label><input oninput="output()" id="CPECPC_" type="checkbox"><span>color</span></label>
        <input id='CPECPC' type="color" oninput="output()" style="margin-left:8px; width:120px;">
        <input oninput="output()" id="CPEP" type="text" placeholder="Name" style="margin-left:8px; width:160px;">
        <p></p>
        <button onclick="add_CPE()" style="background-color:#437e47; color:#dddddd; width:240px; height:25px; border-color:#6ea371; border-style:outset; border-width:3px;">add CustomPotionEffect</button>
        <div id="add_CPE_area1" style="background-color:#444444; width:800px;">
        </div>
        <p></p>
        <button onclick="add_CPE()" style="background-color:#437e47; color:#dddddd; width:240px; height:25px; border-color:#6ea371; border-style:outset; border-width:3px;">add CustomPotionEffect</button>`;
    }
    if(leather_armortest.includes(document.getElementById("id").value)){
        document.getElementById("other_nbt").innerHTML = `
        <label><input oninput="output()" type="checkbox" id="color_"><span>color</span></label>
        <input oninput="output()" type="color" id="color" style="margin-left:8px; width:120px;">`;
    }
    if(document.getElementById("id").value === "minecraft:crossbow"){
        document.getElementById("other_nbt").innerHTML = 
        `
        <label><input oninput="output()" type="checkbox" id="Charged"><span>Charged</span></label>
        <p></p>
        <input oninput="output()" list="itemid" id="Chargedid1" placeholder="id" style="width:300px;">
        <input oninput="output()" type="number" id="ChargedCount1" placeholder="Count(byte)" style="width:100px;">
        <input oninput="output()" type="text" id="Chargedtag1" placeholder="tag" style="width:300px;">
        <p></p>
        <input oninput="output()" list="itemid" id="Chargedid2" placeholder="id" style="width:300px;">
        <input oninput="output()" type="number" id="ChargedCount2" placeholder="Count(byte)" style="width:100px;">
        <input oninput="output()" type="text" id="Chargedtag2" placeholder="tag" style="width:300px;">
        <p></p>
        <input oninput="output()" list="itemid" id="Chargedid3" placeholder="id" style="width:300px;">
        <input oninput="output()" type="number" id="ChargedCount3" placeholder="Count(byte)" style="width:100px;">
        <input oninput="output()" type="text" id="Chargedtag3" placeholder="tag" style="width:300px;">`;
    }
    if(document.getElementById("id").value === "minecraft:writable_book" || document.getElementById("id").value === "minecraft:written_book"){
        document.getElementById("other_nbt").innerHTML = `
        <textarea id="pages" oninput="output()" type="text" placeholder="pages(Raw JSON Text)" rows=8 cols=100 style="background-color:#444444; color:#dddddd;"></textarea>`;
        if(document.getElementById("id").value === "minecraft:written_book"){
            document.getElementById("other_nbt").innerHTML += `
            <p></p>
            <label><input oninput="output()" type="checkbox" id="resolved"><span>resolved</span></label>
            <select id="generation" oninput="output()"  style="margin-left:8px; width:160px;">
                <option value=""></option>
                <option value="0">original</option>
                <option value="1">copy of original</option>
                <option value="2">copy of copy</option>
                <option value="3">tattered</option>
            </select>
            <input id="author" oninput="output()" type="text" placeholder="author" style="margin-left:8px; width:120px;">
            <input id="title" oninput="output()" type="text" placeholder="title" style="margin-left:8px; width:120px;">`;
        }
    }
    if(document.getElementById("id").value === "minecraft:player_head" || document.getElementById("id").value === "minecraft:wall_player_head"){
        document.getElementById("other_nbt").innerHTML = `
        <input oninput="output()" type="text" id="SkullOwner" style="width:180px;">`;
    }
    //if(document.getElementById("id").value === "minecraft:firework_star" || document.getElementById("id").value === "minecraft:firework_rocket"){
         //add_Explosion()
    //}
    if(document.getElementById("id").value === "minecraft:player_head" || document.getElementById("id").value === "minecraft:wall_player_head"){
        document.getElementById("other_nbt").innerHTML = `
        <input oninput="output()" type="text" id="SkullOwner" style="width:180px;">`;
    }
}

function add_Ench(){
    Ench_n += 1;
    Ench_area = `<p id="Ench_p` + Ench_n + `"></p>`;
    Ench_area += `<button id="Ench_remove` + Ench_n + `" class="remove" style="margin-left:8px;" onclick="remove_Ench(` + Ench_n + `)">remove</button>`;
    Ench_area += `<input oninput="output()" id="Ench_id` + Ench_n + `" type="list" list="Enchid" placeholder="id" style="margin-left:8px; width:200px;">`;
    Ench_area += `<input oninput="output()" id="Ench_lvl` + Ench_n + `" type="number" placeholder="Level(short)" size=24 style="margin-left:8px;">`;
    Ench_area += `<div id="add_Ench_area` + (Ench_n + 1)  + `" style="background-color:#444444; width:700px;"></div>`;
    document.getElementById("add_Ench_area" + Ench_n).innerHTML += Ench_area;
}
function remove_Ench(N){
    document.getElementById("Ench_id" + N).remove();
    document.getElementById("Ench_lvl" + N).remove();
    document.getElementById("Ench_remove" + N).remove();
    document.getElementById("Ench_p" + N).remove();
}

function add_SEnch(){
    SEnch_n += 1;
    SEnch_area = `<p id="SEnch_p` + SEnch_n + `"></p>`;
    SEnch_area += `<button id="SEnch_remove` + SEnch_n + `" class="remove" style="margin-left:8px;" onclick="remove_SEnch(` + SEnch_n + `)">remove</button>`;
    SEnch_area += `<input oninput="output()" id="SEnch_id` + SEnch_n + `" type="list" list="Enchid" placeholder="id" style="margin-left:8px; width:200px;">`;
    SEnch_area += `<input oninput="output()" id="SEnch_lvl` + SEnch_n + `" type="number" placeholder="Level(short)" size=24 style="margin-left:8px;">`;
    SEnch_area += `<div id="add_SEnch_area` + (SEnch_n + 1)  + `" style="background-color:#444444; width:700px;"></div>`;
    document.getElementById("add_SEnch_area" + SEnch_n).innerHTML += SEnch_area;
}
function remove_SEnch(N){
    document.getElementById("SEnch_id" + N).remove();
    document.getElementById("SEnch_lvl" + N).remove();
    document.getElementById("SEnch_remove" + N).remove();
    document.getElementById("SEnch_p" + N).remove();
}

function add_AM(){
    AM_n += 1;
    AM_area = `<p id="AM_p1` + AM_n + `"></p>`;
    AM_area += `<button id="AM_remove` + AM_n + `" class="remove" style="margin-left:8px;" onclick="remove_AM(` + AM_n + `)">remove</button>`;
    AM_area += `<input oninput="output()" id="AMAN` + AM_n + `" type="list" list="AMAN" placeholder="AttributeName" style="margin-left:8px; margin-top:10px; width:200px;">`;
    AM_area += `<input oninput="output()" id="AMN` + AM_n + `" type="list" placeholder="Name" style="margin-left:8px; margin-top:10px; width:80px;">`;
    AM_area += `<select oninput="output()" id="AMO` + AM_n + `" style="margin-left:8px; width:80px;"><option value="0">add</option><option value="1">multiply_base</option><option value="2">multiply</option></select>`;
    AM_area += `<input oninput="output()" id="AMS` + AM_n + `" type="list" list="Slot" placeholder="Slot" style="margin-left:8px; width:68px;">`;
    AM_area += `<input oninput="output()" id="AMA` + AM_n + `" type="number" placeholder="Amount(double)" style="margin-left:8px; width:112px;">`;
    AM_area += `<p id="AM_p2` + AM_n + `"></p>`;
    AM_area += `<input oninput="output()" id="AMU1_` + AM_n + `" type="number" placeholder="UUID-1(int)" style="margin-left:74px; width:84px;">`;
    AM_area += `<button id="AMU1_R` + AM_n + `" class="random"onclick="random_int('AMU1_` + AM_n + `',-2147483648,2147483647); output()">random</button>`;
    AM_area += `<input oninput="output()" id="AMU2_` + AM_n + `" type="number" placeholder="UUID-2(int)" style="margin-left:8px; width:84px;">`;
    AM_area += `<button id="AMU2_R` + AM_n + `" class="random"onclick="random_int('AMU2_` + AM_n + `',-2147483648,2147483647); output()">random</button>`;
    AM_area += `<input oninput="output()" id="AMU3_` + AM_n + `" type="number" placeholder="UUID-3(int)" style="margin-left:8px; width:84px;">`;
    AM_area += `<button id="AMU3_R` + AM_n + `" class="random"onclick="random_int('AMU3_` + AM_n + `',-2147483648,2147483647); output()">random</button>`;
    AM_area += `<input oninput="output()" id="AMU4_` + AM_n + `" type="number" placeholder="UUID-4(int)" style="margin-left:8px; width:84px;">`;
    AM_area += `<button id="AMU4_R` + AM_n + `" class="random"onclick="random_int('AMU4_` + AM_n + `',-2147483648,2147483647); output()">random</button>`;
    AM_area += `<div id="add_AM_area` + (AM_n + 1)  + `" style="background-color:#444444; width:800px;"></div>`;
    document.getElementById("add_AM_area" + AM_n).innerHTML += AM_area;
}
function remove_AM(N){
    document.getElementById("AMAN" + N).remove();
    document.getElementById("AMN" + N).remove();
    document.getElementById("AMO" + N).remove();
    document.getElementById("AMS" + N).remove();
    document.getElementById("AMA" + N).remove();
    document.getElementById("AMU1_" + N).remove();
    document.getElementById("AMU2_" + N).remove();
    document.getElementById("AMU3_" + N).remove();
    document.getElementById("AMU4_" + N).remove();
    document.getElementById("AMU1_R" + N).remove();
    document.getElementById("AMU2_R" + N).remove();
    document.getElementById("AMU3_R" + N).remove();
    document.getElementById("AMU4_R" + N).remove();
    document.getElementById("AM_remove" + N).remove();
    document.getElementById("AM_p1" + N).remove();
    document.getElementById("AM_p2" + N).remove();
}

function add_CPE(){
    CPE_n += 1;
    CPE_area = `<p id="CPE_p1` + CPE_n + `"></p>`;
    CPE_area += `<button id="CPE_remove` + CPE_n + `" class="remove" style="margin-left:8px;" onclick="remove_CPE(` + CPE_n + `)">remove</button>`;
    CPE_area += `<input oninput="output()" id="CPEId` + CPE_n + `" list="Effectid" placeholder="Id(byte)" style="margin-left:8px; margin-top:10px; width:120px;">`;
    CPE_area += `<input oninput="output()" id="CPEAmplifier` + CPE_n + `" type="number" placeholder="Amplifier(byte)" style="margin-left:8px; margin-top:10px; width:108px;">`;
    CPE_area += `<input oninput="output()" id="CPED` + CPE_n + `" type="number" placeholder="Duration(int)" style="margin-left:8px; width:108px;">`;
    CPE_area += `<label><input oninput="output()" id="CPEAmbient` + CPE_n + `" type="checkbox"><span style="margin-left:8px;" id="CPEAmbient_` + CPE_n + `">Ambient</span></label>`;
    CPE_area += `<label><input oninput="output()" id="CPESP` + CPE_n + `" type="checkbox"><span style="margin-left:8px;" id="CPESP_` + CPE_n + `">ShowParticles</span></label>`;
    CPE_area += `<label><input oninput="output()" id="CPESI` + CPE_n + `" type="checkbox"><span style="margin-left:8px;" id="CPESI_` + CPE_n + `">ShowIcon</span></label>`;
    CPE_area += `<div id="add_CPE_area` + (CPE_n + 1)  + `" style="background-color:#444444; width:800px;"></div>`;
    document.getElementById("add_CPE_area" + CPE_n).innerHTML += CPE_area;
}
function remove_CPE(N){
    document.getElementById("CPE_p1" + N).remove();
    document.getElementById("CPEId" + N).remove();
    document.getElementById("CPEAmplifier" + N).remove();
    document.getElementById("CPED" + N).remove();
    document.getElementById("CPEAmbient" + N).remove();
    document.getElementById("CPESP" + N).remove();
    document.getElementById("CPESI" + N).remove();
    document.getElementById("CPEAmbient_" + N).remove();
    document.getElementById("CPESP_" + N).remove();
    document.getElementById("CPESI_" + N).remove();
    document.getElementById("CPEP" + N).remove();
    document.getElementById("CPE_remove" + N).remove();
}
function add_Explosion(N){
    document.getElementById("other_nbt").innerHTML += `
    <div style="margin-left:20px; background-color:#333333; width:780px; border-color:#333333; border-style:solid; border-width:12px; border-bottom-width:16px;" id="Explosion` + N + `">
    <label><input oninput="output()" type="checkbox" id="Flicker"><span style="margin-left:8px;">Flicker</span></label>
    <label><input oninput="output()" type="checkbox" id="Trail"><span style="margin-left:8px;">Trail</span></label>
    <select id="Type" oninput="output()"  style="margin-left:8px; width:160px;">
        <option value=""></option>
        <option value="0">Small Ball</option>
        <option value="1">Large Ball</option>
        <option value="2">Star-shaped</option>
        <option value="3">Creeper-shaped</option>
        <option value="4">Burst</option>
    </select>
    <p></p>
    <button onclick="add_Colors(`+ N + `)" style="background-color:#437e47; color:#dddddd; width:180px; height:25px; border-color:#6ea371; border-style:outset; border-width:3px;">add Color</button>
    <div id="` + N + `add_Color_area1" style="background-color:#444444; width:800px;" class="1"></div>
    <p></p>
    <button onclick="add_Colors()" style="background-color:#437e47; color:#dddddd; width:180px; height:25px; border-color:#6ea371; border-style:outset; border-width:3px;">add Color</button>
    <p></p>
    <button onclick="add_FadeColors()" style="background-color:#437e47; color:#dddddd; width:180px; height:25px; border-color:#6ea371; border-style:outset; border-width:3px;">add FadeColor</button>
    <div id="` + N + `add_FadeColor_area1" style="background-color:#444444; width:800px;"></div>
    <p></p>
    <button onclick="add_FadeColors()" style="background-color:#437e47; color:#dddddd; width:180px; height:25px; border-color:#6ea371; border-style:outset; border-width:3px;">add FadeColor</button></div>`;
}