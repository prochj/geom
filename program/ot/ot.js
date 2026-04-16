function pocet(poc) {
if (poc > 30) alert ('Zadal jsi èíslo vyšší než 30, tolik otázek nemám v databázi !!!')
if (poc < 1) alert ('Zadal jsi pøíliš malé èíslo !!!')
if (poc>=1 && poc <=30) {
top.frames.seznam.pocot=poc
otazka(0)
}
}

function otazka(cs) {

pc=top.frames.seznam.pocot

if (cs==0) {
top.frames.seznam.bod=0
top.frames.seznam.porot=0
top.frames.seznam.cisot=0
for(i=0; i<=40;i++) {
top.frames.seznam.ot[i]=0
top.frames.seznam.chyb[i]=0
}
}

if (top.frames.seznam.porot!=0){
mm=cs%3
if (document.forms[0].elements[mm].checked==true) {
top.frames.seznam.bod++
gener()
}
else{
alert('Chybnì')
if (top.frames.seznam.chyb[top.frames.seznam.porot]!=1) {
top.frames.seznam.bod--
top.frames.seznam.chyb[top.frames.seznam.porot]=1
}
}
}
else gener()

}
function gener() {
if (top.frames.seznam.porot==pc) location.replace("vysledek.htm")
else {
nah=Math.round(30*Math.random())
while (top.frames.seznam.ot[nah]==1 || nah==0) {
nah=Math.round(30*Math.random())
}
top.frames.seznam.ot[nah]=1
lok='ot'+nah+'.htm'
location.replace(lok)
top.frames.seznam.porot++
}
}