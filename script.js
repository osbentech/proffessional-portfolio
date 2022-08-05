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

const artArr = [
  {
    artNames: 'Davido',
    artPic: 'photo/art/davi.png',
    placeofwork: 'CEO 30BG records Nigeria and worldwide',
    works: 'Have release more than 5 albums including IF, Aye and many more',
  },
  {
    artNames: 'Burna Boy',
    artPic: 'photo/art/burna.png',
    placeofwork: 'CEO 30BG records Nigeria and worldwide',
    works: 'old more than 12million copies in 1 single season and lots more',
  },
  {
    artNames: 'Wizkid',
    artPic: 'photo/art/wiz.png',
    placeofwork: 'CEO baHits records Nigeria and worldwide',
    works: 'ongs released includes miss me, Holla at yo boy, Ojuelegbe and many more',
  },
  {
    artNames: 'Rihana',
    artPic: 'photo/art/rih.png',
    placeofwork: 'CEO RIRI Musics london and worldwide',
    works: 'She has over 4 albums in her name including Nice time, Diamond and many more',
  },
  {
    artNames: 'James Arthur',
    artPic: 'photo/art/james.png',
    placeofwork: 'CEO jay-jay Musics Washinton DC and worldwide',
    works: 'he has over 4 albums in his name including Nice time, Diamond and many more',
  },
  {
    artNames: 'Cris Brown',
    artPic: 'photo/art/cris.png',
    placeofwork: 'CEO CRIS_BROWN Musics london and worldwide',
    works: 'has the fastest selling album CREED, which stayed in the top board for 3 consecutive weeks',
  },
];

artArr.forEach((ele) => {
  artistsInfo.innerHTML += ` <ul class="guestart-wrapper"> 
  <div class="over">
  <div class="ove-1"></div>
  <li class="art-imgs">
      <img class="artPic" src="${ele.artPic}" alt="">
  </li>

  <div class="over-2">
      <li class="guest-artist">
              <h4 class="guestlists">
                  ${ele.artNames}
              </h4>
          
          <div class="achievments">
              <p class="placeofwork"> ${ele.placeofwork}</p>
              <p class="works">${ele.works}</p>
          </div>
      </li>
  </div>
</div>
</ul>
  `
})
.join('');

// see more/less starts

