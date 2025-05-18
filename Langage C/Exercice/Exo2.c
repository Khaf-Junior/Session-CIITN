#include <stdio.h>

        main() {
        int n1;
        float n2, resultat;
        char o;

        printf("Entrez un nombre entier et un réel (2 chiffres après la virgule)\n");

        do {
            printf("Saisir un entier : ");
            scanf("%d", &n1);
            printf("Saisir un réel : ");
            scanf("%f", &n2);
        } while (n1 <= n2);

        printf("Saisir une opération (+, -, x, :) : ");
        scanf(" %c", &o); 

        switch (o) {
            case '+':
                resultat = n1 + n2;
                break;
            case '-':
                resultat = n1 - n2;
                break;
            case 'x':
                resultat = n1 * n2;
                break;
            case ':':
                if (n2 != 0) {
                    resultat = n1 / n2;
                } else {
                    printf("Erreur, on ne divise pas par 0\n");
                    return 1; 
                }
                break;
            default:
                printf("Opération invalide\n");
                return 1;
        }

        printf("Le résultat est : %.2f\n", resultat);

    }
