function DNAStrand(dna){
  let new_dna = "";
  for (let i = 0; i < dna.length; i++) {
    switch (dna[i]) {
    case 'A':
      new_dna += 'T';
      break;
    case 'T':
      new_dna += 'A';
      break;
    case 'C':
      new_dna += 'G';
      break;
    case 'G':
      new_dna += 'C';
      break;
    default:
    }
  }
  console.log(new_dna);
  return new_dna;
}