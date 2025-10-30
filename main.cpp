#include <iostream>
using namespace std;

bool isOpposite(const string& s1, const string& s2)
{
    int n1 = s1.size();
    int n2 = s2.size();

    if(n1 == 0 || n2 == 0 || (n1 != n2))
    {
        return false;
    }

    bool res = true;

    for(int i = 0; i < n1; i++)
    {
        int diff = s1[i] - s2[i];
        char s1Low = tolower(s1[i]);
        char s2Low = tolower(s2[i]);

        if(diff == 0 || (s1Low != s2Low))
        {
            res = false;
        }
    }

    return res;
}

int main()
{
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