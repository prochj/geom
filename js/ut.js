var bod=0 , spatne=0, ner=0

function neres() {
with (document.forms[1]) {
if (elements[0].value=='') {
ner+=1; document.images.a2.src="../gif/oo.gif"
}
if (elements[3].value=='') {
ner+=1; document.images.c2.src="../gif/oo.gif"
}
if (elements[4].value=='' && elements[5].value=='') {
ner+=1; document.images.d2.src="../gif/oo.gif"
}
if (elements[1].value=='' && elements[2].value=='') {
ner+=1; document.images.b2.src="../gif/oo.gif"
}
}
with (document.forms[3]) {
for (i=0; i<=6; i+=2){
if (elements[i].value=='' && elements[i+1].value=='') {
ner+=1; 
if (i==0) document.images.a4.src="../gif/oo.gif"
if (i==2) document.images.b4.src="../gif/oo.gif"
if (i==4) document.images.c4.src="../gif/oo.gif"
if (i==6) document.images.d4.src="../gif/oo.gif"
}
}
}
with (document.forms[5]) {
if (elements[0].value=='' && elements[1].value=='') {
ner+=1; document.images.a6.src="../gif/oo.gif"
}
if (elements[2].value=='' && elements[3].value=='') {
ner+=1; document.images.b6.src="../gif/oo.gif"
}
}
}
function ceck(fo) {
var nnr=0
if (fo==4) {
pricti=7; incc=8
}
else {
pricti=3; incc=4
}
for (i=0; i<=12;i+=incc){
var f=0
for (j=i; j<=i+pricti; j++) {
if (document.forms[fo].elements[j].checked==false) f+=1
if (f==incc) {
ner+=1;
if (fo==0) {
if (i==0) document.images.a1.src="../gif/oo.gif"  ;nnr+=1
if (i==4) document.images.b1.src="../gif/oo.gif"  ;nnr+=1
if (i==8) document.images.c1.src="../gif/oo.gif"  ;nnr+=1
if (i==12) document.images.d1.src="../gif/oo.gif"  ;nnr+=1
}
if (fo==2) {
if (i==0) document.images.a3.src="../gif/oo.gif"  ;nnr+=1
if (i==4) document.images.b3.src="../gif/oo.gif"  ;nnr+=1
if (i==8) document.images.c3.src="../gif/oo.gif"  ;nnr+=1
if (i==12) document.images.d3.src="../gif/oo.gif"  ;nnr+=1
}
if (fo==4) {
if (i==0) document.images.a5.src="../gif/oo.gif"  ;nnr+=1
if (i==8) document.images.b5.src="../gif/oo.gif"  ;nnr+=1
}

}
}
}
}


