// DANH SÁCH PHÁT NGẪU NHIÊN KHÔNG TRÙNG SONG CHO BẠN NÀO CẦN
//             playRandomSong: function () {
//                 let newIndex;
//                 newIndex = Math.floor(Math.random() * this.songs.length);
                
//                 if(count >0) {
//                     do {
//                         newIndex = Math.floor(Math.random() * this.songs.length);
//                         var isCheck= arrayTemp.includes(newIndex);
//                     }
//                     while(isCheck == true)
//                 }
//                 // Test
//                 //console.log(count,newIndex);
//                 //console.log(arrayTemp);

//                 arrayTemp[count]=newIndex;

//                 this.currentIndex = newIndex;
//                 this.loadCurrentSong();
//                 if(count == this.songs.length-1)
//                 {
//                     arrayTemp=[];
//                     count=-1;
//                 }
//                 count++;
//                 // Biến count với biến arrayTemp mình khởi tạo bên trên app
//                 // var count =0;
//                 // var arrayTemp = [];
                
//             }

//active song k can render
// if ($('.song.active')) 
//     {
//       $('.song.active').classList.remove('active');
//     }
// $$('.song')[app.currentIndex].classList.add('active')

// scroll Active song
// scrollToActiveSong: function() {
//     setTimeout(() => {
//       $('.song.active').scrollIntoView({
//         behavior: 'smooth',
//         block: 'end',
//       });
//     }, 300);
//   }

// Chia sẻ cho AE code end xong random ko bị trùng

// endRandomSongs: function(){
//         app.arrSongs.push(this.currentIndex);
//         if(this.arrSongs.length === this.songs.length){
//             this.arrSongs = [];
//         }
//         let newIndex1;
//         do{
//             newIndex1 = Math.floor(Math.random() * this.songs.length);
//         }while(app.arrSongs.includes(newIndex1));
//         this.currentIndex = newIndex1;
//     },
//  audio.onended = function(){
//             if(app.isRandom){
//                 app.endRandomSongs();
//                 app.loadCurrentSong();
//                 audio.play();
//             }else{
//                 app.nextSongs();
//                 audio.play();
//             }

// Lắng nghe hành vi click vào playlist

// render lại listsong khi chuyển bài mới nhưng vẫn active được song
// activeSong: function(){
//     var loopSongs = $$('.song');
//     for (song of loopSongs){
//             song.classList.remove('active')
//     }
//     const activeSong = loopSongs[this.currentIndex]
//     activeSong.classList.add('active')
// },


// Complete code
// const $ = document.querySelector.bind(document);
// const $$ = document.querySelector.bind(document);

// const PLAYER_STORAGE_KEY = "F8_PLAYER";

// const heading = $("header h2");
// const cdThumb = $(".cd-thumb");
// const cd = $(".cd");
// const playBtn = $(".btn-toggle-play");
// // console.log(btnPlay)
// const audio = $("#audio");
// const player = $(".player");
// const progress = $("#progress");
// const nextBtn = $(".btn-next");
// const prevBtn = $(".btn-prev");
// const randomBtn = $(".btn-random");
// const repeatBtn = $(".btn-repeat");
// const playList = $(".playlist");

