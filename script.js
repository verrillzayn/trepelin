// navbar2
const tmbloff = document.querySelector('.navbar2').querySelectorAll('a');
console.log(tmbloff);

tmbloff.forEach((element) => {
  element.addEventListener('click', function () {
    tmbloff.forEach((tmbloff) => tmbloff.classList.remove('active'));

    this.classList.add('active');
  });
});

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

// content

const divcontent = document.querySelector('.s');
const datacontent1 = document.querySelector('[data-content1');
const datacontent2 = document.querySelector('[data-content2');
const datacontent3 = document.querySelector('[data-content3');
const datacontent4 = document.querySelector('[data-content4');
const datacontent5 = document.querySelector('[data-content5');
const datacontent6 = document.querySelector('[data-content6');
const datacontent7 = document.querySelector('[data-content7');
const datacontent8 = document.querySelector('[data-content8');
const datacontent9 = document.querySelector('[data-content9');
const datacontent10 = document.querySelector('[data-content10');
const datacontent11 = document.querySelector('[data-content11');

datacontent1.addEventListener('click', function () {
  divcontent.id = 'c1';
});
datacontent2.addEventListener('click', function () {
  divcontent.id = 'c2';
});
datacontent3.addEventListener('click', function () {
  divcontent.id = 'c3';
});
datacontent4.addEventListener('click', function () {
  divcontent.id = 'c4';
});
datacontent5.addEventListener('click', function () {
  divcontent.id = 'c5';
});
datacontent6.addEventListener('click', function () {
  divcontent.id = 'c6';
});
datacontent7.addEventListener('click', function () {
  divcontent.id = 'c7';
});
datacontent8.addEventListener('click', function () {
  divcontent.id = 'c8';
});
datacontent9.addEventListener('click', function () {
  divcontent.id = 'c9';
});
datacontent10.addEventListener('click', function () {
  divcontent.id = 'c10';
});
datacontent11.addEventListener('click', function () {
  divcontent.id = 'c11';
});
