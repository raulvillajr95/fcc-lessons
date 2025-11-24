#include <iostream>
#include <cmath>
using namespace std;

long double tunnProb(long double m, long double L, long double U_0, long double E)
{
   // // Conversions
   // L = 

   // Prep computation
   long double beta = sqrt((2*m*(U_0 - E))/(pow((6.626e-34/(2*M_PI)),2)));
   long double k = sqrt((2*m*E)/(pow((6.626e-34/(2*M_PI)),2)));
   long double gamma = (beta/k) - (k/beta);
   long double betaL = beta * L;
   long double cosh2 = cosh(betaL) * cosh(betaL);
   long double sinh2 = sinh(betaL) * sinh(betaL);

   // debug
   cout << beta << endl;
   cout << k << endl;
   cout << gamma << endl;

   // Final comp
   long double P = 100 / (cosh2 + ((gamma/2)*(gamma/2))*sinh2);
   return P;
}

int main()
{
   cout << tunnProb(6.64e-27, 2e-15, 4.806e-12, 4.646e-12) << endl;
   cout << tunnProb(6.64e-27, 2e-15, 4.806e-12, 3.204e-12) << endl;

   string word = "helLo";
   string wordLow = "";

   // Lower letters;
   int n = word.size();
   for (int i = 0; i < n; i++)
   {
      wordLow += tolower(word[i]);
   }

   // If 1 letter, return "0"

   // Check if
   int num = 0;
   for(int i = 1; i < n; i++)
   {

   }

   return 0;
}

/*
need to make it faster

possibly find a k + k+1 type pattern to get final result

*/