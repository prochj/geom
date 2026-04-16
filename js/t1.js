var bod
var csh=0
var bsh=0
var por
var sos=0
var bos=0
var bhl=0
var shl=0
var zaskrt=0
pr = new Array(3)
pr[0] = new Array(4)
pr[1] = new Array(8)
pr[2] = new Array(8)
pr[0][0] ='120'; pr[0][1] ='606'; pr[0][2] ='30'; pr[0][3] ='320'
pr[1][0] ='1'; pr[1][1] ='40'; pr[1][2] ='6'; pr[1][3] =0; pr[1][4] ='16'; pr[1][5] ='40'; pr[1][6] ='2'; pr[1][7] =5
pr[2][0] =0; pr[2][1] ='24'; pr[2][2] ='20'; pr[2][3] ='15'; pr[2][4] ='12'; pr[2][5] ='18'; pr[2][6] ='92'; pr[2][7] ='54'

op = new Array(3)
op[0] = new Array(4)
op[1] = new Array(8)
op[2] = new Array(8)
op[0][0] ='155'; op[0][1] ='360'; op[0][2] ='50'; op[0][3] ='-215'; 
op[1][0] ='59'; op[1][1] ='22'; op[1][2] ='71'; op[1][3] ='5'; op[1][4] ='41'; op[1][5] ='50'; op[1][6] ='32'; op[1][7] ='44'
op[2][0] ='12'; op[2][1] ='21'; op[2][2] ='37'; op[2][3] ='100'; op[2][4] ='236'; op[2][5] ='25'; op[2][6] ='20'; op[2][7] ='85'

sh = new Array(26)
sh[1]=1;sh[4]=1;sh[6]=1;sh[7]=1;sh[10]=1;sh[12]=1;sh[13]=1;sh[16]=1;sh[17]=1;sh[20]=1;sh[21]=1;sh[23]=1;sh[25]=1

hot = new Array(13)

os = new Array(26)
os[1]=1;os[3]=1;os[6]=1;os[8]=1;os[10]=1;os[11]=1;

hoto = new Array(6)

vl = new Array(10)
vl[0]=1;vl[1]=4;vl[2]=4;vl[3]=2;vl[4]=4;vl[5]=3;vl[6]=4;vl[7]=2;vl[8]=3;vl[9]=3;


function hotovo1(odkud,cislo){
bod=0
var n = 0
if (cislo>0) skok=2
else skok =1
if (odkud=='op') {
	for (j=0; j<op[cislo].length; j+=skok){
	if (document.forms[cislo].elements[j].value=='' && document.forms[cislo].elements[j+skok-1].value=='') n++
	else {
if (document.forms[cislo].elements[j].value==op[cislo][j] && document.forms[cislo].elements[j+skok-1].value==op[cislo][j+skok-1]) bod++
else{ 
	document.forms[cislo].elements[j].value='' 
	document.forms[cislo].elements[j+skok-1].value=''
	       }	        
                   }
				   	 }
if (n==op[cislo].length/skok) nereseno()
else hodnoceni(bod)
                        }
if (odkud=='pr') {
	for (j=0; j<pr[cislo].length; j+=skok){
	if (document.forms[cislo].elements[j].value=='' && document.forms[cislo].elements[j+skok-1].value=='') n++
	else {
	if (document.forms[cislo].elements[j].value==pr[cislo][j] && document.forms[cislo].elements[j+skok-1].value==pr[cislo][j+skok-1]) bod++
	else{ 
	document.forms[cislo].elements[j].value='' 
	document.forms[cislo].elements[j+skok-1].value=''
	       }
	       }
              }
if (n==pr[cislo].length/skok) nereseno()
else hodnoceni(bod)
         }

if (odkud=='sh') {
por = Math.round(cislo/2)
if (hot[por]==1) {
if (sh[cislo]==1) {
alert('Správnì')
}
else {
alert('Chybnì')
}
}
else {
hot[por]=1
if (sh[cislo]==1) {
alert('Správnì')
bsh++
document.znamka.spravne.value=bsh
}
else {
alert('Chybnì')
csh++
document.znamka.chybne.value=csh
document.znamka.nereseno.value=13-(bsh+csh)
}
document.znamka.nereseno.value=13-(bsh+csh)
}
}

if (odkud=='os') {
por = Math.round(cislo/2)
if (hoto[por]==1) {
if (os[cislo]==1) {
alert('Správnì')
}
else {
alert('Chybnì')
}
}
else {
hoto[por]=1
if (os[cislo]==1) {
alert('Správnì')
bos++
document.znamka.spravne.value=bos
}
else {
alert('Chybnì')
sos++
document.znamka.chybne.value=sos
document.znamka.nereseno.value=6-(bos+sos)
}
document.znamka.nereseno.value=6-(bos+sos)
}
}

}


function nereseno() {
alert ('Nic není vyplnìno')
}

function vynuluj(kterou) {
if (kterou=='sh') {
bsh=0
document.znamka.spravne.value=''
csh=0
document.znamka.chybne.value=''
for (i=0;i<=25;i++){
document.forms[0].elements[i].checked=false
}
}
if (kterou=='os') {
bos=0
document.znamka.spravne.value=''
sos=0
document.znamka.chybne.value=''
for (i=0;i<=11;i++){
document.forms[0].elements[i].checked=false
}
}
if (kterou=='vl') {
bhl=0
shl=0
for (f=0; f<=9;f++) {
document.forms[f].elements[0].checked=false
document.forms[f].elements[1].checked=false
document.forms[f].elements[2].checked=false
document.znamka.spravne.value=''
document.znamka.chybne.value=''
document.znamka.nereseno.value=''
}
}
}
 
function hodnoceni(bod) {
if (bod==0) alert('Všechno špatnì')
else {
if (bod==4) alert('* * * Výbornì * * *')
else {
if (bod==1) alert(bod+' správná odpovìï')
else alert(bod+' správné odpovìdi')
}
}
}

function hotovo2() {
bhl=0
shl=0
for (f=0; f<=9;f++) {
zaskrt = 0
if (document.forms[f].elements[0].checked==true) zaskrt+=1 
if (document.forms[f].elements[1].checked==true) zaskrt+=2
if (document.forms[f].elements[2].checked==true) zaskrt+=4
if (zaskrt==0) shl++
else {
if (zaskrt==vl[f]) bhl++
else {
g=f+1
obrazek='../gif/vl'+g+'sp.gif'
document.images[g].src=obrazek
}
}
}
document.znamka.spravne.value=bhl
document.znamka.chybne.value=10-(bhl+shl)
document.znamka.nereseno.value=shl
}

function vymaz(f){
g=f-1
obrazek='../gif/vl'+f+'.gif'
document.forms[g].elements[0].checked=false
document.forms[g].elements[1].checked=false
document.images[f].src=obrazek
}

function obr(otaz) {
f=otaz-1
document.forms[f].elements[2].checked=false
if (document.forms[f].elements[0].checked==true){
if (document.forms[f].elements[1].checked==true) obrazek ='../gif/vl'+otaz+'ob.gif'
else obrazek ='../gif/vl'+otaz+'sv.gif'
}
else {
if (document.forms[f].elements[1].checked==true) obrazek ='../gif/vl'+otaz+'vo.gif'
else obrazek ='../gif/vl'+otaz+'.gif'
}
document.images[otaz].src=obrazek
}
