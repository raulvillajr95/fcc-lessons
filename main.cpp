#include <iostream>
#include <bitset>
using namespace std;

string evil(int num)
{
    bitset<8> numBin(num);

    int count = 0;

    for (int i = 0; i < 8; i++)
    {
        if(numBin[i] == 1)
        {
            count++;
        }
    }

    string res = "It's Odious!";
    if (count % 2 == 0)
    {
        res = "It's Evil!";
    }

    return res;
}

int main()
{
    cout << evil(34) << endl;

    return 0;
}
