#include <stdio.h>

    main(){
        int n,compteur;
        compteur = 0;

        do{
            printf("Saisir une valeur: ");
            scanf("%d", &n);
            compteur++;

            if(n != 3){
                printf("Incorrect. \n");
            }else{
                printf("Correct. \n");
            }
        }while(n != 3);

        printf("Vous avez fait %d tentatives \n",compteur);
        printf("Bravo ! Vous avez reuissi ! ");

    }
 