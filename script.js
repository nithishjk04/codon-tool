const codonTable = {
  TTT: "Phe", TTC: "Phe", TTA: "Leu", TTG: "Leu",
  CTT: "Leu", CTC: "Leu", CTA: "Leu", CTG: "Leu",
  ATT: "Ile", ATC: "Ile", ATA: "Ile", ATG: "Met",
  GTT: "Val", GTC: "Val", GTA: "Val", GTG: "Val",
  TCT: "Ser", TCC: "Ser", TCA: "Ser", TCG: "Ser",
  CCT: "Pro", CCC: "Pro", CCA: "Pro", CCG: "Pro",
  ACT: "Thr", ACC: "Thr", ACA: "Thr", ACG: "Thr",
  GCT: "Ala", GCC: "Ala", GCA: "Ala", GCG: "Ala",
  TAT: "Tyr", TAC: "Tyr", TAA: "Stop", TAG: "Stop",
  CAT: "His", CAC: "His", CAA: "Gln", CAG: "Gln",
  AAT: "Asn", AAC: "Asn", AAA: "Lys", AAG: "Lys",
  GAT: "Asp", GAC: "Asp", GAA: "Glu", GAG: "Glu",
  TGT: "Cys", TGC: "Cys", TGA: "Stop", TGG: "Trp",
  CGT: "Arg", CGC: "Arg", CGA: "Arg", CGG: "Arg",
  AGT: "Ser", AGC: "Ser", AGA: "Arg", AGG: "Arg",
  GGT: "Gly", GGC: "Gly", GGA: "Gly", GGG: "Gly"
};

function translateDNA() {
  const input = document.getElementById("dnaInput").value.toUpperCase().trim();
  const outputEl = document.getElementById("output");
  const codonEl = document.getElementById("codonList");

  if (!input) {
    outputEl.textContent = "Please enter a DNA sequence.";
    codonEl.textContent = "—";
    return;
  }

  if (!/^[ATGC]+$/.test(input)) {
    outputEl.textContent = "Invalid sequence. Use only A, T, G, C.";
    codonEl.textContent = "—";
    return;
  }

  if (input.length < 3) {
    outputEl.textContent = "Sequence too short. Need at least 3 bases.";
    codonEl.textContent = "—";
    return;
  }

  const codons = [];
  for (let i = 0; i < input.length - 2; i += 3) {
    codons.push(input.slice(i, i + 3));
  }

  const aminoAcids = codons.map(codon => codonTable[codon] || "?");

  codonEl.textContent = codons.join(" - ");
  outputEl.textContent = aminoAcids.join(" - ");

  if (aminoAcids.includes("Stop")) {
    outputEl.textContent += "  ⛔ (Stop codon found)";
  }
}

function clearAll() {
  document.getElementById("dnaInput").value = "";
  document.getElementById("output").textContent = "—";
  document.getElementById("codonList").textContent = "—";
}
