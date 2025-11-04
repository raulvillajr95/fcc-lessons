#include <iostream>
#include <cmath>
using namespace std;

using point = const pair<double, double>;

pair<double, double> barTriang(point a, point b, point c)
{
    double xo = (a.first + b.first + c.first) / 3.0;
    double yo = (a.second + b.second + c.second) / 3.0;

    xo = round(xo * 10000.0) / 10000.0;
    yo = round(yo * 10000.0) / 10000.0;

    cout << "xo: " << xo << endl;
    cout << "yo: " << yo << endl;

    return {xo, yo};
}

int main()
{
    barTriang({4,6}, {12,4},{10,10});
    barTriang({4,2}, {12,2},{6,10});

    return 0;
}
