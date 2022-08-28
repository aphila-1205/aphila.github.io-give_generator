output();

function output(){
    document.getElementById("output").innerHTML = `<label class='normal'>give @s </label><label class='str'>` + document.getElementById("id").value + `</label><label class='normal'>{`;
    General_Tags(0);
    display(document.getElementById("Name").value, document.getElementById("Lore").value);
    Enchantments();
    StoredEnchantments();
    AttributeModifiers();
    
    //other nbt
    
    if(CPEtest.includes(document.getElementById("id").value)){CustomPotionEffects();}
    if(document.getElementById("id").value == "minecraft:crossbow"){crossbow();}
    if(document.getElementById("id").value == "minecraft:writable_book" || document.getElementById("id").value == "minecraft:written_book"){
        if(document.getElementById("pages").value != ""){
            var pages = document.getElementById("pages").value;
            pages = pages.replace("\n",",")
            document.getElementById("output").innerHTML += `,pages:[' + pages + ']`;
        }
        if(document.getElementById("id").value == "minecraft:written_book"){
            if(document.getElementById("resolved").checked == true){
                document.getElementById("output").innerHTML += `,resolved:1b`;
            }
            if(document.getElementById("generation").value != ""){
                document.getElementById("output").innerHTML += `,generation:` + document.getElementById("generation").value + `b`;
            }
            if(document.getElementById("author").value != ""){
                document.getElementById("output").innerHTML += `,author:"` + document.getElementById("author").value + `"`;
            }
            if(document.getElementById("title").value != ""){
                document.getElementById("output").innerHTML += `,title:"` + document.getElementById("title").value + `"`;
            }
        }
    }
    if(document.getElementById("id").value == "minecraft:player_head" || document.getElementById("id").value == "minecraft:wall_player_head"){
        if(document.getElementById("SkullOwner").value != ""){
            document.getElementById("output").innerHTML += ',SkullOwner:"' + document.getElementById("SkullOwner").value + '"';
        }
    }
    if(document.getElementById("other").value != ""){
        document.getElementById("output").innerHTML += `</label><label class='normal'>,` + document.getElementById("other").value.replace(/\n/g,',')
    }
    document.getElementById("output").innerHTML += "}";
}

