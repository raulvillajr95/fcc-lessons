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

vector<string> sepBySpace(string message)
{
   int n = message.size();
   vector<string> res;
   string temp = "";

   for(int i = 0; i < n; i++)
   {
      if(message[i] == ' ')
      {
         res.push_back(temp);
         temp = "";
      }  else if (i == n-1)
      {
         temp += message[i];
         res.push_back(temp);
      } else 
      {
         temp += message[i];
      }
   }

   return res;
}

int strToInt(string strNum)
{
   int res = 0;

   if(strNum == "one")
   {
      res = 1;
   } else if(strNum == "two")
   {
      res = 2;
   } else if(strNum == "three")
   {
      res = 3;
   } else if(strNum == "four")
   {
      res = 4;
   } else if(strNum == "five")
   {
      res = 5;
   } else if(strNum == "six")
   {
      res = 6;
   } else if(strNum == "seven")
   {
      res = 7;
   } else if(strNum == "eight")
   {
      res = 8;
   } else if(strNum == "nine")
   {
      res = 9;
   }
   
   return res;
}

vector<int> scoreboard(const string &s)
{
   vector<string> sepped = sepBySpace(s);

   int n = sepped.size();
   vector<int> res;
   int first = strToInt(sepped[n-2]);
   res.push_back(first);

   int second = strToInt(sepped[n-1]);
   res.push_back(second);

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