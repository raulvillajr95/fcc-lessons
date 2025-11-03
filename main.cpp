#include <iostream>
#include <vector>
#include <string>
using namespace std;

int sumInts(int num)
{
    int sum = 0;

    string numStr = to_string(num);
    int n = numStr.size();

    for (int i = 0; i < n; i++)
    {
        int charInt = numStr[i] - '0';
        sum += charInt;
    }

    return sum;
}

string SubtractSum(int num)
{
    vector<string> fruits = {"kiwi", "pear", "kiwi", "banana", "melon", "banana", "melon", "pineapple", "apple", "pineapple", "cucumber", "pineapple", "cucumber", "orange", "grape", "orange", "grape", "apple", "grape", "cherry", "pear", "cherry", "pear", "kiwi", "banana", "kiwi", "apple", "melon", "banana", "melon", "pineapple", "melon", "pineapple", "cucumber", "orange", "apple", "orange", "grape", "orange", "grape", "cherry", "pear", "cherry", "pear", "apple", "pear", "kiwi", "banana", "kiwi", "banana", "melon", "pineapple", "melon", "apple", "cucumber", "pineapple", "cucumber", "orange", "cucumber", "orange", "grape", "cherry", "apple", "cherry", "pear", "cherry", "pear", "kiwi", "pear", "kiwi", "banana", "apple", "banana", "melon", "pineapple", "melon", "pineapple", "cucumber", "pineapple", "cucumber", "apple", "grape", "orange", "grape", "cherry", "grape", "cherry", "pear", "cherry", "apple", "kiwi", "banana", "kiwi", "banana", "melon", "banana", "melon", "pineapple", "apple", "pineapple"};

    num = num - sumInts(num);

    while(num < 1 || num > 100)
    {
        num = num - sumInts(num);
    }

    // cout << num << endl;

    return fruits[num - 1];
}

int main()
{
    // cout << sumInts(325) << endl;
    cout << SubtractSum(325) << endl;
    cout << SubtractSum(10) << endl;

    return 0;
}
