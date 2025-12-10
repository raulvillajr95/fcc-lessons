#include <iostream>
#include <vector>
using namespace std;

// string addLargeNumbers(string num1, string num2)
// {
//    int 
// }

vector<int> L(int n, int L0, int L1, int add)
{
   vector<int> res = {L0, L1};

   for(int i = 2; i < n; i++)
   {
      int temp1 = res[i-1];
      int temp2 = res[i-2];
      res.push_back(temp1 + temp2 + add);
   }

   return res;
}

int main()
{

   return 0;
}

/*



check for negative bit
check for exponents
check for mantissa

*/