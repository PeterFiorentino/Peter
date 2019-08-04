let gotObj = {
  Lannisters : {Jamie : 40,
                Cersei : 40,
                Tyrion : 35,
                Tywyn : 70},

  Starks : { Arya : 18,
              Jon : 32,
            Sansa : 29}
}

console.log(gotObj["Lannisters"].Tyrion);


for (let family in gotObj) {
  console.log(family);
}
