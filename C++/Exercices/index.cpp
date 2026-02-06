#include <iostream>
using namespace std;
#define Mariama 100

int main(){
    int n;

    cout << "Entrez la taille du tableau : ";
    cin >> n;

    if(n > Mariama){
        cout << "Vous avez depasse la taille maximale";
        return 0;
    }

    cout << "Saisissez les elements du tableau : " << endl;
    int tab[n];

    for(int i = 0; i < n; i++){
        cout << "Element " << i+1 << " : ";
        cin >> tab[i];
    }

    // -------- Inversion du tableau --------
    for(int i = 0; i < n/2; i++){
        int temp = tab[i];
        tab[i] = tab[n-1-i];
        tab[n-1-i] = temp;
    }

    cout << "\nTableau inverse : ";
    for(int i = 0; i < n; i++){
        cout << tab[i] << " ";
    }

    cout << endl;
    return 0;
}
