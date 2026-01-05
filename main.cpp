#include <iostream>
#include <vector>
#include <climits>
#include <cmath>
using namespace std;

// void dispInt(const vector<int> arr)
// {
//    int n = arr.size();
//    for (int i = 0; i < n; i++)
//    {
//       cout << arr[i] << " ";
//    }
//    cout << endl;
// }

// int solution(const vector<int> &arrayA, const vector<int> &arrayB, const vector<int> &arrayC)
// {
//    int pos = 0;
//    int initPos = 0;
//    int maxB = INT_MIN;
//    int maxC = INT_MIN;

//    int nA = arrayA.size();
//    int nB = arrayB.size();
//    int nC = arrayC.size();

//    while(true)
//    {
//       if (pos >= nA)
//       {break;}
//       cout << "arrA: " << arrayA[pos] << endl;
//       pos = arrayA[pos];

//       if (pos >= nB)
//       {break;}
//       if (arrayB[pos] > maxB)
//       {maxB = arrayB[pos];}
//       cout << "arrB: " << arrayB[pos] << endl;
//       pos = arrayB[pos];

//       if (pos >= nA)
//       {break;}
//       cout << "arrA: " << arrayA[pos] << endl;
//       pos = arrayA[pos]; 

//       if (pos >= nC)
//       {break;}
//       if (arrayB[pos] > maxC)
//       {maxC = arrayB[pos];}
//       cout << "arrC: " << arrayC[pos] << endl;
//       pos = arrayC[pos];

//       if (pos == initPos)
//       {
//          break;
//       } else
//       {
//          initPos = pos;
//       }
//    }

//    return maxB + maxC;
// }


//////////////////
vector<vector<int>> solve(int n)
{
   vector<vector<int>> res;

   for(int i = 0; i < n; i++)
   {
      vector<int> temp;
      for(int j = 0; j < n; j++)
      {
         if(i == j)
         {
            temp.push_back(1);
         } else
         {
            temp.push_back(0);
         }
      }
      res.push_back(temp);
   }

   return res;
}

int main()
{
   // vector<int> arrB = {1,3,2,4}; // 7
   // vector<int> arrA = {2,1,3,0};
   // vector<int> arrC = {4,2,5,1};

   // vector<int> arrA = {2,1,3,0}; // 7
   // vector<int> arrB = {1,3,2,4};
   // vector<int> arrC = {4,2,5,3};

   // cout << solution(arrA, arrB, arrC) << endl;



   ////////////


   return 0;
}

/*

get maxes
check repetition

/////////////



*/