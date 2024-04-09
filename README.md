# test-sys-man

1. Conto i possibili percorsi semplicemente contando gli oggetti con status = 1
2. Cerco i loro finali e li aggiungo a n array separati aggiungendo i to e i from degli oggetti con status = 1
3. Scorro l'array ends e, ad ogni subarray, scansiono network alla ricerca dell'oggetto con il to corrispondente al from del subarrays dell'ends
4. Se il to nel network è uguale al "from" di quel subarray (lo identifico con ends[j][x + 1]), vado oltre, cercando di nuovo nel network fino a finire tutto il percorso.
5. Alla fine stampo il numero dei percorsi e i percorsi stessi, questi ultimi come subarray di un array (ends).
