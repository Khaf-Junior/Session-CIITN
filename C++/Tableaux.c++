#include <iostream>
using namespace std;
#define MAX 100

    int main(){
        int n;

        cout << "Entrez la taille du tableau : ";
        cin >> n;

        if(n > MAX){
            cout << "Vous avez depasse la taille maximale";
        }

        cout << "Saisissez les elements du tableau : " << endl;

        int tab[n];

        for(int compteur = 0;compteur < n;compteur++){
            cout <<"Element " << compteur + 1 <<" : ";
            cin >> tab[compteur];
        }

        cout << "\n Les elements du tableau sont : " << endl;

        for(int compteur = 0;compteur < n;compteur++){
            cout << tab[compteur] << " ";
        }

        return 0;
     }