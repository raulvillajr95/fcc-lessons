#include <iostream>
#include <vector>
#include <string>
#include <cstdio>
#include <cmath>
#include <bitset>
#include <set>
#include <sstream>
#include <utility>
#include <gumbo.h>
#include <curl/curl.h>
using namespace std;

// Check if parentheses are valid
bool validParentheses(const string& str)
{
   int balance = 0;
   for (int i = 0; i < str.length(); i++)
   {
      if (balance < 0)
      {
         return false;
      }
      
      if (str[i] == '(')
      {
         balance++;
      }
      else if (str[i] == ')')
      {
         balance--;
      }
   }
   
   if (balance != 0)
   {
      return false;
   }
   
   return true;
}

// Checks if numbers are the same sign
bool areSignsTheSame(int num1, int num2)
{
   if (num1 < 0 && num2 < 0)
   {
      return true;
   }
   else if (num1 > 0 && num2 > 0)
   {
      return true;
   }
   else
   {
      return false;
   }
}

// Checks if a number is a prime
bool isPrime(int n)
{
   if (n < 2 || n % 2 == 0)
   {
      return false;
   }
   else if (n == 2)
   {
      return true;
   }
   for (int i = 3; i <= sqrt(n); i += 2)
   {
      if (n % i == 0)
      {
         return false;
      }
   }
   return true;
}

// Remove place in a string
string removPlaceStr(int place, string s1)
{
   if (place < 0)
   {
      place = 0;
   }
   else if (place >= s1.length())
   {
      place = s1.length() - 1;
   }
   
   string part1 = s1.substr(0, place);
   string part2 = s1.substr(place+1, s1.length()-(place + 1));
   
   string result = part1 + part2;

   return result;
}

// Return true if the character is found in the string
bool isCharInStr(char letter, string test)
{
   bool isIn = false;
   
   set<char> s1;
   
   for (int i = 0; i < test.length(); i++)
   {
      s1.insert(test[i]);
   }
   
   auto pos = s1.find(letter);
   
   if (pos != s1.end())
   {
      isIn = true;
   }
   
   return isIn;
}

// Returns true if a string is numbers
bool strIsAllNums(string letters)
{
   bool result = true;
   
   for (int i = 0; i < letters.length(); i++)
   {
      if (isalpha(letters[i]))
      {
         result = false;
         break;
      }
   }
   
   return result;
}

// Get Nth number in Fibonacci sequence
int fibonacci(long long n)
{
    vector<long long> nums;

    int i = 0;
    while ( i < n)
    {
        if (i < 2)
        {
            nums.push_back(i);
        }
        else
        {
            long long newNum = nums[i-2] + nums[i - 1];
            nums.push_back(newNum);
        }
        i++;
    }

    

    return nums[n-1];
}

// Convert numbers 0-255 to Hex
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

// Turns characters to it's place in alphabet
int charToInt(char lett)
{
   lett = tolower(lett);
   int place = lett - 96;
   return place;
}

// Counts the times a char appears in a string
int countCharAppearances(string str, char cr)
{
   int count = 0;
   str = lowerStr(str);
   cr = tolower(cr);
   
   for (int i = 0; i < str.length(); i++)
   {
      if (str[i] == cr) count++;
   }
   
   return count;
}

// Lowercase a full string
string lowerStr(string str)
{
   string result = "";
   
   for (int i = 0; i < str.length(); i++)
   {
      result += tolower(str[i]);
   }
   
   return result;
}

// Converts integers to 32 bit strings
string intToBin(int num)
{
   bitset<32> binary(num);
   
   return binary.to_string();
}

// Check that a text is an isogram
bool is_isogram(string test)
{
   vector<int> letters(122, 0);
   for (int i = 0; i < test.length();i++)
   {
      char low = tolower(test[i]);
      int place = toascii(low);
      letters[place]++;
   }
   for (int i = 0; i < letters.size(); i++)
   {
      if (letters[i] > 1)
      {
         return false;
      }
   }
   return true;
}