// const app = {
//   currentIndex: 0,
//   isPlaying: false,
//   isRandom: false,
//   isRepeat: false,
//   config: JSON.parse(localStorage.getItem(PLAYER_STORAGE_KEY)) || {},
//   songs: [
//     {
//       name: "Click Pow Get Down",
//       singer: "Raftaar x Fortnite",
//       path: "./mp3/song1.mp3",
//       image: "https://i.ytimg.com/vi/jTLhQf5KJSc/maxresdefault.jpg",
//     },
//     {
//       name: "Tu Phir Se Aana",
//       singer: "Raftaar x Salim Merchant x Karma",
//       path: "./mp3/song2.mp3",
//       image:
//         "https://1.bp.blogspot.com/-kX21dGUuTdM/X85ij1SBeEI/AAAAAAAAKK4/feboCtDKkls19cZw3glZWRdJ6J8alCm-gCNcBGAsYHQ/s16000/Tu%2BAana%2BPhir%2BSe%2BRap%2BSong%2BLyrics%2BBy%2BRaftaar.jpg",
//     },
//     {
//       name: "Naachne Ka Shaunq",
//       singer: "Raftaar x Brobha V",
//       path: "https://zingmp3.vn/tim-kiem/tat-ca?q=nevada",
//       image: "https://i.ytimg.com/vi/QvswgfLDuPg/maxresdefault.jpg",
//     },
//     {
//       name: "Mantoiyat",
//       singer: "Raftaar x Nawazuddin Siddiqui",
//       path: "https://zingmp3.vn/tim-kiem/tat-ca?q=nevada",
//       image:
//         "https://a10.gaanacdn.com/images/song/39/24225939/crop_480x480_1536749130.jpg",
//     },
//     {
//       name: "Aage Chal",
//       singer: "Raftaar",
//       path: "https://zingmp3.vn/tim-kiem/tat-ca?q=nevada0",
//       image:
//         "https://a10.gaanacdn.com/images/albums/72/3019572/crop_480x480_3019572.jpg",
//     },
//     {
//       name: "Damn",
//       singer: "Raftaar x kr$na",
//       path: "https://zingmp3.vn/tim-kiem/tat-ca?q=nevada3",
//       image:
//         "https://filmisongs.xyz/wp-content/uploads/2020/07/Damn-Song-Raftaar-KrNa.jpg",
//     },
//     {
//       name: "Feeling You",
//       singer: "Raftaar x Harjas",
//       path: "https://zingmp3.vn/tim-kiem/tat-ca?q=nevada",
//       image:
//         "https://a10.gaanacdn.com/gn_img/albums/YoEWlabzXB/oEWlj5gYKz/size_xxl_1586752323.webp",
//     },
//   ],
//   setConfig(key, value) {
//     this.config[key] = value;
//     localStorage.setItem(PLAYER_STORAGE_KEY, JSON.stringify(this.config));
//   },
//   defineProperties() {
//     Object.defineProperty(this, "currentSong", {
//       get: function () {
//         return this.songs[this.currentIndex];
//       },
//     });
//   },
//   loadCurrentSong() {
//     heading.textContent = this.currentSong.name;
//     cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`;
//     audio.src = this.currentSong.path;
//   },
//   loadConfig() {
//     this.isRandom = this.config.isRandom;
//     this.isRepeat = this.config.isRepeat;
//   },
//   nextSong() {
//     this.currentIndex++;
//     if (this.currentIndex > this.songs.length - 1) {
//       this.currentIndex = 0;
//     }
//     this.loadCurrentSong();
//   },
//   prevSong() {
//     this.currentIndex--;
//     if (this.currentIndex < 0) {
//       this.currentIndex = this.songs.length - 1;
//     }
//     this.loadCurrentSong();
//   },
//   playRandomSong() {
//     let newIndex;
//     do {
//       newIndex = Math.floor(Math.random() * this.songs.length);
//     } while (this.currentIndex === newIndex);

//     this.currentIndex = newIndex;
//     this.loadCurrentSong();
//   },
//   scrollToActiveSong() {
//     setTimeout(() => {
//       $(".song.active").scrollIntoView({
//         behavior: "smooth",
//         block: "nearest",
//       });
//     }, 300);
//   },
//   handleEvents() {
//     const _this = this; // phải gán làm thế này vì nếu để this trong sự kiện onclick nó sẽ hiểu this là của element playBtn
//     playBtn.onclick = function () {
//       if (_this.isPlaying) {
//         audio.pause();
//       } else {
//         audio.play();
//       }
//     };

//     // Khi song được play
//     audio.onplay = function () {
//       _this.isPlaying = true;
//       player.classList.add("playing");
//       cdThumbAnimate.play();
//     };

//     // Khi song bị pause
//     audio.onpause = function () {
//       _this.isPlaying = false;
//       player.classList.remove("playing");
//       cdThumbAnimate.pause();
//     };

//     const cdThumbAnimate = cdThumb.animate(
//       [
//         {
//           transform: "rotate(360deg)",
//         },
//       ],
//       {
//         duration: 10000,
//         iterations: Infinity,
//       }
//     );
//     // console.log(cdThumbAnimate);
//     cdThumbAnimate.pause();

//     // Khi tiến độ bài hát thay đổi
//     audio.ontimeupdate = function () {
//       if (audio.duration) {
//         const progressPercent = Math.floor(
//           (this.currentTime / this.duration) * 100
//         );
//         progress.value = progressPercent;
//       }
//     };

