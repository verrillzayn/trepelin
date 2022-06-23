// navbar 1.2

const tmblN1ke2 = document.querySelector('#searchbtn');
const nav1ke2 = document.querySelector('#NAV');

tmblN1ke2.addEventListener('click', function () {
  nav1ke2.classList.add('n1-2');
});

const tmblttp = document.querySelector('#tmblttp');

tmblttp.addEventListener('click', function () {
  nav1ke2.classList.remove('n1-2');
});

const tmbloc = document.querySelector('.Coc').querySelectorAll('button');
console.log(tmbloc);

//search bar nav 1.2

tmbloc.forEach((element) => {
  element.addEventListener('click', function () {
    tmbloc.forEach((tmbloc) => tmbloc.classList.remove('aktip'));

    this.classList.add('aktip');
  });
});

const tmptdi = document.querySelector('#tmptdi');
const srchdi = document.querySelector('.srch1');
const tmptcari = document.querySelector('#tmptcari');
const tutup = document.querySelector('#tmblttp');

tmptdi.addEventListener('click', function () {
  srchdi.classList.add('actip');
});

tmptcari.addEventListener('click', function () {
  srchdi.classList.remove('actip');
});

tutup.addEventListener('click', function () {
  nav1ke2.classList.remove('n1-2');
});
// end navbar 1.2

// cuaca
