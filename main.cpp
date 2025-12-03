#include <iostream>
#include <cmath>
using namespace std;

int pyramid(int n)
{
   return (-1.0 + sqrt(1.0 - 4.0*(-2*n)))/2.0;
}

int main()
{
   cout << pyramid(1) << endl;
   cout << pyramid(3) << endl;
   cout << pyramid(6) << endl;
   cout << pyramid(10) << endl;
   cout << pyramid(15) << endl;

   return 0;
}

/*

*/