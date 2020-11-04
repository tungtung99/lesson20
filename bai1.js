var x = 0;
var arrayso= new Array(100);;
function add() {
    let so = document.getElementById('inputnhap').value;
    let ketqua = document.getElementById('ketqua');
    arrayso[x] = so;
    x++;
    document.getElementById('inputnhap').value = '';
    ketqua.innerText='';
    console.log(arrayso)
}
function output() {
    console.log(arrayso)
    let ketqua = document.getElementById('ketqua');
    for(let i=0;i<x;i++){
        ketqua.innerText += 'Element ' + i + '= ' + arrayso[i] + '\n'
    }
}