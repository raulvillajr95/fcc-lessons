#include <iostream>
using namespace std;

unsigned int hotpo(unsigned int n)
{
    int count = 0;

    while(n != 1)
    {
        if(n % 2 == 0)
        {
            n /= 2;
        }
        else
        {
            n = 3*n + 1;
        }
        count += 1;
    }

    return count;
}

int main()
{
    cout << hotpo(1) << endl;
    cout << hotpo(5) << endl;

    return 0;
}