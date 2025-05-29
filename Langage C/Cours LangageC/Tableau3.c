#include <stdio.h>

    main(){
        float notes[5];
        int i;
        
        for(i = 0; i <= 4; i++ ){
            printf("Saisir l'entier numero %d : ", i+1);
            scanf("%f",&notes[i]);
        } 

        printf("\n Les entiers saisis sont: \n");

        for(i=0; i<5; i++){
            printf("%.2f \n",notes[i]);
        }

    }