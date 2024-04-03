#include <iostream>
#include <vector>
#include <string>
using namespace std;

string numToHex(int num)
{
    string hex = "";

    if (num >= 255)
    {
        hex = "FF";
    }
    else if (num <= 0)
    {
        hex = "00";
    }
    else
    {
        int test = ((num / 16) % 16) + 48;
        char str1 = test;
        if (((num / 16) % 16) > 9)
        {
            str1 = ((num / 16) % 16) + 55;
        }

        int test2 = (num % 16) + 48;
        char str2 = test2;
        if ((num % 16) > 9)
        {
            str2 = (num % 16) + 55;
        }
        hex = string(1, str1) + str2;
    }

    return hex;
}

string rgb_to_hex(int r, int g, int b)
{
    string result = "";
    result += numToHex(r);
    result += numToHex(g);
    result += numToHex(b);

    return result;
}

int main()
{
    // cout << numToHex(148) << endl;
    cout << rgb_to_hex(148,0,125) << endl;

    // string hex = "";

    // if (num >= 255)
    // {
    //     hex = "FF";
    // }
    // else if (num <= 0)
    // {
    //     hex = "00";
    // }
    // else
    // {
    //     int test = ((num / 16) % 16) + 48;
    //     char str1 = test;
    //     if (((num / 16) % 16) > 9)
    //     {
    //         cout << "SII" << endl;
    //         str1 = ((num / 16) % 16) + 55;
    //         hex += str1;
    //         cout << str1;
    //     }

    //     int test2 = (num % 16) + 48;
    //     char str2 = test2;
    //     if ((num % 16) > 9)
    //     {
    //         cout << "NOO" << endl;
    //         str1 = ((num / 16) % 16) + 55;
    //         str2 = (num % 16) + 55;
    //         hex += str2;
    //         cout << str2 << endl;
    //     }
    //     hex = string(1, str1) + str2;
    // }

    // cout << hex << endl;

    // // Testing
    int num = 125;
    int test = ((num / 16) % 16) + 48;
    char str1 = test;
    if (((num / 16) % 16) > 9)
    {
        str1 = ((num / 16) % 16) + 55;
    }

    int test2 = (num % 16) + 48;
    char str2 = test2;
    if ((num % 16) > 9)
    {
        str2 = (num % 16) + 55;
    }
    auto hex2 = string(1, str1) + str2;
    // cout  << "Num: " << num << " Hex?: " << str1 << str2 << " \%\%: " << test2 << endl;
    // cout << hex2 << endl;

    return 0;
}