#include <iostream>
using namespace std;

int countSquares(int n)
{

    if (n == 0)
    {
        return 1;
    } else if (n == 1)
    {
        return 8;
    }

    int a = (n+1)*(n+1)*6;
    int b = a - (2*8);
    int c = b - ((n+1-2)*12);

    return c;
}

int main()
{
    cout << countSquares(0) << endl;
    cout << countSquares(1) << endl;
    cout << countSquares(2) << endl;

    return 0;
}

/*
9*6 = 54
54 - (2*8) = 38
38 - (1*12) = 26

(n+1)*(n+1) * 6 = a
a - (2*8) = b
b - ((n+1-2)*12) = c

*/