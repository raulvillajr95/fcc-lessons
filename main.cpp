#include <iostream>
using namespace std;

bool canSnailReachEnd(double x, double y, double z)
{
    double travel = 0.0;
    int min = 0;
    bool res = true;
    while(travel < x)
    {
        travel += y;
        x += z;
        min++;

        // if min more than year, false
        if (min > 525600)
        {
            res = false;
            break;
        }

    }

    return res;
}

int main()
{
    return 0;
}
