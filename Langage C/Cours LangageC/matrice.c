#include <stdio.h>

int main() {
    int i, j, matrice[3][3];

    printf("Saisissez les elements de la matrice :\n");

    // Saisie des éléments
    for(i = 0; i < 3; i++) {
        for(j = 0; j < 3; j++) {
            printf("Element [%d][%d] : ", i + 1, j + 1);
            scanf("%d", &matrice[i][j]);
        }
    }

    printf("\nMatrice saisie :\n");

    for(i = 0; i < 3; i++) {
        for(j = 0; j < 3; j++) {
            printf("%4d", matrice[i][j]); 
        }
        printf("\n");
    }

    return 0;
}