// Check that a number is square
bool is_square(int n)
{
   int temp = sqrt(n);
   return (temp == sqrt(n));
}

// Seperates sentence by space; returning array/vector
vector<string> SeperateBySpace(string sentence)
{
   vector<string> words;

   int counter = 0;
   for (int i = 0; i < sentence.size(); i++) 
   {
      if (sentence.at(i) == ' ')
      {
         string word = sentence.substr(counter, i - (counter));
         words.push_back(word);
         counter = i + 1;
      }
   }

   return words;
}
// OR
vector<string> SeperateBySpace2(string sentence)
{
   vector<string> words;
   
   istringstream iss(sentence);
   
   for (string s; iss >> s;)
      words.push_back(s);

   return words;
}

// Removes duplicate characters in a string
string removeDuplicates(string starter)
{
   string result = "";
   
   for (int i = 0; i < starter.length(); i++)
   {
      char currentLetter = starter[i];
      bool in_result = false;
      
      for(int j = 0; j < result.length(); j++)
      {
         if (currentLetter == result[j])
         {
            in_result = true;
         }
      }
      
      if (in_result == false)
      {
         result += currentLetter;
      }
   }
   
   return result;
}

// Reverses and returns a string
string reverseString(string word)
{
    string result = "";

    for (int i = word.length() - 1; i >= 0; i--)
         result += word[i];
    
    return result;
}

// Read/write to file named 's'
// use 'cin' to read and 'cout' to write
void setIO(string s)
{
   freopen(( s + ".in").c_str(), "r", stdin);
   freopen((s + ".out").c_str(), "w", stdout);
}

struct Job {
    std::string title;
};

// Callback function for cURL to write received data into a string
size_t WriteCallback(void* contents, size_t size, size_t nmemb, std::string* output) {
    size_t totalSize = size * nmemb;
    output->append((char*)contents, totalSize);
    return totalSize;
}

// Function to fetch HTML content from a URL using cURL
std::string fetchHtmlFromUrl(const std::string& url) {
    CURL* curl = curl_easy_init();
    std::string html;

    if (curl) {
        curl_easy_setopt(curl, CURLOPT_URL, url.c_str());
        curl_easy_setopt(curl, CURLOPT_WRITEFUNCTION, WriteCallback);
        curl_easy_setopt(curl, CURLOPT_WRITEDATA, &html);

        CURLcode res = curl_easy_perform(curl);

        if (res != CURLE_OK) {
            std::cerr << "cURL failed: " << curl_easy_strerror(res) << std::endl;
        }

        curl_easy_cleanup(curl);
    } else {
        std::cerr << "cURL initialization failed." << std::endl;
    }

    return html;
}

void extractJobTitles(GumboNode* node, std::vector<Job>& jobs) {
    if (!node || node->type != GUMBO_NODE_ELEMENT) {
        return;
    }

    if (node->v.element.tag == GUMBO_TAG_H2) {
        if (node->v.element.children.length > 0) {
            GumboNode* textNode = static_cast<GumboNode*>(node->v.element.children.data[0]);
            if (textNode && textNode->type == GUMBO_NODE_TEXT) {
                Job job;
                job.title = textNode->v.text.text;
                jobs.push_back(job);
            }
        }
    }

    GumboVector children = node->v.element.children;
    for (unsigned int i = 0; i < children.length; ++i) {
        extractJobTitles(static_cast<GumboNode*>(children.data[i]), jobs);
    }
}

// Decimal base to binary numbers
//    *3 space indentation
long int decToBin(int decNum)
{
   vector<int> binNums;
   
   while (decNum > 0)
   {
      int bin = decNum % 2;
      decNum /= 2;
      binNums.push_back(bin);
   }
   
   long int result = 0;
   for (int i = 0; i < binNums.size(); i++)
   {
      result += binNums[i] * pow(10, i);
   }
   
   return result;
}

