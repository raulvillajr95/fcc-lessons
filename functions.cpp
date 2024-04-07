#include <vector>
#include <string>
#include <cstdio>
#include <cmath>
#include <bitset>
#include <set>
using namespace std;

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
    {
        result += word[i];
    }
    
    return result;
}

// Read/write to file named 's'
// use 'cin' to read and 'cout' to write
void setIO(string s)
{
   freopen(( s + ".in").c_str(), "r", stdin);
   freopen((s + ".out").c_str(), "w", stdout);
}

#include <iostream>
#include <sstream>
#include <string>
#include <vector>
#include <gumbo.h>
#include <curl/curl.h>  // Add this line for cURL

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