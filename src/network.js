let network = [
  { from: 0, to: 1, status: 0 },
  { from: 1, to: 2, status: 0 },
  { from: 2, to: 3, status: 0 },
  { from: 3, to: 4, status: 1 },
  { from: 3, to: 5, status: 0 },
  { from: 5, to: 6, status: 1 },
  { from: 2, to: 7, status: 0 },
  { from: 7, to: 8, status: 1 },
  { from: 1, to: 9, status: 0 },
  { from: 9, to: 10, status: 0 },
  { from: 10, to: 11, status: 1 },
  { from: 10, to: 12, status: 0 },
];

function findPath(network) {
  // 1. Trovo le radici
  let countPossibleResults = 0;
  // Finali dei percorsi
  let ends = [];

  // risultati
  let results = [];
  for (let i = 0; i < network.length; i++) {
    if (network[i].status === 1) {
      countPossibleResults += 1;
      let to = network[i].to;
      let from = network[i].from;
      ends.push([to, from]);

      //   // 2. Trovo percorsi
      //   results.push();
    }
  }

  // 2. Trovo percorsi
  for (let j = 0; j < ends.length; j++) {
    // console.log("end ", ends[j]);
    for (let x = 0; x < ends[j].length; x++) {
      for (let y = 0; y < network.length; y++) {
        // console.log("controllo network ", network[y].to, ends[j][x + 1]);
        if (network[y].to === ends[j][x + 1]) {
          ends[j].push(network[y].from);
        }
      }
    }
  }

  // 3. Stampo numero possibili risultati
  console.log(
    "N° possibili risultati sono: ",
    countPossibleResults,
    "e i finali sono: ",
    ends
  );
}