//     // Khi next song
//     nextBtn.onclick = function () {
//       if (_this.isRandom) {
//         // nếu đã click nút random
//         _this.playRandomSong();
//       } else {
//         _this.nextSong();
//       }
//       audio.play();
//       _this.render();
//       _this.scrollToActiveSong();
//     };

//     // Khi prev song
//     prevBtn.onclick = function () {
//       if (_this.isRandom) {
//         // nếu đã click nút random
//         _this.playRandomSong();
//       } else {
//         _this.prevSong();
//       }
//       audio.play();
//       _this.render();
//     };

//     // Xử lý bật/ tắt random song
//     randomBtn.onclick = function (e) {
//       _this.isRandom = !_this.isRandom; // logic đảo ngược lại chức năng nút random
//       _this.setConfig("isRandom", _this.isRandom);
//       this.classList.toggle("active", _this.isRandom);
//     };

//     // Xử lý repeat song
//     repeatBtn.onclick = function () {
//       _this.isRepeat = !_this.isRepeat;
//       _this.setConfig("isRepeat", _this.isRepeat);
//       this.classList.toggle("active", _this.isRepeat);
//     };

//     // Xử lý next song khi audio ended
//     audio.onended = function () {
//       if (_this.isRepeat) {
//         audio.play();
//       } else {
//         nextBtn.click(); // pthuc click là tự bấm click vào nút next
//       }
//     };

//     // Lắng nghe hành vi click vào playlist
//     playList.onclick = function (e) {
//       const songNode = e.target.closest(".song:not(.active)");
//       // console.log(e.target.closest('.song:not(.active)'))  // khi click vào element có class .song mà k có class active thì sẽ
//       if (songNode || e.target.closest("option")) {
//         // xử lý khi click vào song
//         if (songNode) {
//           // console.log(songNode.getAttribute("data-index"))
//           console.log(songNode.dataset.index);
//           _this.currentIndex = Number(songNode.dataset.index); // convert to number
//           _this.loadCurrentSong();
//           _this.render();
//           audio.play();
//         }

//         // Xử lý khi click vào song option
//         if (e.target.closest(".option")) {
//         }
//       }
//     };

//     // Xử lý khi tour song
//     progress.oninput = function (e) {
//       // console.log(e.target.value / 100 * audio.duration);
//       const seekTime = (e.target.value / 100) * audio.duration;
//       audio.currentTime = seekTime;
//     };

//     const cdWidth = cd.offsetWidth;

//     document.onscroll = function () {
//       const scrollTop =
//         window.scrollY || document.documentElement.scrollTop;
//       const newCdWidth = cdWidth - scrollTop;
//       // console.log(newCdWidth);

//       cd.style.width = newCdWidth > 0 ? newCdWidth + "px" : 0;
//       cd.style.opacity = newCdWidth / scrollTop;
//     };
//   },

//   render() {
//     var htmls = this.songs.map((song, index) => {
//       return `
//       <div class="song ${
//         index === this.currentIndex ? "active" : ""
//       }" data-index="${index}">
//         <div
//           class="thumb"
//           style="
//                     background-image: url('${song.image}');
//                     "
//         ></div>
//         <div class="body">
//           <h3 class="title">${song.name}</h3>
//           <p class="author">${song.singer}</p>
//         </div>
//         <div class="option">
//           <i class="fas fa-ellipsis-h"></i>
//         </div>
//       </div>;
//       `;
//     });
//     $(".playlist").innerHTML = htmls.join("");
//   },
//   start() {
//     // Gán cấu hình từ config vào ứng dụng
//     this.loadConfig();

//     // Định nghĩa các thuộc tính cho object
//     this.defineProperties();

//     // Lắng nghe xử lý các sự kiện (DOM events)
//     this.handleEvents();

//     // Tải thông tin bài hát đầu tiên vào UI khi chạy ứng dụng
//     this.loadCurrentSong();

//     // Render playlist
//     this.render();

//     // Hiển thị trạng thái ban đầu của button repeat & random
//     randomBtn.classList.toggle("active", this.isRandom);
//     repeatBtn.classList.toggle("active", this.isRepeat);
//   },
// };

// app.start();
// </script>
// </html>
