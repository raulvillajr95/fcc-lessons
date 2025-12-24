#include <iostream>
#include <vector>
#include <climits>
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


//////////////////

bool inD(string num, char d)
{
   int count = 0;
   int n = num.size();
   for(int i = 0; i < n; i++)
   {
      if(d == num[i])
      {
         count++;
      }
   }

   return count == (d-'0');
}

bool is_dd(int n)
{
   string num = to_string(n);
   int nN = num.size();
   bool res = false;
   for(int i = 0; i < nN; i++)
   {
      if (inD(num, num[i]))
      {
         res = true;
         break;
      }
      
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

   cout << solution(arrA, arrB, arrC) << endl;



   ////////////



   return 0;
}

/*

get maxes
check repetition

/////////////
helper func: is d in num d times?




*/