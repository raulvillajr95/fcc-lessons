#include <iostream>
using namespace std;

double calculator(double a, double b, char op)
{
    double res = 0.0;

    if(op == '+')
    {
        res = a+b;
    } else if(op == '-')
    {
        res = a-b;
    } else if(op == '*')
    {
        res = a*b;
    } else if(op == '/')
    {
        res = a/b;
    } else
    {
        throw invalid_argument ("Invalid argument");
    }

    return res;
}

int main()
{
    cout << calculator(1, 2, '+') << endl;
    cout << calculator(1, 2, '-') << endl;
    cout << calculator(3, 5, '*') << endl;
    cout << calculator(6, 2, '/') << endl;

    return 0;
}