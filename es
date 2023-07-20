Esercizio 1. What do the colors mean?

Flag nascosta in immagine con tecnica LSB.
- Introduco exiftool e il comando strings. Nessun risultato utile.
- Introduco zsteg e trovo la flag, confermando la tecnica LSB.


%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


Esercizio 2. Steganography is the practice of concealing messages or information within other nonsecret data and images. The doge holds the information you want, feed the doge a treat to get the hidden message.

Flag nascosta in immagine. Si scopre utilizzando una passphrase.
- Tento i tool precedenti. Nessun risultato utile.
- Scopro la flag con steghide.
steghide info the_doge.jpg
steghide extract -sf the_doge.jpg

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


Esercizio 3. One OF my friends like to hide data IN images. Help me to find out the secret IN image.

Flag nascosta in immagine appesa ad altre.
- Tento i tool precedenti. Nessun risultato utile.
- Con strings qualcosina scopro
- Introduco binwalk. Scopro immagini appese.
- Introduco dd e scopro un QR che mi da la flag.

binwalk -e stego.jpg
dd if=stego.jpg of=flag.jpeg ibs=1 skip=202

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


Esercizio 4. It's not LSB, its MSB! Red is Random, Green is Garbage, Blue is Boring. Hint: only one channel is correct. Also, I like to doing things top down.

Flag nascosta in immagine con tecnica MSB.
- Tento i tool precedenti. Nessun risultato utile.
- Script in python per analizzare i pixel e scoprire la chiave.


%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


Esercizio 5. Do you have a prism to take a closer look?

Flag nascosta in 3 immagini derivanti da quella iniziale.
- Tento i tool precedenti. Nessun risultato utile.
- Script in python per estrapolare immagini dai canali R-G-B dell'immagine
- Introduco zbarimg per scannerizzare le immagini e stampare su terminale la chiave.


%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


Esercizio 6.
Flag nascosta in pcap.
- All'interno di wireshark, utilizzo statistiche e filtri per rilevare un comportamento anomalo all'interno dei pacchetti.
- Estraggo la flag guardando i pacchetti.
- Script in python per estrarre informazioni utili dai pacchetti e quindi la flag.

