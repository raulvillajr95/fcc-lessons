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

string low(string word)
{
   string res = "";
   int n = word.size();
   for(int i = 0; i < n; i++)
   {
      res += tolower(word[i]);
   }
   return res;
}

unsigned int countConsonants(const string& str)
{
   string strLow = low(str);
   vector<int> letts(26);
   int n = str.size();
   for(int i = 0; i < n; i++)
   {
      int charNum = strLow[i] - 'a';
      if(charNum > 0 && charNum < 4)
      {
         letts[charNum]++;
      } else if (charNum > 4 && charNum < 8)
      {
         letts[charNum]++;
      } else if (charNum > 8 && charNum < 14)
      {
         letts[charNum]++;
      } else if (charNum > 14 && charNum < 20)
      {
         letts[charNum]++;
      } else if (charNum > 20 && charNum < 26)
      {
         letts[charNum]++;
      }
   }

   int count = 0;
   for(int i = 0; i < 26; i++)
   {
      if(letts[i] > 0)
      {
         count++;
      }
   }

   return count;
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


   cout << ('z' - 'a') << endl;

   return 0;
}

/*

get maxes
check repetition

/////////////



*/