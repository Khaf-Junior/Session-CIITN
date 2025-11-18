#include <iostream>
using namespace std;

    int main(){

        int age;

        cout << "Saisir votre age : ";
        cin >> age;

        if(age < 0 || age >= 21){
            cout << "Vous ne faites pas partie de la catégorie !";
        }else if(age > 0 && age <= 10){
            cout << "Dora est à votre portée ";
        }else if(age > 10 && age <= 15){
            cout << "Les 5 legendes est a votre portée";
        }else{
            cout << "Game of Thrones est a votre portée";
        }
        
        return 0;
    }
