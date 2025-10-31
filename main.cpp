#include <iostream>
#include <cmath>
using namespace std;

double square_area(double s)
{
    double r = s / (M_PI / 2.0);

    double res = round(r*r*100)/100;

    return res;
}

int main()
{
    cout << square_area(2) << endl;

    return 0;
}

/*
s = rt
r = s/t
r = s/(π/2)
*/