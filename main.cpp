#include <iostream>
using namespace std;

string replace(const string &s)
{
    string res = "";

    int n = s.size();
    for(int i = 0; i < n; i++)
    {
        switch(s[i])
        {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
            case 'A':
            case 'E':
            case 'I':
            case 'O':
            case 'U':
                res += "!";
                break;
            default:
                res += s[i];
        }
    }

    return res;
}

int main()
{
    cout << replace("Hallo world") << endl;

    return 0;
}