const jd = document.getElementById ('judul');
jd.innerHTML = 'Pancasila';

const text1 = document.getElementById ('text');
text1.innerHTML = 'Pancasila adalah pilar ideologis negara Indonesia. Nama ini terdiri dari dua kata dari bahasa Sanskerta: पञ्च "pañca" berarti lima dan शीला "śīla" berarti prinsip atau asas. Pancasila merupakan rumusan dan pedoman kehidupan berbangsa dan bernegara bagi seluruh rakyat Indonesia.';

const jd2 = document.getElementById('p1');
jd2.innerHTML= 'Pengertian';

const ev = document.getElementById ('p1');
function warna(){
    ev.style.backgroundColor = 'red';
}
ev.onclick = warna;
