#include <iostream>
#include <vector>
#include <climits>
using namespace std;

int solution(vector<int> arrayA, vector<int> arrayB, int sizeA, int sizeB)
{
   int indexA = 0;
   int indexB = -1;
   bool in_arrayA = true;
   int max_value = INT_MIN;

   while (true)
   {
      if (in_arrayA)
      {
         indexB = arrayA[indexA];
         if (arrayB[indexB] > max_value)
         {
            max_value = arrayB[indexB];
         }
      } else
      {
         indexA = arrayB[indexB];
         if (indexA == 0)
         {
            return max_value;
         }
      }
      in_arrayA = !in_arrayA;
   }
}

//////////////////

void disP(vector<int> arr)
{
   int n = arr.size();
   for (int i = 0; i < n; i++)
   {
      cout << arr[i] << " ";
   }
   cout << endl;
}

vector<int> squareUp(int n)
{
   vector<int> res;
   for(int i = 0; i < n; i++)
   {
      for(int j = n; j > 0; j--)
      {
         if (j > i+1)
         {
            res.push_back(0);
         }
         else
         {
            res.push_back(j);
         }
      }
   }

   return res;
}

int main()
{
   // vector<int> arrayA = {2, 4, 3, 1, 6};
   // vector<int> arrayB = {4, 0, 3, 2, 0};
   // int sizeA = arrayA.size();
   // int sizeB = arrayB.size();

   // cout << "Maximum value encountered in arrayB: " << solution(arrayA, arrayB, sizeA, sizeB) << endl;

   ////////////
   vector<int> test1 = squareUp(3);
   disP(test1);


   return 0;
}

/*



/////////////


*/