// Round a double to a number of places
double roundToDecPlaces(double value, int decimal_places)
{
   const double multiplier = pow(10.0, decimal_places);
   return round(value * multiplier) / multiplier;
}

// Capitalize the first character and uppercase the rest
string CapFirstChrLowerRest(string word)
{
   string result = "";
   result += toupper(word[0]);
   
   for (int i = 1; i < word.size(); i++ )
   {
      result += tolower(word[i]);
   }
   
   return result;
}

// Join array of strings by space
string JoinBySpace(vector<string> words)
{
   string result = "";
   
   for (int i = 0; i < words.size(); i++)
   {
      result += words[i];
      if (i < words.size() - 1)
      {
         result += " ";
      }
   }
   
   return result;
}

// Checks if a year is a leap year
bool IsLeapYear(int year)
{
   bool res = false;
   
   if (year % 4 == 0)
   {
      if (year % 100 == 0)
      {
         if (year % 400 == 0)
         {
            res = true;
         }
         else
         {
            res = false;
         }
      }
      else
      {
         res = true;
      }
   }
   else
   {
      res = false;
   }
   
   return res;
}

// Reverses a vector
vector<int> revArr(vector<int> arr)
{
   vector<int> res;
   
   int n = arr.size();
   for (int i = n-1; i >= 0; i--)
      res.push_back(arr[i]);
   
   return res;
}

// Returns true if an integer is in the vector
bool intInArr(vector<int> arr, int num)
{
   bool res = false;
   
   int n = arr.size();
   for (int i = 0; i < n; i++)
   {
      if (arr[i] == num)
      {
         res = true;
         break;
      }
   }
   
   return res;
}

// Returns true if a character is in the vector
bool charInArr(vector<char> arr, char ch)
{
   bool res = false;
   
   int n = arr.size();
   for (int i = 0; i < n; i++)
   {
      if (arr[i] == ch)
      {
         res = true;
         break;
      }
   }
   
   return res;
}

// Returns new vector with removed duplicates
vector<int> remDups(vector<int> arr)
{
   vector<int> res;
   
   int n = arr.size();
   for(int i = 0; i < n; i++)
   {
      if(!intInArr(res, arr[i]))
      {
         res.push_back(arr[i]);
      }
   }
   
   return res;
}

// Counts the times an integer appears in a vector
int numApp(vector<int> arr, int num)
{
   int res = 0;
   
   int n = arr.size();
   for(int i = 0; i < n; i++)
   {
      if (arr[i] == num)
         res++;
   }
   
   return res;
}

// Returns true if there are spaces on edge of string
bool edgeSpacing(const string& s)
{
   bool res = false;
   int n = s.size();
   
   if (s[0] == ' ' || s[n-1] == ' ')
   {
      res = true;
   }
  
   return res;
}

// Returns the most appearances of any single integer
bool intPairVect(vector<pair<int,int>>& counts, int num)
{
   bool res = false;
   
   int n = counts.size();
   for(int i = 0; i < n; i++)
      if (num == counts[i].first)
      {
         res = true;
         break;
      }
   
   return res;
}
void intPairVectInc(vector<pair<int,int>>& counts, int num)
{
   int n = counts.size();
   for(int i = 0; i < n; i++)
      if (num == counts[i].first)
      {
         counts[i].second++;
         break;
      }
}
int intPairVectMax(vector<pair<int,int>>& counts)
{
   int max = counts[0].second;
   
   int n = counts.size();
   for(int i = 1; i < n; i++)
      if (counts[i].second > max)
         max = counts[i].second;
   
   return max;
}