function General_Tags(n){
    
    if(document.getElementById("Unbreakable").checked == true){
        document.getElementById("output").innerHTML += `</label><label class='nbt'>Unbreakable</label><label class='normal'>:</label><label class='num'>1</lable><label class='type'>b`;
    }
    else{
        document.getElementById("output").innerHTML += `</label><label class='nbt'>Unbreakable</label><label class='normal'>:</label><label class='num'>0</lable><label class='type'>b`;
    }

    n = 0;
    if(document.getElementById("HEnchantments").checked==true){
        n += 1;
    }
    if(document.getElementById("HAttributeModifiers").checked==true){
        n += 2;
    }
    if(document.getElementById("HUnbreakable").checked==true){
        n += 4;
    }
    if(document.getElementById("HCanDestroy").checked==true){
        n += 8;
    }
    if(document.getElementById("HStoredEnchantments").checked==true){
        n += 16;
    }
    if(document.getElementById("Hother").checked==true){
        n += 32;
    }
    if(document.getElementById("Hcolor").checked==true){
        n += 64;
    }

    document.getElementById("output").innerHTML +=  `</label><label class='normal'>,</label><label class='nbt'>Hideflags</label><label class='normal'>:</label><label class='num'>` + n;
    if(document.getElementById("Damage").value !=''){
        document.getElementById("output").innerHTML += `</label><label class='normal'>,</label><label class='nbt'>Damage</label><label class='normal'>:</label><label class='num'>` + document.getElementById("Damage").value;
    }
    if(document.getElementById("CustomModelData").value !=''){
        document.getElementById("output").innerHTML += `</label><label class='normal'>,</label><label class='nbt'>CustomModelData</label><label class='normal'>:</label><label class='num'>` + document.getElementById("CustomModelData").value;
    }
    if(document.getElementById("RepairCost").value !=''){
        document.getElementById("output").innerHTML += `</label><label class='normal'>,</label><label class='nbt'>RepairCost</label><label class='normal'>:</label><label class='num'>` + document.getElementById("RepairCost").value;
    }
    if(document.getElementById("CanDestroy").value !=''){
        document.getElementById("output").innerHTML += `</label><label class='normal'>,</label><label class='nbt'>CanDestroy</label><label class='normal'>:[\"</label><label class='str'>` + document.getElementById("CanDestroy").value.replace(/\n/g,'</label><label class=\'normal\'>\",\"</label><label class=\'str\'>') + `</label><label class='normal'>\"]`;
    }
}
function display(Name, Lore){
    var list = ""
    if(Name!="" || Lore!="" || leather_armortest.includes(document.getElementById("id").value)){
        if(Name!=""){
            Name = (`Name:[{"text": "` + CF_code(Name) + `"}]`).replace('{"text": ""},','').replace('true, "text": ""},{"color"','true, "color"')
            list += Name;
        }
        if(Lore!=""){
            if(display!=""){
                list += ","
            }
            Lore = (`Lore:[{"text": "` + CF_code(Lore).replace(/\n/g,'"},{"text": "') + `"}]`).replace('{"text": ""},','').replace('true, "text": ""},{"color"','true, "color"')
            list += Lore;
        }
        if(leather_armortest.includes(document.getElementById("id").value)){
            if(document.getElementById("color_").checked == true){
                if(display!=""){
                list += ",";
                }
                list += "color:" + Number(document.getElementById("color").value.replace('#','0x'));
            }
        }
        document.getElementById("output").innerHTML += `</label><label class='normal'>,</label><label class='nbt'>display</label><label class='normal'>:{` + list + `</label><label class='normal'>}`;
    }
}
function Enchantments(){
    for(n=1, list=""; n<=Ench_n; n++){
        if(document.getElementById("Ench_id" + n)){if(document.getElementById("Ench_id" + n).value != ''){
            list += `{</label><label class='nbt'>id</label><label class='normal'>:"</label><label class='str'>` + document.getElementById("Ench_id" + n).value + `</label><label class='normal'>",</label><label class='nbt'>lvl</label><label class='normal'>:</label><label class='num'>` + document.getElementById("Ench_lvl" + n).value + `</label><label class='type'>s</label><label class='normal'>},`;
        }}
    }
    if(list!=""){
        document.getElementById("output").innerHTML += `</label><label class='normal'>,</label><label class='nbt'>Enchantments</label><label class='normal'>:[` + list.slice(0,-1) + `]`;
    }
}
function StoredEnchantments(){
    for(n=1, list=""; n<=SEnch_n; n++){
        if(document.getElementById("SEnch_id" + n)){if(document.getElementById("SEnch_id" + n).value != ''){
            list += `{</label><label class='nbt'>id</label><label class='normal'>:"</label><label class='str'>` + document.getElementById("SEnch_id" + n).value + `</label><label class='normal'>",</label><label class='nbt'>lvl</label><label class='normal'>:</label><label class='num'>` + document.getElementById("SEnch_lvl" + n).value + `</label><label class='type'>s</label><label class='normal'>},`;
        }}
    }
    if(list!=""){
        document.getElementById("output").innerHTML += `</label><label class='normal'>,</label><label class='nbt'>StoredEnchantments</label><label class='normal'>:[` +list.slice(0,-1) + `]`;
    }
}
function AttributeModifiers(){
    for(n=1, list=""; n<AM_n+1; n++){
        if(document.getElementById("AMAN" + n).value){if(document.getElementById("AMAN" + n).value != ''){
            m = `</label><label class='normal'>{</label><label class='nbt'>AttributeName</label><label class='normal'>:"</label><label class='str'>` + document.getElementById("AMAN" + n).value + `</label><label class='normal'>",</label><label class='nbt'>Operation</label><label class='normal'>:</label><label class='num'>` + document.getElementById("AMO" + n).value + `</label><label class='normal'>},</label><label class='nbt'>Amount</label><label class='normal'>:</label><label class='num'>` + document.getElementById("AMA" + n).value + `</label><label class='type'>d</label><label class='normal'>,</label><label class='nbt'>Slot</label><label class='normal'>:"</label><label class='str'>` + document.getElementById("AMS" + n).value + `</label><label class='normal'>",</label><label class='nbt'>UUID</label><label class='normal'>:[</label><label class='type'>I</label><label class='normal'>;</label><label class='num'>` + document.getElementById("AMU1_" + n).value + `</label><label class='normal'>,</label><label class='num'>` + document.getElementById("AMU2_" + n).value + `</label><label class='normal'>,</label><label class='num'>` + document.getElementById("AMU3_" + n).value + `</label><label class='normal'>,</label><label class='num'>` + document.getElementById("AMU4_" + n).value + `</label><label class='normal'>]`;
            if(document.getElementById("AMN" + n).value != ''){
                m += `</label><label class='normal'>,</label><label class='nbt'>Name</label><label class='normal'>:"</label><label class='str'>` + document.getElementById("AMN" + n).value + `</label><label class='normal'>"`;
            }}
            m += `</label><label class='normal'>}`;
        list += m;
        }
    }
    if(list != ""){document.getElementById("output").innerHTML += `</label><label class='normal'>,</label><label class='nbt'>AttributeModifiers</label><label class='normal'>:[` + list + `]`;}
}
function CustomPotionEffects(){
    for(n=1, list=""; n<CPE_n+1; n++){
        if(document.getElementById("CPEId" + n).value != ''){
            m = `</label><label class='normal'>{</label><label class='nbt'>Id</label><label class='normal'>:</label><label class='num'>` + document.getElementById("CPEId" + n).value + `</label><label class='type'>b`;
            if(document.getElementById("CPEAmplifier" + n).value != ''){
                m += `</label><label class='normal'>,</label><label class='nbt'>Amplifier</label><label class='normal'>:</label><label class='num'>` + document.getElementById("CPEAmplifier" + n).value + `</label><label class='type'>b`;
            }
            if(document.getElementById("CPED" + n).value != ''){
                m += `</label><label class='normal'>,</label><label class='nbt'>Duration</label><label class='normal'>:</label><label class='num'>` + document.getElementById("CPED" + n).value;
            }
            if(document.getElementById("CPEAmbient" + n).checked == true){
                m += `</label><label class='normal'>,</label><label class='nbt'>Ambient</label><label class='normal'>:</label><label class='num'>1</label><label class='type'>b`;
            }
            else{
                m += `</label><label class='normal'>,</label><label class='nbt'>Ambient</label><label class='normal'>:</label><label class='num'>0</label><label class='type'>b`;
            }
            if(document.getElementById("CPESP" + n).checked == true){
                m += `</label><label class='normal'>,</label><label class='nbt'>ShowParticles</label><label class='normal'>:</label><label class='num'>1</label><label class='type'>b`;
            }
            else{
                m += `</label><label class='normal'>,</label><label class='nbt'>ShowParticles</label><label class='normal'>:</label><label class='num'>0</label><label class='type'>b`;
            }
            if(document.getElementById("CPESI" + n).checked == true){
                m += `</label><label class='normal'>,</label><label class='nbt'>ShowIcon</label><label class='normal'>:</label><label class='num'>1</label><label class='type'>b`;
            }
            else{
                m += `</label><label class='normal'>,</label><label class='nbt'>ShowIcon</label><label class='normal'>:</label><label class='num'>0</label><label class='type'>b`;
            }
            m += `</label><label class='normal'>},`;
        list += m;
        }
    }
    document.getElementById("output").innerHTML += "</label><label class='normal'>,</label><label class='nbt'>CustomPotionEffects</label><label class='normal'>:[" + list.slice(0,-1) + "]";
    if(document.getElementById("CPECPC_").checked == true){
        document.getElementById("output").innerHTML += `</label><label class='normal'>,</label><label class='nbt'>CustomPotionColor</label><label class='normal'>:</label><label class='num'>` + Number(document.getElementById("CPECPC").value.replace('#','0x'));
    }
    if(document.getElementById("CPEP").value != ''){
        document.getElementById("output").innerHTML += `</label><label class='normal'>,</label><label class='nbt'>Potion</label><label class='normal'>:"</label><label class='str'>` + document.getElementById("CPEP").value + `</label><label class='normal'>"`;
    }
}
function crossbow(){
    if(document.getElementById("Charged").checked == true){
            ocument.getElementById("output").innerHTML += `</label><label class='normal'>,</label><label class='nbt'>Charged</label><label class='normal'>:</label><label class='num'>1</label><label class='type'>b`;
    }
    if(document.getElementById("Chargedid1").value != "" || document.getElementById("Chargedid2").value != "" || document.getElementById("Chargedid3").value != ""){
        var CP = `,ChargedProjectiles:[`;
        if(document.getElementById("Chargedid1").value != ""){
            CP += `</label><label class='normal'>{</label><label class='nbt'>id</label><label class='normal'>:"</label><label class='str'>` + document.getElementById("Chargedid1").value + `</label><label class='normal'>",</label><label class='nbt'>Count</label><label class='normal'>:</label><label class='num'>` + document.getElementById("ChargedCount1").value + `</label><label class='type'>b</label><label class='normal'>,</label><label class='nbt'>tag</label><label class='normal'>:{` + document.getElementById("Chargedtag1").value + `</label><label class='normal'>}}`;
        }
        if(document.getElementById("Chargedid2").value != ""){
            if(CP != ""){
                CP += `,`;
            }
            CP += `</label><label class='normal'>{</label><label class='nbt'>id</label><label class='normal'>:"</label><label class='str'>` + document.getElementById("Chargedid2").value + `</label><label class='normal'>",</label><label class='nbt'>Count</label><label class='normal'>:</label><label class='num'>` + document.getElementById("ChargedCount2").value + `</label><label class='type'>b</label><label class='normal'>,</label><label class='nbt'>tag</label><label class='normal'>:{` + document.getElementById("Chargedtag2").value + `</label><label class='normal'>}}`;
        }
        if(document.getElementById("Chargedid3").value != ""){
            if(CP != ""){
                CP += `,`;
            }
            CP += `</label><label class='normal'>{</label><label class='nbt'>id</label><label class='normal'>:"</label><label class='str'>` + document.getElementById("Chargedid3").value + `</label><label class='normal'>",</label><label class='nbt'>Count</label><label class='normal'>:</label><label class='num'>` + document.getElementById("ChargedCount3").value + `</label><label class='type'>b</label><label class='normal'>,</label><label class='nbt'>tag</label><label class='normal'>:{` + document.getElementById("Chargedtag3").value + `</label><label class='normal'>}}`;
        }
        CP += `]`;
        document.getElementById("output").innerHTML += CP;
    }
}