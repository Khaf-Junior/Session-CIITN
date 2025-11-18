#include <iostream>
using namespace std;

    int main(){
        int valeur;

        cout<<"Entrez une valeur :";
        cin >> valeur;
        while(valeur != 4){
            cout << "Entrez une autre valeur :";
            cin >> valeur;
        }
        cout << "Vous avez gagne !";
        return 0;
    }