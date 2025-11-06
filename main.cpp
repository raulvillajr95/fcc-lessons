#include <iostream>
#include <cmath>
using namespace std;

double converter(int mpg)
{
    double kpl = mpg * 1.609344 * (1.0/4.54609188);
    return round(kpl * 100.0)/100.0;
}

int main()
{
    return 0;
}
