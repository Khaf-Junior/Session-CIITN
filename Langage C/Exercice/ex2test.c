#include<stdio.h>
main(){
    int i,n, som, moy ;
    printf("saisissez un entier");
    scanf("%d",&n);
    int tab[n];
    for (i=0; i<n;i++){
        printf("entre un %d entier",i+1);
        scanf("%d",&tab[i]);
    }
    som=0;
    printf("la somme des entiers saisi est ");
    for(i=0;i<n;i++){
        som =tab[i]+som;
        printf("%d",som);
    }
   
}