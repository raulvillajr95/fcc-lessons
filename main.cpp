#include <iostream>
#include <cmath>
using namespace std;

int pyramid(int n)
{
   return (-1.0 + sqrt(1.0 - 4.0*(-2*n)))/2.0;
}

int main()
{
   cout << pyramid() << endl;
   cout << pyramid() << endl;
   cout << pyramid() << endl;
   cout << pyramid() << endl;
   cout << pyramid() << endl;

   return 0;
}

/*

*/