#include <iostream>
using namespace std;

    int main(){
        int a,compteur = 1;
        cout << "Veuillez saisir la valeur de a : ";
        cin >> a;

        for(compteur;compteur<=a;compteur++){
            if(compteur == 12){
                break;
            }
                cout << compteur << "\n";
        }

        
        return 0;
    }