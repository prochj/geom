var b=0
var s=0
var res=0
var ner=0

sa = new Array(4)
sb = new Array(4)
sc = new Array(4)
sd = new Array(4)
st = new Array(4)
ts = new Array(4)
tts = new Array(8)
shc= new Array(4)


shc[1]=3; shc[2]=1; shc[3]=6; shc[4]=5
st[1]=0; st[2]=3; st[3]=4; st[4]=7
ts[1]=1; ts[2]=2; ts[3]=2; ts[4]=3

function vyber(obr,cis) {
for(i=1; i<=4; i++){
if (obr=='sa') sa[i]=0
if (obr=='sb') sb[i]=0
if (obr=='sc') sc[i]=0
if (obr=='sd') sd[i]=0
normal='../gif/'+obr+i+'.gif'
if(document.images[obr+i].src!=normal) document.images[obr+i].src=normal
}
tucny='../gif/'+obr+cis+'t.gif'
document.images[obr+cis].src=tucny
if (obr=='sa') sa[cis]=1
if (obr=='sb') sb[cis]=1
if (obr=='sc') sc[cis]=1
if (obr=='sd') sd[cis]=1
}

function vyber1(cislo) {
norm='../gif/tts'+cislo+'.gif'
tuc='../gif/tts'+cislo+'t.gif'
obraz='tts'+cislo
if (tts[cislo]==1) 
{
tts[cislo]=0
document.images[obraz].src=norm
}
else {
tts[cislo]=1
document.images[obraz].src=tuc
}
}

function test(){
res=0
ner= 0
b=0
s=0
for(i=1; i<=4; i++) {
if (sa[i]==1) {
res=1
if(i==3) {
document.images.sa.src="../gif/ok.gif"
b++
}
else {
s++
document.images.sa.src="../gif/ko.gif"
}
}
}
if (res!=1) ner++
res=0
for(i=1; i<=4; i++) {
if (sb[i]==1) {
res=1
if(i==1) {
document.images.sb.src="../gif/ok.gif"
b++
}
else {
s++
document.images.sb.src="../gif/ko.gif"
}
}
}
if (res!=1) ner++
res=0
for(i=1; i<=4; i++) {
if (sc[i]==1) {
res=1
if(i==3) {
document.images.sc.src="../gif/ok.gif"
b++
}
else {
s++
document.images.sc.src="../gif/ko.gif"
}
}
}
if (res!=1) ner++
res=0
for(i=1; i<=4; i++) {
if (sd[i]==1) {
res=1
if(i==4) {
document.images.sd.src="../gif/ok.gif"
b++
}
else {
s++
document.images.sd.src="../gif/ko.gif"
}
}
}
if (res!=1) ner++

//ot2

for(i=1; i<=4; i++){
el='shc'+i
if (document.ot2.elements[el].value==''){
document.images[el].src="../gif/oo.gif"
ner++
}
else{
if (document.ot2.elements[el].value==shc[i]) {
document.images[el].src="../gif/ok.gif"
b++
}
else {
document.images[el].src="../gif/ko.gif"
s++
}
}
}

//ot3

for (i=1; i<=4; i++) {
if (document.ot3.elements[2*i-1].checked==false && document.ot3.elements[2*i-2].checked==false) ner++
else {
if (document.ot3.elements[st[i]].checked==true) {
document.images['st'+i].src="../gif/ok.gif" 
b++
}
else {
document.images['st'+i].src="../gif/ko.gif"
s++
}
}
}

//ot4

for(i=1; i<=4; i++){
el='ts'+i
if (document.ot4.elements[el].value==''){
document.images[el].src="../gif/oo.gif"
ner++
}
else{
if (document.ot4.elements[el].value==ts[i]) {
document.images[el].src="../gif/ok.gif"
b++
}
else {
document.images[el].src="../gif/ko.gif"
s++
}
}
}

//ot5

for (i=1; i<=4; i++) {
obr='tt'+i
if (tts[2*i]!=1 && tts[2*i-1]!=1) {
ner++
document.images[obr].src="../gif/oo.gif"
}
else ot5(i)
}
hodnoceni()
}

function ot5(i) {
if (i==1 || i==4) {
if (tts[2*i]==1 && tts[2*i-1]!=1){
document.images[obr].src="../gif/ok.gif"
b++
}
else {
document.images[obr].src="../gif/ko.gif"
s++
}
}
if (i==2) {
if (tts[2*i]!=1 && tts[2*i-1]==1){
document.images[obr].src="../gif/ok.gif"
b++
}
else {
document.images[obr].src="../gif/ko.gif"
s++
}
}

if (i==3) {
if (tts[2*i]==1 && tts[2*i-1]==1){
document.images[obr].src="../gif/ok.gif"
b++
}
else {
document.images[obr].src="../gif/ko.gif"
s++
}
}
}

function hodnoceni(){
document.ovladac.bodu.value=b
window.status=b+' správných odpovìdí'
with(document.images.znamka){
if (b==20) src="../gif/jedshv.gif"
if (b==19) src="../gif/jednicka.gif"
if (b==18) src="../gif/jedmin.gif"
if (b<18) src="../gif/nic.gif"
document.vysledek.spravne.value=b;
document.vysledek.chybne.value=s;
document.vysledek.neres.value=ner;
}
}




