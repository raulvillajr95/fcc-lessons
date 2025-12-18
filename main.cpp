#include <iostream>
#include <vector>
using namespace std;

void dispInt(vector<int> arr)
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

   for (int i = 0; i < 3; i++)
   {
      cout << arrayA[pos] << endl;
      pos = arrayA[pos];

      cout << arrayB[pos] << endl;
      pos = arrayB[pos];

      cout << arrayC[pos] << endl;
      pos = arrayC[pos];
   }

   return 0;
}


//////////////////



int main()
{
   vector<int> arrA = {2,1,3,0};
   vector<int> arrB = {1,3,2,4};
   vector<int> arrC = {4,2,5,1};

   solution(arrA, arrB, arrC);

   ////////////




   return 0;
}

/*



/////////////


*/