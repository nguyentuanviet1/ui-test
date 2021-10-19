<template>
  <div >
    <header>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href=""><h2>Pluvego</h2></a>
            <div class="absolute navbar-brand">Martin.D. <a href=""> Se déconnecter</a></div>
        </nav>
    </header>
    <div class="">
      <div class="row">
        <div class="col-sm-2 content">
          <div class="note-content">
            <h4>Mes alertes</h4>
            <h4>Mes assets</h4>
            <h4>Mes contacts</h4>
            <h4>Profil</h4>
          </div>
        </div>
        <div class="col-sm-10">
            <div class="a">
            <h2>Profil</h2>
            </div>
            <div class="container note-content">
              <label class="name"><b>Nom</b></label>
              <input class="style-input" type="text" placeholder="Racine ">
              <br>
              <label class="name"><b>Prénom</b></label>
              <input class="style-input" type="text" placeholder="Jean">
              <br>
              <label class="name"><b>Fonction</b></label>
              <input class="style-input" type="text" placeholder="Directeur de la publication">
              <br>
              <label class="name"><b>Adresse email</b></label>
              <input class="style-input" type="text" placeholder="jean.racine@societe.com" >
              <br>
              <div class="box">
              <label class="name"><b>Numéro de téléphone</b></label>
              <div class="input-group mb-3 dropdown-data">
                <button type="button" class="btn btn-outline-secondary">Action</button>
                <button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                  <span class="visually-hidden">+30</span>
                </button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item" href="#">Separated link</a></li>
                </ul>
              </div>
              <div class="phone-number">
              <input type="text" placeholder="687654321" name="uname" value="">
              </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'user',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.a {
  text-align: center;
}
.content {
  height: 900px;
 border-right: 1px solid black;
}
.note-content {
  margin: 20px;
}
.name {
  width: 180px;
  margin-top: 30px;
}
.box {
    display: flex;
    flex-wrap: nowrap;
}
.dropdown-data {
  margin-top: 20px;
  width: 120px;
}
.phone-number {
  margin-top: 20px;
}
.style-input {
  width: 400px;
}
.absolute {
  position: absolute;
  right: 0;
  /* color:; */
}
</style>
