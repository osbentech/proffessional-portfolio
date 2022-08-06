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
const artistsInfo = document.querySelector('.see1');

const artArr = [
  // {
  //   artNames: 'Davido',
  //   artPic: 'photo/art/davi.png',
  //   placeofwork: 'CEO 30BG records Nigeria and worldwide',
  //   works: 'Have release more than 5 albums including IF, Aye and many more',
  // },
  // {
  //   artNames: 'Burna Boy',
  //   artPic: 'photo/art/burna.png',
  //   placeofwork: 'CEO 30BG records Nigeria and worldwide',
  //   works: 'old more than 12million copies in 1 single season and lots more',
  // },
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

// see more/less starts
const more = document.querySelector('#more');
const less = document.querySelector('#less');
const see1 = document.querySelector('.see1');

more.addEventListener('click', () => {
  see1.classList.toggle('active')

  less.classList.add('active')
  more.style.display = "none";
})

less.addEventListener('click', () => {
  see1.classList.toggle('active')
  more.style.display = "flex";
  less.classList.remove('active')
})

artArr.forEach((ele) => {
  artistsInfo.innerHTML += ` <div class="guestart-wrapper"> 
  <div class="over">
  <div class="ove-1"></div>
  <div class="art-imgs">
      <img class="artPic" src="${ele.artPic}" alt="">
  </div>

  <div class="over-2">
      <div class="guest-artist">
              <h4 class="guestlists">
                  ${ele.artNames}
              </h4>
          
          <div class="achievments">
              <p class="placeofwork"> ${ele.placeofwork}</p>
              <p class="works">${ele.works}</p>
          </div>
      </div>
  </div>
</div>
</div>
  `;
})
  .join('');
