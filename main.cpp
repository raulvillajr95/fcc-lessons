#include <iostream>
#include <vector>
#include <climits>
#include <numeric>
#include <cmath>
using namespace std;

void dispInt(const vector<int> arr)
{
   int n = arr.size();
   for (int i = 0; i < n; i++)
   {
      cout << arr[i] << " ";
   }
   cout << endl;
}

int solution(const vector<int> &arrayA, const vector<int> &arrayB, const vector<int> &arrayC)
{
   int pos = 0;
   int initPos = 0;
   int maxB = INT_MIN;
   int maxC = INT_MIN;

   int nA = arrayA.size();
   int nB = arrayB.size();
   int nC = arrayC.size();

   for (int i = 0; i < 3; i++)
   {
      if (pos >= nA)
      {break;}
      cout << "arrA: " << arrayA[pos] << endl;
      pos = arrayA[pos];

      if (pos >= nB)
      {break;}
      if (arrayB[pos] > maxB)
      {maxB = arrayB[pos];}
      cout << "arrB: " << arrayB[pos] << endl;
      pos = arrayB[pos];

      if (pos >= nA)
      {break;}
      cout << "arrA: " << arrayA[pos] << endl;
      pos = arrayA[pos]; 

      if (pos >= nC)
      {break;}
      if (arrayB[pos] > maxC)
      {maxC = arrayB[pos];}
      cout << "arrC: " << arrayC[pos] << endl;
      pos = arrayC[pos];

      if (pos == initPos)
      {
         break;
      } else
      {
         initPos = pos;
      }
   }

   return maxB + maxC;
}


////////////////// Bugs Life

double diag(double a, double b)
{
   return sqrt(a*a + b*b);
}

double shortestDistance(double x, double y, double z)
{
   double a = diag(x,y + z);
   double b = diag(x + y,z);
   double c = diag(x + z,y);

   double res = a;

   if(b < res)
   {
      res = b;
   }
   if(c < res)
   {
      res = c;
   }
   
   return res;
}


int main()
{
   vector<int> arrA = {2,1,3,0};
   vector<int> arrB = {1,3,2,4};
   vector<int> arrC = {4,2,5,1};

   // vector<int> arrA = {2,1,3,0};
   // vector<int> arrB = {1,3,2,4};
   // vector<int> arrC = {4,2,5,3};

   // cout << solution(arrA, arrB, arrC) << endl;



   ////////////
   cout << shortestDistance(1,2,3) << endl;
   cout << shortestDistance(1,1,1) << endl;
   cout << shortestDistance(134,191.5,45.5) << endl;


   return 0;
}

/*

get maxes
check repetition

/////////////
caculate 3 distances; get the shortes
diag of c b; + a
diag of c a; + b
diag of a b; + c



*/