function random_int(id,min,max){
    document.getElementById(id).value = Math.floor(Math.random()*Math.abs(max-min))+min;
}
function random(id,min,max){
    document.getElementById(id).value = Math.random()*Math.abs(max-min)+min;
}

function CF_code(text){
    text = text.replace('§0','"},{"color": "black", "text": "')
    text = text.replace('§1','"},{"color": "dark_blue", "text": "')
    text = text.replace('§2','"},{"color": "dark_green", "text": "')
    text = text.replace('§3','"},{"color": "dark_aqua", "text": "')
    text = text.replace('§4','"},{"color": "dark_red", "text": "')
    text = text.replace('§5','"},{"color": "dark_purple", "text": "')
    text = text.replace('§6','"},{"color": "gold", "text": "')
    text = text.replace('§7','"},{"color": "gray", "text": "')
    text = text.replace('§8','"},{"color": "dark_gray", "text": "')
    text = text.replace('§9','"},{"color": "blue", "text": "')
    text = text.replace('§a','"},{"color": "green", "text": "')
    text = text.replace('§b','"},{"color": "aqua", "text": "')
    text = text.replace('§c','"},{"color": "red", "text": "')
    text = text.replace('§d','"},{"color": "light_purple", "text": "')
    text = text.replace('§e','"},{"color": "yellow", "text": "')
    text = text.replace('§f','"},{"color": "white", "text": "')

    text = text.replace('§k','"},{"obfuscated": true, "text": "')
    text = text.replace('§l','"},{"bold": true, "text": "')
    text = text.replace('§m','"},{"italic": true, text": "')
    text = text.replace('§n','"},{"underlined": true, "text": "')
    text = text.replace('§o','"},{"strikethrough": true, "text": "')

    return text;
}

function h_color(){
    document.getElementById("h_color_output1").innerHTML = Number(document.getElementById("h_color").value.replace('#','0x'))
    document.getElementById("h_color_output2").innerHTML = document.getElementById("h_color").value
}

function copy(){
    var text = String(document.getElementById('output').innerText);
    navigator.clipboard.writeText(text);
}