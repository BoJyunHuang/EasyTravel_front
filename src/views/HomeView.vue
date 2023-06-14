<script>

</script>

<template>
  <main>

    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
          aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
          aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
          aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="../assets/pic/fuji.jpg" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="../assets/pic/fujisan.webp" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="../assets/pic/fuji.jpg" class="d-block w-100" alt="...">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <nav>
      <div class="serviceicon mt-5">
        <i class="fa-solid fa-bicycle"></i>
        <i class="fa-solid fa-motorcycle"></i>
        <i class="fa-solid fa-car"></i>
      </div>
      <h3 class="text-center mt-5">EasyTravel とは</h3>
      <div class="down">
        <img src="https://pngimg.com/uploads/hyundai/hyundai_PNG11233.png" style="height: 90px;">
        <div class="note mt-5">
          <p class="text-center">EasyTravel とは</p>
          <p class="text-center">乗りたい時に借りて、行きたい場所で</p>
          <p class="text-center">返すことができる自転車の</p>
          <p class="text-center">シェア（共有）サービスです。</p>
          <p class="text-center">電車、車に次ぐ新しい交通手段として</p>
          <p class="text-center">颯爽と赤い電動自転車でラクラクと</p>
          <p class="text-center">漕ぎ出してみませんか？</p>
        </div>
        <img src="https://tse1.mm.bing.net/th?id=OIP.4Ag7SKI1WQ2yIdzNxegPGwHaEW&pid=Api&P=0&h=180" alt=""
          style="height: 120px;">
      </div>
      <nav class="area" style="height: 300px;width: 500px;">
        <div class="bg">
          <img src="../../public/logo2.png" alt="" class="logo">
        </div>
        <div class="bgcon">
          <p>公式アプリを使えば、自転車をすぐに利用できます。

            お近くのポート情報が地図上から検索できるほか、各コミュニティサイクルに登録できたり、最新情報も受け取れる公式アプリです。</p>
          <nav>
            <img src="../../public/appstore.jpg" class="store">
          </nav>
        </div>
        <!-- <img src="https://tse3.mm.bing.net/th?id=OIP.pOMEk61ug9XSsDMDtMmDAQHaFH&pid=Api&P=0&h=180" -->
        <!-- class="sco" style="height: 90px;"> -->
        
      </nav>
    </nav>

  </main>
</template>

<style lang="scss" scoped>
img {
  height: 350px;
}

.serviceicon {
  font-size: 4rem;
  display: flex;
  justify-content: space-around;

}

.down {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.area {
  display: flex;
  margin-left: 30%;
}

.logo {
  height: 50px;
  width: 50px;
  margin-left: 30%;
  margin-top: 65%;
}

.bg {
  background-image: url("../../public/phone.jpg");
  height: 250px;
  width: 450px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

.bgcon {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.store {
  height: 40px;
  width: 130px;
}
// .sco{
//   margin-top: 5rem;
//   margin-left: 10rem;
// }
</style>