unsigned int most_frequent_item_count(const vector<int>& collection)
{
   vector<pair<int, int>> counts;
   
   int n = collection.size();
   
   if (n <= 1)
      return n;
   
   for (int i = 0; i < n; i++)
   {
      if(!intPairVect(counts, collection[i]))
      {
         pair<int, int> temp;
         temp.first = collection[i];
         temp.second = 1;
         counts.push_back(temp);
      }
      else if (intPairVect(counts, collection[i]))
      {
         intPairVectInc(counts, collection[i]);
      }
   }
   return intPairVectMax(counts);
}

// Seperate int into single digits
vector<int> seperateInt(int num)
{
   vector<int> res;
   
   int n = to_string(num).size();
   for (int i = 0; i < n; i++)
   {
      int temp = num % 10;
      num = (num - temp) / 10;
      res.insert(res.begin(), temp);
   }
   
   return res;
}

// Return the factorial of a num
int factorial(int num)
{
   int res = 1;
   
   for (int i = 1; i <= num; i++)
      res *= i;
   
   return res;
}

// Return nth digit starting from right. Starts with 1.
int findDigit(int num, int nth)
{
   if (num < 0)
      num = -num;
   
   int n = to_string(num).size();
   
   if (nth < 1)
      return -1;
   else if (nth > n)
      return 0;
   
   vector<int> sepInt =  seperateInt(num);
   
   return sepInt[n-nth];
}

// Removes integer from given vector
void removeInt(vector<int>& arr, int num)
{
   int n = arr.size();
   for(int i = 0; i < n;)
   {
      if(arr[i] == num)
      {
         arr.erase(arr.begin() + i);
         n = arr.size();
      }
      else
      {
         i++;
      }
   }
}

// Returns true if integer's digits are sorted
bool tidyNumber(int number)
{
   vector<int> sepNum = seperateInt(number);
   vector<int> sepNumCopy = sepNum;
   sort(sepNum.begin(), sepNum.end());
   
   bool isSorted = true;
   
   int n = sepNum.size();
   for (int i = 0; i < n; i++)
      if (sepNum[i] != sepNumCopy[i])
         isSorted = false;
   
   return isSorted;
}

// Displays single line of integers on console
void displayIntVec(vector<int> nums)
{
   int n = nums.size();
   for(int i = 0; i < n; i++)
   {
      cout << nums[i] << " ";
   }
   cout << endl;
}

void displayStrVec(vector<string> arr)
{
   int n = arr.size();
   for(int i = 0; i < n; i++)
   {
      cout << arr[i] << " ";
   }
   cout << endl;
}

// Combine 2 integer vectors
vector<int> combineTwoVec(vector<int> vec1, vector<int> vec2)
{
   vector<int> res;
   
   int n1 = vec1.size();
   for (int i = 0; i < n1; i++)
   {
      res.push_back(vec1[i]);
   }
   
   int n2 = vec2.size();
   for (int i = 0; i < n2; i++)
   {
      res.push_back(vec2[i]);
   }
   
   return res;
}

// Seperate by specified char
vector<int> sepByChar(string str, char cr)
{
   stringstream ss(str);
   string item;
   vector<int> nums;
   while(getline(ss, item, cr))
   {
      nums.push_back(stoi(item));
   }

   return nums;
}

int main() {
    // URL of the website to scrape
    std::string url = "https://realpython.github.io/fake-jobs/";  // Replace with your URL

    // Fetch HTML content from the URL
    std::string html = fetchHtmlFromUrl(url);

    GumboOutput* output = gumbo_parse(html.c_str());

    if (output && output->root) {
        std::vector<Job> jobs;
        extractJobTitles(output->root, jobs);

        if (jobs.empty()) {
            std::cerr << "No job titles found." << std::endl;
        } else {
            std::cout << "Job Titles:" << std::endl;
            for (const auto& job : jobs) {
                std::cout << "- " << job.title << std::endl;
            }
        }
    } else {
        std::cerr << "Error parsing HTML" << std::endl;
    }

    gumbo_destroy_output(&kGumboDefaultOptions, output);

    return 0;
}