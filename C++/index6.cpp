#include <iostream>
using namespace std;

    int main(){
        int choix;

        cout <<"Menu de l'operation: \n";
        cout << "1. Addition \n";
        cout << "2. Soustraction \n";
        cout << "3. Multiplication \n";
        cout << "4. Division \n";
        cin >> choix;

        switch(choix){
            case 1:
                cout << "Vous avez choisi Addition.";
                break;
            case 2:
                cout << "Vous avez choisi Soustraction.";
                break;
            case 3:
                cout << "Vous avez choisi Multiplication.";
                break;
            case 4:
                cout << "Vous avez choisi Division.";
                break;
            default :
                cout << "Le choix n'est pas valide !";
                break;
        }
        return 0;
    }
