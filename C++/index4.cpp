#include <iostream>
using namespace std;

    int main(){

        int age;
        cout << "Saisir votre age : ";
        cin >> age;

        if(age <= 0){
            cout << "L'age ne doit pas etre négative ";
        }else{
            cout << "Votre age est : " << age;
        }
        
        return 0;
    }