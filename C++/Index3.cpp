#include <iostream>
#include <string> // Bibliothèque pour inclure les chaines de caractère
using namespace std;

    int main(){
        float taille;
        int age;
        std::string NomComplet = "Mariama";
        std::string Adresse = "Sacre Coeur";

        std::cout << "Entrez votre age : " ;
        std::cin >> age;

        std::cout << "Entrez votre taille : " ;
        std::cin >> taille;

        std::cout << "Bonjour "<<NomComplet <<" .Vous avez " <<age <<" ans. Vous habitez a "<< Adresse << std::endl;
        std::cout << "Votre taille est : " << taille << " m." ;
        return 0;
    }