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


// artist starts here js
const artistsInfo = document.querySelector('.artists');
const artPic = document.querySelector('.artPic');
const artNames = document.querySelector('.guestlists');
const placeofwork = document.querySelector('.placeofwork');
const works = document.querySelector('.works');


const artArr = [
    {
      artNames: 'Davido',
      artPic: 'photo/art/dav.png',
      placeofwork: 'CEO 30BG records Nigeria and worldwide',
      works: 'Have release more than 5 albums including IF, Aye and many more'
    },
    {
      artNames: 'Burna Boy',
      artPic: 'photo/art/burna.png',
      placeofwork: 'CEO 30BG records Nigeria and worldwide',
      works: 'Have release more than 5 albums including IF, Aye and many more'
    },
    {
      artNames: 'Wizkid',
      artPic: 'photo/art/wiz.png',
      placeofwork: 'CEO baHits records Nigeria and worldwide',
      works: 'Have release more than 5 albums including miss me, Holla at yo boy, Ojuelegbe and many more'
    },
    {
      artNames: 'Rihana',
      artPic: 'photo/art/rih.png',
      placeofwork: 'CEO RIRI Musics london and worldwide',
      works: 'Has over 4 albums in his name including Nice time, Diamond and many more'
    },
    {
      artNames: 'James Arthur',
      artPic: 'photo/art/james.png',
      placeofwork: 'CEO Arthur records Nigeria and worldwide',
      works: 'Have release more than 6 albums including , Miss home, love you and many more'
    },
    {
      artNames: 'Chris Brown',
      artPic: 'photo/art/cris.png',
      placeofwork: 'CEO DEbrowns Misic Washinton DC and worldwide',
      works: 'Has more than 3 albums in his name including GO low, With you, and more'
    }
  ];


  artArr.forEach((ele) => {
  artistsInfo.innerHTML += ` <div class="guestart-wrapper">
  <div class="art-imgs">
      <img class="artPic" src="${ele.artPic}" alt="">
  </div>

  
  <div class="guest-artist">
          <h4 class="guestlists">
          ${ele.artNames}
          </h4>
      
      <div class="achievments">
          <p class="placeofwork"> ${ele.placeofwork}</p>
          <p class="works">s${ele.works}</p>
      </div>
  </div>
</div>`})
  .join('');
