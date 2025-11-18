#include <iostream>
using namespace std;

    int main(){
        int valeur;

        do{
            cout << "Entrez une valeur : ";
            cin >> valeur;
            if(valeur != 4){
                cout << " Mauvaise reponse, ";
            }
        }while(valeur != 4);
        cout << "Vous avez gagne !";
        return 0;
    }