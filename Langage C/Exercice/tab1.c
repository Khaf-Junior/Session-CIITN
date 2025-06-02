#include<stdio.h>
main(){
    int i,n;
    printf("saisissez un entier");
    scanf("%d",&n);
    int tab[n];
    for (i=0; i<n;i++){
        printf("entre un %d entier",i+1);
        scanf("%d",&tab[i]);
    }
    printf("les entiers sont: \n");
    for(i=0;i<n;i++){
        printf("%d\n",tab[i]);
    }
}