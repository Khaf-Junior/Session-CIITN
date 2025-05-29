#include <stdio.h>

main()
{
    float notes[5];

    printf("Saisir l'element 1 du tableau: ");
    scanf("%f", &notes[0]);

    printf("Saisir l'element 2 du tableau: ");
    scanf("%f", &notes[1]);

    printf("Saisir l'element 3 du tableau: ");
    scanf("%f", &notes[2]);

    printf("Saisir l'element 4 du tableau: ");
    scanf("%f", &notes[3]);

    printf("Saisir l'element 5 du tableau: ");
    scanf("%f", &notes[4]);

    printf("les elements saisis sont : %.2f %.2f %.2f %.2f %.2f ", notes[0], notes[1], notes[2], notes[3], notes[4]);
}