function test() {
bod=0 
spatne=0
ner=0
zac=0
roz=0
with (document.forms[1]) {
if (elements[0].value==600) {
bod+=1; document.images.a2.src="../gif/ok.gif"
}
else {
spatne+=1; document.images.a2.src="../gif/ko.gif"
}
if (elements[3].value==130) {
bod+=1; document.images.c2.src="../gif/ok.gif"
}
else {
spatne+=1; document.images.c2.src="../gif/ko.gif"
}
if (elements[1].value==2 && elements[2].value==0) {
bod+=1; document.images.b2.src="../gif/ok.gif"
}
else {
spatne+=1; document.images.b2.src="../gif/ko.gif"
}
if (elements[4].value==2 && elements[5].value==6) {
bod+=1; document.images.d2.src="../gif/ok.gif"
}
else {
spatne+=1; document.images.d2.src="../gif/ko.gif"
}
}

with (document.forms[0]) {
if (elements[1].checked==true) {
bod+=1; document.images.a1.src="../gif/ok.gif"
}
else {
spatne+=1; document.images.a1.src="../gif/ko.gif"
}
if (elements[6].checked==true) {
bod+=1; document.images.b1.src="../gif/ok.gif"
}
else {
spatne+=1; document.images.b1.src="../gif/ko.gif"
}
if (elements[11].checked==true) {
bod+=1; document.images.c1.src="../gif/ok.gif"
}
else {
spatne+=1; document.images.c1.src="../gif/ko.gif"
}
if (elements[12].checked==true) {
bod+=1; document.images.d1.src="../gif/ok.gif"
}
else {
spatne+=1; document.images.d1.src="../gif/ko.gif"
}
ceck(0)
}

with (document.forms[2]) {
if (elements[3].checked==true) {
bod+=1; document.images.a3.src="../gif/ok.gif"
}
else {
spatne+=1; document.images.a3.src="../gif/ko.gif"
}
if (elements[4].checked==true) {
bod+=1; document.images.b3.src="../gif/ok.gif"
}
else {
spatne+=1; document.images.b3.src="../gif/ko.gif"
}
if (elements[9].checked==true) {
bod+=1; document.images.c3.src="../gif/ok.gif"
}
else {
spatne+=1; document.images.c3.src="../gif/ko.gif"
}
if (elements[14].checked==true) {
bod+=1; document.images.d3.src="../gif/ok.gif"
}
else {
spatne+=1; document.images.d3.src="../gif/ko.gif"
}
}
ceck(2)


with (document.forms[4]) {
if (elements[2].checked==true) zac+=1
if (elements[5].checked==true) zac+=1
if (elements[7].checked==true) zac+=1
if (elements[4].checked==true) zac-=1
if (elements[6].checked==true) zac-=1
if (zac==3) {
bod+=1
document.images.a5.src="../gif/ok.gif"
}
else {
spatne+=1
document.images.a5.src="../gif/ko.gif"
}

if (elements[8].checked==true) roz+=1
if (elements[14].checked==true) roz+=1
if (elements[15].checked==true) roz+=1
if (elements[12].checked==true) roz-=1
if (elements[13].checked==true) roz-=1

if (roz==3) {
document.images.b5.src="../gif/ok.gif"
bod+=1
}
else{
document.images.b5.src="../gif/ko.gif"
spatne+=1
}
}
ceck(4)
with (document.forms[3]) {
if (elements[0].value==54 && elements[1].value==10) {
bod+=1; document.images.a4.src="../gif/ok.gif"
}
else {
spatne+=1; document.images.a4.src="../gif/ko.gif"
}
if (elements[2].value==50 && elements[3].value==0) {
bod+=1; document.images.b4.src="../gif/ok.gif"
}
else {
spatne+=1; document.images.b4.src="../gif/ko.gif"
}
if (elements[4].value==174 && elements[5].value==24) {
bod+=1; document.images.c4.src="../gif/ok.gif"
}
else {
spatne+=1; document.images.c4.src="../gif/ko.gif"
}
if (elements[6].value==37 && elements[7].value==36) {
bod+=1; document.images.d4.src="../gif/ok.gif"
}
else {
spatne+=1; document.images.d4.src="../gif/ko.gif"
}
}

with (document.forms[5]) {
if (elements[0].value==116 && elements[1].value==40) {
bod+=1; document.images.a6.src="../gif/ok.gif"
}
else {
spatne+=1; document.images.a6.src="../gif/ko.gif"
}
if (elements[2].value==135 && elements[3].value==54) {
bod+=1; document.images.b6.src="../gif/ok.gif"
}
else {
spatne+=1; document.images.b6.src="../gif/ko.gif"
}
}
neres()
hodnoceni(bod)
}

function hodnoceni(b){
document.ovladac.bodu.value=b
window.status=b+' správných odpovìdí'
with(document.images.znamka){
if (b==20) src="../gif/jedshv.gif"
if (b==19) src="../gif/jednicka.gif"
if (b==18) src="../gif/jedmin.gif"
if (b<18) src="../gif/nic.gif"
document.vysledek.spravne.value=bod;
sp=spatne-ner
document.vysledek.chybne.value=sp;
document.vysledek.neres.value=ner;
}
}