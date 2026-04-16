var bod=0, ner=0
odp=new Array(5);
odp[0]=new Array(12);
odp[1]=new Array(12);
odp[2]=new Array(16);
odp[3]=new Array(16);
odp[4]=new Array(8);
odp[0][0]=0
odp[0][3]=5
odp[0][6]=7
odp[0][9]=11
odp[1][0]=0
odp[1][3]=5
odp[1][6]=7
odp[1][9]=9
odp[2][0]=3
odp[2][4]=6
odp[2][8]=9
odp[2][12]=12
odp[3][0]=0
odp[3][1]=1
odp[3][2]=2
odp[3][3]=3
odp[3][4]=5
odp[3][5]=7
odp[3][6]=4
odp[3][7]=6
odp[3][8]=9
odp[3][9]=10
odp[3][10]=8
odp[3][11]=11
odp[3][12]=12
odp[3][13]=14
odp[3][14]=13
odp[3][15]=15
odp[4][0]=99
odp[4][1]=24
odp[4][2]=35
odp[4][3]=48
odp[4][4]=55
odp[4][5]=30
odp[4][6]=60
odp[4][7]=0

function kontrola(f,o) {
delka=odp[f].length
el=odp[f][o]
ell=odp[f][o+1]
obr='o'+f+o
if (f==4){
	if (document.forms[f].elements[o].value==el && document.forms[f].elements[o+1].value==ell)
		{
		bod++
		document.images[obr].src="../gif/ok.gif"
		}
	else document.images[obr].src="../gif/ko.gif"
	}
else{
	if (f==3){
elll=odp[f][o+2]
ellll=odp[f][o+3]
		if (document.forms[f].elements[el].checked==true && document.forms[f].elements[ell].checked==true && document.forms[f].elements[elll].checked==false && document.forms[f].elements[ellll].checked==false)
			{
			bod++
			document.images[obr].src="../gif/ok.gif"
			}
		else document.images[obr].src="../gif/ko.gif"
		}
	else{
		if (document.forms[f].elements[el].checked==true)
		{
		bod++
		document.images[obr].src="../gif/ok.gif"
		}
		else document.images[obr].src="../gif/ko.gif"
	         }	
       }
}



function test() {
ner=0
bod=0
for(cf=0; cf<=4; cf++){
if (cf>1 && cf<4) po=4
else po=3
if (cf==4) {
for (k=0; k<=7; k+=2){
if (document.forms[cf].elements[k].value=='' && document.forms[cf].elements[k+1].value=='') ner++
else kontrola(cf,k)
}
}
else {
for(j=0; j<(4*po); j+=po){
n=0
for(i=j; i<=j+po-1; i++){
if (document.forms[cf].elements[i].checked==false) n++
}
if (n==po) ner++
else kontrola(cf,j)
}
}
}
hodnoceni()
}


function hodnoceni(){
document.ovladac.bodu.value=bod
window.status=bod+' správných odpovìdí'
with(document.images.znamka){
if (bod==20) src="../gif/jedshv.gif"
if (bod==19) src="../gif/jednicka.gif"
if (bod==18) src="../gif/jedmin.gif"
if (bod<18) src="../gif/nic.gif"
document.vysledek.spravne.value=bod;
sp=20-(ner+bod)
document.vysledek.chybne.value=sp;
document.vysledek.neres.value=ner;
}
}
