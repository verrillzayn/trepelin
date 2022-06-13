// search bar

const tmbloff = document.querySelector('.navbar2').querySelectorAll('a');
console.log(tmbloff);

tmbloff.forEach((element) => {
  element.addEventListener('click', function () {
    tmbloff.forEach((tmbloff) => tmbloff.classList.remove('active'));

    this.classList.add('active');
  });
});

// off canvas

// const tmbloc = document.querySelector('.Coc').querySelectorAll('button');
// console.log(tmbloc);

// tmbloc.forEach((element) => {
//   element.addEventListener('click', function () {
//     tmbloc.forEach((tmbloc) => tmbloc.classList.remove('aktip'));

//     this.classList.add('aktip');
//   });
// });

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

tmptdi.addEventListener('click', function () {
  srchdi.classList.add('actip');
});

tmptcari.addEventListener('click', function () {
  srchdi.classList.remove('actip');
});
