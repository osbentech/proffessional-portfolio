// hamburger btn starts here
const menu = document.querySelector('.hamburger');
const menuList = document.querySelector('.t-menu');
const close = document.querySelector('.c-button');
const lists = document.querySelector('.tul');

menu.addEventListener('click', () => {
  menu.classList.toggle('active');
  menuList.classList.toggle('active');
});

close.addEventListener('click', () => {
  menuList.classList.remove('active');
});

lists.addEventListener('click', () => {
  menuList.classList.remove('active');
});

// artist starts here
const artistsInfo = ducument.querySelector('.artists');
const artPic = document.querySelector('.artPic');
const artNames = document.querySelector('.guestlists');
const placeofwork = document.querySelector('.placeofwork');
const works = document.querySelector('.works');


const artArr = [
    {
      id: 1,
      artNames: 'Davido',
      artPic: 'photo/artists/davido1.jpg',
      placeofwork: 'CEO 30BG records Nigeria and worldwide',
      works: 'Have release more than 5 albums including IF, Aye and many more'
    },
    {
      id: 2,
      artNames: 'Davido',
      artPic: 'photo/artists/davido.jpg',
      placeofwork: 'CEO 30BG records Nigeria and worldwide',
      works: 'Have release more than 5 albums including IF, Aye and many more'
    },
    {
      id: 3,
      artNames: 'Wizkid',
      artPic: 'photo/artists/wizkid.jpg',
      placeofwork: 'CEO baHits records Nigeria and worldwide',
      works: 'Have release more than 5 albums including miss me, Holla at yo boy, Ojuelegbe and many more'
    },
    {
      id: 4,
      artNames: 'Rihana',
      artPic: 'photo/artists/rihana.jpg',
      placeofwork: 'CEO RIRI Musics london and worldwide',
      works: 'Has over 4 albums in his name including Nice time, Diamond and many more'
    },
    {
      id: 5,
      artNames: 'James Arthur',
      artPic: 'photo/artists/james.jpg',
      placeofwork: 'CEO Arthur records Nigeria and worldwide',
      works: 'Have release more than 6 albums including , Miss home, love you and many more'
    },
    {
      id: 6,
      artNames: 'Chris Brown',
      artPic: 'photo/artists/cris-brown.jpg',
      placeofwork: 'CEO DEbrowns Misic Washinton DC and worldwide',
      works: 'Has more than 3 albums in his name including GO low, With you, and more'
    }
  ];
  function artFill(arr, num) {
    const art = arr[num];
    guestlists.textContent = art.artNames;
    artPic.src = art.artPic;
    works.innerHTML = art.works;
    placeofwork.innerHTML = art.placeofwork;
  }




  // popList.innerHTML = '';
  //   proj.pTechs.forEach((item) => {
  //     const pl = document.createElement('li');
  //     pl.innerHTML = item;
  //     pl.classList.add('pplist');
  //     popList.append(pl);
  //   });