#include <iostream>
#include <vector>
using namespace std;

bool oper(bool a, bool b, string str)
{

    bool res = false;

    if (str == "AND")
    {
        res = a && b;
    }
    else if (str == "OR")
    {
        res = a || b;
    }
    else if (str == "XOR")
    {
        res = a xor b;
    }

    return res;
}

bool logicalCalc(const vector<bool>& items, const string& op)
{
    bool res = true;

    int n = items.size();

    for (int i = 0; i < n-1; i++)
    {
        if(i == 0)
        {
            res = oper(items[i], items[i+1], op);
        } else
        {
            res = oper(res, items[i+1], op);
        }
    }

    return res;
}

int main()
{
    cout << oper(true, true, "AND") << endl;
    cout << oper(true, false, "AND") << endl;
    cout << oper(true, true, "OR") << endl;
    cout << oper(true, false, "OR") << endl;
    cout << oper(true, true, "XOR") << endl;
    cout << oper(false, false, "XOR") << endl;

    return 0;
}

/*
s = rt
r = s/t
r = s/(π/2)
*/