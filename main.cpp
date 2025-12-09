#include <iostream>
#include <vector>
using namespace std;

void dispInt(vector<int> nums)
{
   int n = nums.size();
   for (int i = 0; i < n; i++)
   {
      cout << nums[i] << " ";
   }
   cout << endl;
}

vector<int> breakUpInt(int num)
{
   vector<int> res;

   while (num > 10)
   {
      int first = num % 10;
      num -= first;
      num /= 10;
      res.insert(res.begin(), first);
   }
   res.insert(res.begin(), num);

   return res;
}

vector<int> digits(int num)
{
   vector<int> res;

   vector<int> digi = breakUpInt(num);
   int n = digi.size();
   for(int i = 0; i < n-1; i++)
   {
      for (int j = i+1; j < n; j++)
      {
         res.push_back(digi[i] + digi[j]);
      }
   }

   return res;
}

int main()
{
   vector<int> test1 = breakUpInt(12345);
   dispInt(test1);
   vector<int> dig1 = digits(12345);
   dispInt(dig1);

   return 0;
}

/*


check for negative bit
check for exponents
check for mantissa

*/