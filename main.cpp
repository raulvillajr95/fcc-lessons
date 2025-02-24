#include <iostream>
using namespace std;

void square(int side, char fillCharacter)
{
    for (int i = 0; i < side; i++)
    {
        for (int j = 0; j < side; j++)
        {
            cout << fillCharacter;
        }
        cout << endl;
    }
    
}

int main()
{
    int sideLen;
    char fillChar;
    cout << "Enter a character and the side length: ";
    cin >> fillChar >> sideLen;

    square(sideLen, fillChar);

    return 0;
}