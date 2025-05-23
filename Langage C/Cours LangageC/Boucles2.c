#include <stdio.h>

    main(){
        int compteur,n,y;
        compteur = 0;

        printf("Saisir une valeur: ");
        scanf("%d",&n);

        while(compteur<=10){
            y = n * compteur;
            printf("%d x %d = %d \n",n,compteur,y);
            compteur++;
        }

    }