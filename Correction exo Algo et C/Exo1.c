#include <stdio.h>

        main() {
            
        int nombre, compteur = 0;

        do {
            printf("Entrez un nombre entre 20 et 50 : ");
            scanf("%d", &nombre);
            compteur++;
        } while (compteur < 3 && (nombre < 20 || nombre > 50));

        if (nombre >= 20 && nombre <= 50) {
            printf("Bravo\n");
        } else {
            printf("Echoue\n");
        }

    }
