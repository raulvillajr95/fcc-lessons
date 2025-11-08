#include <iostream>
#include <utility>
using namespace std;

pair<int, int> swap_values(pair<int, int> values)
{
    int temp = values.first;
    values.first = values.second;
    values.second = temp;

    return values;
}

int main()
{
    pair<int, int> paired = swap_values({123, 321});

    cout << paired.first << endl;
    cout << paired.second << endl;

    return 0;
}
