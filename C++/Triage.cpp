#include <iostream>
using namespace std;
#define Mariama 100

    int main(){
        int n;

        cout << "Entrez la taille du tableau : ";
        cin >> n;

        if(n > Mariama){
            cout << "Vous avez depasse la taille maximale";
        }

        cout << "Saisissez les elements du tableau : " << endl;

        int tab[n];

        for(int compteur = 0;compteur < n;compteur++){
            cout <<"Element " << compteur + 1 <<" : ";
            cin >> tab[compteur];
        }

        for(int i = 0; i < n - 1;i++){
            for(int j = i + 1;j < n; j++){
                if(tab[j] < tab[i]){
                    int temp = tab[i];
                    tab[i] = tab[j];
                    tab[j]=temp;
                }
            }
        }

        cout <<"\n Les elements du tableau dans l'ordre croissant est : ";

        for(int i = 0;i < n;i++){
            cout << tab[i] << " ";
        }

        return 0;
    }