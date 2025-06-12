#include <stdio.h>

    float Somme (int a,float b){
        return a + b;
    }

    main(){
        int a;
        float b,somme;

        printf("Saisir un entier: ");
        scanf("%d",&a);

        printf("Saisir un reel: ");
        scanf("%f",&b);

        somme = Somme(a,b);

        printf("%d + %.2f = %.2f ",a,b,somme);

    }
        